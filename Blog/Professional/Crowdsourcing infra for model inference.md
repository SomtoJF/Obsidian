---
date: 2026-11-02
description: A conceptual exploration of building a distributed LLM inference network that crowdsources GPU capacity, rejects unsuitable network nodes, splits model layers across capable machines, and coordinates execution through pipeline parallelism.
---
## Table Of Contents

- [[#Introduction|Introduction]]
- [[#The minimum viable architecture|The minimum viable architecture]]
- [[#Why start with inference?|Why start with inference?]]
- [[#Connecting workers behind home routers|Connecting workers behind home routers]]
- [[#Network admission control|Network admission control]]
- [[#The Ollama interface and the subprocess idea|The Ollama interface and the subprocess idea]]
- [[#Model partitioning with open weights|Model partitioning with open weights]]
- [[#Pipeline parallelism|Pipeline parallelism]]
- [[#Unequal layer allocation|Unequal layer allocation]]
- [[#The KV-cache problem|The KV-cache problem]]
- [[#Failures and failover|Failures and failover]]
- [[#A practical language split|A practical language split]]
- [[#A realistic first milestone|A realistic first milestone]]
- [[#Conclusion|Conclusion]]
- [[#Additional Resources|Additional Resources]]

## Introduction

I have been thinking about what it would take to build a distributed inference network out of machines that are already available: a Mac Studio here, a desktop GPU there, and a few friends willing to contribute idle compute.

The goal is simple. A user should be able to send a prompt to one endpoint while the underlying model runs across several independent machines. The machines do not need to be identical, and no single machine needs to hold the entire model. They only need to cooperate reliably enough to form one inference pipeline.

This is a conceptual system rather than a production design. The interesting parts are the orchestration, the networking, the model partitioning, and the tradeoffs that appear when the GPUs are separated by ordinary home networks.

## The minimum viable architecture

The first version does not need a complicated control plane. It needs a lightweight coordinator and a collection of worker nodes.

```text
[ User Request ] ──> [ Central Coordinator ]
                            │
                            ├──> [ Worker A: Mac Studio ]
                            ├──> [ Worker B: RTX 4090 ]
                            └──> [ Worker C: RTX 3080 ]
```

The coordinator is responsible for maintaining the cluster view, selecting workers, assigning model layers, and forwarding requests. Each worker runs a small client daemon alongside a local inference runtime.

The worker daemon reports information such as:

- available GPU memory;
- supported model runtimes;
- bandwidth and round-trip latency;
- current load;
- models or model layers already cached;
- whether the worker is healthy and ready to accept work.

The actual inference engine should initially be an existing project such as Ollama, llama.cpp, or vLLM. Writing CUDA kernels and a complete inference runtime is unnecessary for the first version. The custom system should focus on making several machines behave like one logical service.

## Why start with inference?

Large-scale training requires enormous amounts of data, coordination, checkpointing, and sustained compute. Inference is a much smaller surface area for an experiment.

An inference request is also easier to reason about. A prompt enters the system, moves through the model, and produces a stream of tokens. If the model is divided into sequential sections, each worker can process its section and pass the intermediate result to the next worker.

That makes inference a practical starting point for a side project. The first milestone could be a single prompt passing through two machines. The next could be a persistent session. After that, the system could add more workers, model sizes, and concurrent requests.

## Connecting workers behind home routers

The coordinator cannot assume that a worker has a public IP address or an open inbound port. Most workers will be behind NAT, firewalls, or changing residential connections.

The simplest approach is for every worker to establish an outbound, long-lived connection to the coordinator using WebSockets or gRPC. The coordinator sends work through that connection instead of trying to connect directly to the worker.

```text
[ Worker ] ── outbound WebSocket/gRPC tunnel ──> [ Coordinator ]
                                                     │
                                      routes requests through the tunnel
```

This is not a completely decentralized mesh, but it is much easier to build and operate. If direct peer-to-peer communication becomes important later, the transport could be replaced or extended with libp2p or WebRTC data channels.

## Network admission control

Home-network latency is one of the biggest risks in this design. Pipeline parallelism reduces communication compared with tensor parallelism, but every pipeline boundary still requires data to cross the network.

The cluster should therefore refuse to accept every machine automatically. A worker must pass an admission test before it can participate in a model pipeline.

```text
[ Worker joins ]
       │
       ▼
[ Measure bandwidth, RTT, jitter, and stability ]
       │
       ├── fails thresholds ──> [ Reject or quarantine worker ]
       │
       └── passes thresholds ──> [ Add worker to cluster ]
```

The coordinator can measure:

- minimum upload and download bandwidth;
- round-trip latency to the coordinator and candidate peers;
- jitter over a sustained probe;
- packet loss and connection stability;
- inference throughput on a small benchmark request.

Workers that fall below the cluster's configured thresholds are blocked from joining the active inference pool. A worker that later becomes slow can be marked unhealthy or removed after repeated failed checks.

This reduces the available capacity, but a smaller cluster with predictable connections is more useful than a larger cluster where one slow node becomes the bottleneck for every generated token.

## The Ollama interface and the subprocess idea

Ollama is useful because it provides a familiar local interface and handles much of the practical work around running open models. One possible direction is to keep Ollama on the user's machine and intercept the local runner process that Ollama expects to start.

The conceptual architecture looks like this:

```text
[ Ollama Go Server ]
          │
          ▼
[ Proxy Runner ]
          │
          ▼
[ Coordinator / Network Router ]
          │
          ├──> [ Remote GPU Worker A ]
          └──> [ Remote GPU Worker B ]
```

The proxy would expose the local interface Ollama expects, translate incoming inference requests into the cluster protocol, and stream results back. This would let the local Ollama API remain the entry point even though the computation happens elsewhere.

This is a useful prototype direction, but it should not be treated as an existing Ollama feature. The runner invocation details are implementation-specific, and arbitrary remote layer execution requires support from the underlying model runtime. A more robust long-term design may use a purpose-built runtime or an existing distributed inference project rather than replacing a binary by name.

## Model partitioning with open weights

Open-weight transformer models generally contain an embedding stage, a repeated sequence of transformer blocks, and a final language-model head.

```text
[ Prompt ]
    │
    ▼
[ Embedding ] ──> [ Layer 1 ] ──> ... ──> [ Layer N ] ──> [ LM Head ] ──> [ Token ]
```

That repeated structure makes layer-based partitioning possible in principle. One worker can hold the beginning of the model, another can hold the middle, and a final worker can hold the remaining layers and produce output tokens.

However, this does not mean that any model can be split automatically. The runtime must understand the model architecture, tensor shapes, quantization format, positional encoding, attention behavior, and the boundaries between stages. GGUF files also contain more than an easily separable list of independent layers. Model slicing therefore needs runtime support rather than a naive file-copying script.

## Pipeline parallelism

There are two obvious ways to distribute a model: tensor parallelism and pipeline parallelism.

Tensor parallelism splits individual matrix operations across devices. It requires frequent communication during each layer, which makes it a poor fit for machines connected through ordinary residential networks.

Pipeline parallelism splits the model into sequential ranges of layers. Each worker computes its range and passes an activation tensor to the next worker.

```text
[ Worker 1 ]                 [ Worker 2 ]                 [ Worker 3 ]
[ Layers 0-19 ] ──tensor──> [ Layers 20-39 ] ──tensor──> [ Layers 40-79 ]
                                                               │
                                                               ▼
                                                         [ Output token ]
```

The communication is less frequent, and the system matches the physical layout of the model. For this project, pipeline parallelism is the more natural starting point.

## Unequal layer allocation

The layers do not need to be split equally. In fact, equal splitting would be wasteful when the workers have different amounts of available memory and different processing speeds.

Suppose a quantized model is estimated to occupy 42 GB across 80 layers. A coordinator could use the available memory of each admitted worker to build an asymmetric layout:

| Worker | Available memory | Assigned layers | Role |
| --- | ---: | ---: | --- |
| Mac Studio | 24 GB | 0–39 | Pipeline entry |
| RTX 4090 | 16 GB | 40–69 | Middle stage |
| RTX 4060 laptop | 6 GB | 70–79 | Pipeline tail |

The exact allocation should account for more than memory. A worker with enough VRAM but poor bandwidth may still be unsuitable. The coordinator should balance:

- memory capacity;
- compute throughput;
- network latency and bandwidth;
- expected activation-transfer cost;
- current load and availability.

The result is a resource-aware pipeline rather than a fixed arrangement of identical machines.

## The KV-cache problem

The most important state in autoregressive inference is the key-value cache. As the model processes a conversation, each layer keeps information about previous tokens so that the entire context does not need to be recomputed for every new token.

If the cache is constantly moved between workers, the network will quickly become the bottleneck. The coordinator should therefore pin an inference session to the same sequence of workers for its lifetime.

```text
[ Session ]
    │
    ├──> [ Worker A keeps cache for layers 0-19 ]
    ├──> [ Worker B keeps cache for layers 20-39 ]
    └──> [ Worker C keeps cache for layers 40-79 ]
```

Only the required activations for the next step should cross each pipeline boundary. This makes the system stateful, but it avoids repeatedly transferring large amounts of historical data.

## Failures and failover

Crowdsourced workers will disappear. Someone may close a laptop, start another GPU-heavy program, lose their connection, or simply stop the worker process.

The coordinator should track heartbeats and execution health. If a worker stops responding, the affected session can be marked failed and routed to another compatible pipeline if one exists.

Streaming makes failures visible quickly, but seamless continuation is difficult. A new worker cannot automatically reconstruct the lost KV cache. The practical first version should retry from a known checkpoint or restart the request on another pipeline. More advanced recovery could periodically replicate cache state, but that introduces additional memory and network costs.

## A practical language split

I would use a hybrid implementation.

Go is a good fit for the coordinator and worker daemon. It handles persistent network connections, concurrent sessions, health checks, scheduling, and streaming naturally. It is also close to Ollama's implementation language, which makes the surrounding code easier to inspect.

Python is a good fit for model experiments. The machine-learning ecosystem already provides the tools needed to inspect model metadata, load transformer layers, test tensor serialization, and compare execution strategies.

The split could look like this:

```text
[ Go ]
Coordinator, worker daemon, admission checks, scheduling, transport, streaming

[ Python ]
Model inspection, layer partitioning experiments, tensor execution, benchmarks
```

The first prototype could even keep both parts in Python to reduce development time. Go becomes more valuable as the networking and concurrency requirements grow.

## A realistic first milestone

The first useful version should be much smaller than the complete vision:

1. Run one model across two trusted machines.
2. Use a coordinator with persistent worker connections.
3. Benchmark bandwidth, latency, and inference throughput before admission.
4. Assign fixed layer ranges manually.
5. Send activations between the workers.
6. Stream generated tokens back to the client.
7. Add heartbeats and reject workers that fail network or health checks.

Once this works, the system can add dynamic layer allocation, session scheduling, model caching, and recovery. Starting with dynamic scheduling before proving the basic execution path would create too many moving parts at once.

## Conclusion

The idea is to turn several reliable, heterogeneous machines into one virtual inference system. A coordinator admits only workers that meet the network requirements, assigns model layers according to available resources, and keeps each session pinned to a stable pipeline.

The architecture is attractive because it uses existing inference engines and open model weights instead of requiring a new AI runtime from scratch. It is also difficult for the same reason: the system sits at the boundary between distributed systems, GPU execution, model internals, and unreliable networks.

The most sensible path is to begin with a small, fixed two-node pipeline. Once the basic movement of activations and tokens is reliable, the more ambitious pieces—heterogeneous allocation, dynamic admission, failover, and a familiar Ollama-compatible interface—can be added one at a time.

## Additional Resources

- [PipeDream: Fast and Efficient Pipeline Parallel DNN Training](https://arxiv.org/abs/1806.03377) — foundational work on pipelining neural-network computation across machines.
- [Petals: Collaborative Inference and Fine-tuning of Large Models](https://arxiv.org/abs/2209.01188) — especially relevant work on distributed large-model inference over independently contributed hardware.
- [Exo](https://github.com/exo-explore/exo) — an open-source distributed inference project that connects local devices into a cluster.
- [Petals repository](https://github.com/bigscience-workshop/petals) — implementation details for distributed inference and fine-tuning of large models.
- [Ollama repository](https://github.com/ollama/ollama) — useful for understanding Ollama's server, model, and runner architecture.
