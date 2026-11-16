---
date: 2026-10-26
description: Building an append-only key-value store and solving its durability, indexing, compaction, and recovery challenges.
---

## Introduction

In this article, I will walk through my implementation of a small append-only key-value store. The design is based on ideas from [Designing Data-Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/), particularly the discussion of log-structured storage and indexing.

I will explain my interpretation of those ideas, the implementation decisions I made, and the problems that led to each design change. The complete implementation is available on [GitHub](https://github.com/somtojf/lsm-tree).

The project is intentionally simple. It is a learning and research project rather than a production database. The current implementation supports persistent reads and writes, in-memory indexes, concurrency control, segmentation, compaction, and index rebuilding when the database is reopened.

## The most basic form of a database

According to the book, the most basic form of a database is simply something that reads and writes to a file. For example:

```shell
db_set () {
    echo "$1,$2" >> database
}

db_get () {
    grep "^$1," database | sed -e "s/^$1,//" | tail -n 1
}
```

*This is an approximation of the example from the book.*

```shell
db_set 123456 '{"name":"London","attractions":["Big Ben","London Eye"]}'

db_set 42 '{"name":"San Francisco","attractions":["Golden Gate Bridge"]}'

db_get 42
{"name":"San Francisco","attractions":["Golden Gate Bridge"]}
```

This design is straightforward. Writes are efficient because each record is appended to the file. Reads, however, require scanning the file to find the latest record for a key. The read cost is therefore `O(n)`, where `n` is the amount of data that must be scanned.

In many real-world applications, reads make up a large portion of database operations, so a linear read path quickly becomes a problem. The next question is how to make reads more efficient without giving up the simplicity of append-only writes.

> What if we store offsets for each key?

## Indexes and offsets

Instead of scanning the entire file for every read, we can store the location of each key in memory. The index maps a key to the byte offset and length of its record in the database file.

When a `Get` request arrives, the database looks up the key in the map, seeks directly to the stored offset, and reads only the required number of bytes. Hash-map lookup is average-case `O(1)`, so this makes reads much faster at the cost of keeping an index in memory.

The central tradeoff is that the data remains on disk, but the metadata needed to find it remains in memory. This also introduces a new problem: what happens to the in-memory index when the process exits or crashes?

The current implementation addresses reopening by scanning the active file and rebuilding indexes from segment hint files. That recovery path becomes more important as the database adds durability, segmentation, and compaction.

The core index structures look like this:

```go
type SomtoDB struct {
    dbFileName string
    dbDir      string
    filePath   string

    // Records in the active database file.
    currIndexes map[int]indexEntry

    // Records stored in immutable segment files.
    segementedIndexes map[int]indexEntry

    fileSize       int
    mutex          sync.Mutex
    maxSegmentSize int
    file           *os.File
    segmentCount   int
    segmentDir     string
}

type indexEntry struct {
    offset      int
    length      int
    segmentName *string
}
```

The `segmentName` field is nil for records in the active file. For records in an older segment, it points to the segment data file that contains the record.

The read path first checks the active index and then the segmented index:

```go
func (db *SomtoDB) Get(key int) (string, error) {
    db.mutex.Lock()
    defer db.mutex.Unlock()

    indexData, err := db.readIndex(key)
    if err != nil {
        return "", err
    }

    readData, err := db.read(indexData)
    if err != nil {
        return "", err
    }

    value := strings.TrimPrefix(
        string(readData),
        fmt.Sprintf("key: %d, value: ", key),
    )
    return strings.TrimSuffix(value, "\n"), nil
}
```

The active index takes precedence because a newer write must override an older value stored in a segment.

## Concurrency control

Databases would be simpler to implement if every operation happened sequentially. In practice, reads and writes can happen at the same time, so the database must protect shared state and file access.

The `SomtoDB` struct uses a `sync.Mutex`. `Set`, `Get`, and `Close` acquire the mutex before accessing the file or the indexes. This prevents concurrent operations from observing partially updated state or writing conflicting records.

The write path appends the record and then updates the corresponding index entry:

```go
func (db *SomtoDB) writeLocked(key int, data []byte) error {
    if _, err := db.file.Write(data); err != nil {
        return err
    }

    db.currIndexes[key] = indexEntry{
        offset: db.fileSize,
        length: len(data),
    }
    db.fileSize += len(data)
    return nil
}
```

The helper assumes that the caller already holds the mutex. Keeping the locking at the public operation level makes the order of each database operation easier to follow.

## Durability changes the write path

A plain `Write` is fast because it usually updates the operating system's page cache and returns before storage confirms persistence. After a process or machine crash, recently acknowledged data may therefore be lost.

The durable write path is:

```text
queue request → encode record → append batch → Sync → acknowledge writers
```

`Sync` introduces a major performance cost because each acknowledgement waits for storage durability. This explains the benchmark drop from roughly tens of thousands of writes per second to roughly 100 sequential writes per second. The benefit is direct: successful writes now have a substantially stronger persistence guarantee.

The design is WAL-like: writes are ordered and durable before they are acknowledged, but there is no separate WAL file. The append-only active file is the durable record log.

### Why queue writes?

Syncing every write independently would be inefficient:

```text
write → sync
write → sync
write → sync
```

The queue instead groups requests for up to 5 ms:

```text
write
write  → one batch → one Sync
write
```

One expensive sync serves multiple writes, concurrent callers share a single writer, file ordering stays centralized, and acknowledgements remain durability-aware. Burst workloads therefore achieve much better throughput. The tradeoff is that individual writes may wait briefly for the commit window, while isolated writes still pay most of the sync cost.

## Segmentation and compaction

An append-only file grows forever. Even when a key is updated, the old record remains in the file. The in-memory index points to the newest record, but the obsolete records still consume disk space.

To control this growth, the database uses an active-file threshold. The current threshold is 1,024 bytes. Once the active file exceeds that threshold, it is renamed into a compaction snapshot and new writes use a fresh active file.

Background compaction performs the following steps:

1. Create a segment data file and a matching binary `.hint` file.
2. Copy the latest record for every key in the active index into the segment data file.
3. Write each record's key, length, and offset to the hint file.
4. Publish the completed segment through a manifest.
5. Replace the snapshot's index entries with the new segment entries and remove the snapshot.

The segment data file contains the records themselves. The hint file contains fixed-size metadata entries, allowing the indexes to be reconstructed when the database is reopened without scanning every segment record.

Background compaction keeps foreground writes from waiting for all compaction work. It rewrites only the latest value for each key, and immutable segments are easier to read and validate. Hint files make index rebuilding cheaper because startup can find values without scanning every segment record.

The costs are extra file management, duplicate temporary data during compaction, background I/O, and more complex recovery and lifecycle handling.

### Manifest-based compaction recovery

Compaction publishes data in an explicit sequence:

1. Write data and hint files to temporary paths.
2. Sync both files.
3. Rename them to their final names.
4. Record their names, sizes, and CRC in the manifest.
5. Sync and publish the manifest.

The manifest is the authoritative segment list. Startup ignores unlisted segment files and validates listed files before using them. `MANIFEST.prev` is a fallback: if the newest manifest is invalid, the previous valid manifest can be used.

Pending `.compacting.*` snapshots cover another crash window. A crash can happen after the active file is moved but before compaction finishes and publishes a segment. Startup reads valid records from those snapshots, so those records are recovered instead of being lost.

This protocol adds metadata, syncs, renames, cleanup, and validation work. In return, compaction publication is explicit and recoverable.

## Persistence and reopening

The database stores its active records in `data.txt` and its compacted records in a `segments` directory. On startup, it:

- reads every segment hint file in segment order;
- validates that each hint points to a valid range in its segment data file;
- rebuilds the segmented index;
- scans the active file and rebuilds the active index.

This means ordinary shutdown and reopening preserve the database contents. The implementation also rejects malformed or truncated hint entries.

Recovery is layered:

- Record headers and CRCs detect incomplete or corrupted records.
- Valid prefixes of the active file are retained.
- Damaged final records are truncated.
- Middle-file corruption causes initialization to fail rather than silently hiding data.
- Segment hints rebuild indexes without scanning all values.
- Manifest validation protects against incomplete compaction publication.
- `Repair` provides an explicit path for copying valid records into a new database.

The result is a practical recovery boundary: preserve data that can be validated safely, and fail loudly when a middle section cannot be trusted.

## Performance and the durability tradeoff

The database's speed depends heavily on both the active-file threshold and the amount of data being stored. It also depends on whether writes wait for durable storage.

Larger datasets produce more total writes and therefore more opportunities to trigger compaction. A smaller active-file threshold causes compaction to happen more frequently, even when the database is not very large. Since compaction reads and rewrites records, these additional compactions directly impact write speed and overall throughput.

The threshold is therefore a tuning tradeoff:

- A smaller threshold keeps the active file small but causes more frequent compactions.
- A larger threshold reduces compaction frequency but allows the active file to grow larger before it is compacted.

Plain appends maximize speed but provide weaker durability. `Sync` improves durability but dominates write latency. Group commits recover throughput for concurrent and bursty writes, while background compaction prevents compaction from blocking normal writes. Reads remain comparatively stable because indexed lookup is unchanged.

The crash-recovery benchmark shows the tradeoff: sequential `Set` changed from about 92,000 ops/s to about 103 ops/s, while `Get` moved only from about 13.4 to 14.2 us/op. Parallel writes benefit from batching but remain much slower than the non-durable baseline.

Reads are generally close to average-case `O(1)` after the indexes are built, but they still involve file I/O and may need to open a segment file. A write that triggers compaction is also more expensive than a normal append, although background execution keeps that work off the foreground path.

The latest benchmark results are documented in [BENCHMARKS.md](https://github.com/somtojf/lsm-tree/blob/main/BENCHMARKS.md). They show that the implementation performs differently depending on the workload, concurrency level, machine, data size, and compaction frequency. The numbers should therefore be treated as measurements of this implementation under specific test conditions, not as universal performance guarantees.

## Current limitations and next steps

This project currently demonstrates the core mechanics of an indexed append-only key-value store, but it is intentionally incomplete. Important next steps include:

- more efficient locking, such as separate read and write coordination;
- configurable segment thresholds;
- deletion and tombstone support;
- broader key and value formats;
- more extensive benchmarking and failure testing.

Building this store has been useful because each feature exposed another limitation in the previous design. The basic file-based implementation made reads too slow, the in-memory index introduced persistence concerns, and the growing append-only file required segmentation and compaction. That progression is the main lesson of the project: storage systems evolve by solving the problems created by their earlier optimizations.
