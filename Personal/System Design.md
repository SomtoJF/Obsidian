## Legend
1. [System Architecture](##system_architecture)
2. High Level Architecture of a Production App
3. CAP Theorem
4. Resilience
5. System Speed
6. Networking

## Content
### System Architecture
#### Memory
There's two types of memory
1. Volatile memory: Cache and RAM
2. Non Volatile Memory
Cache is super fast. Computer checks L1 cache -> L2 cache -> L3 cache -> RAM. Purpose of the cache is to reduce the average time to access data.

#### CPU
The brain of the computer. Can only understand information in bits (0s and 1s). Compilers compile high level language into machine code which the CPU then executes to carry out tasks.

### High Level Architecture of a Production App
#### CI/CD (Continuous Integration/Continuous Deployment)
This involves a series of automated tests and checks to make sure an app is stable and bug free before it gets to production. Can be done using platforms like Jenkins and Github Actions.

#### Load Balancing
Ensures smooth user experience under heavy traffic by distributing user requests among multiple servers using algorithms like round robin, least recently used (LRU). Can be done using platforms like NGINX

### CAP Theorem (Consistency, Availability and Partition Tolerance)
CAP Theorem states that all three cannot be 100% at all times. There must be a tradeoff with one in order to maximise the other two.
#### Consistency
Consistency Means that all nodes in a distributed system have the same data at the same time. Meaning that when data in one node is updated, all other nodes are updated in real time as well.
#### Availability
This means that system is always readily available and responsive to requests.

### Partition Tolerance
This is the ability of a system to keep functioning even if a network partition occurs. Therefore, if one node in the distributed system fails the others will keep functioning like normal.

### Resilience
There are three main parts to building a resilient application
1. Reliability: Ensuring the system works correctly and consistently
2. Fault Tolerance: Error Handling
3. Redundancy: This involves implementing backups so when one system fails another can take over.

### System Speed
Can be measured using **Throughput** and **Latency**
1. Throughput involves how many client requests a system can handle in a given period of time
	1. Server Throughput: Server requests per unit time
	2. DB Throughput: DB Queries per unit time
2. Latency is the average user request response time

## Networking
#### IP Address
Unique Identifier for a device on a network. There are two protocols
1. IPv4 (32 Bit): It allows for 4B unique addresses. However with the increasing number of devices we have since reached that limit and this brought about the development of IPv6
2. IPv6 (128 Bit)

#### Transfer Protocols
1. TCP (Transmission control protocol): Very reliable. Ensures that the data not only arrives but arrives that there are no missing packets and packets arrive in the right order. It does this using features such as **sequence numbers** and also the **3 way handshake** which establishes a stable connection between the sender and the receiver before the data transfer begins.
2. UDP (Universal Datagram protocol): Faster than TCP but doesn't establish a stable connection before data transfer and doesn't guarantee the delivery or order of the packets. However, it's speed makes it the preferred protocol for usecases where speed is of the essence like streaming or video calls etc.

#### Three-way Handshake