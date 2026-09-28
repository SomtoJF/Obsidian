---
date: 2026-09-02
description: Walkthrough of a key-value store, their shortcomings and evolutionary solutions to those resulting problems. Heavily Inspired by the book, Designing Data Intensive Applications by Martin Kleppmann and Michael Greim.
---
## Intro
In this article we will explore building an append-only key-value store according to the descriptions in the book, [Designing Data Intensive Applications](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/). I will talk about my interpretation of the book, my implementation and the challenges that led me to making certain design choices. You can find the code on my [github](https://github.com/somtojf/lsm-tree)

## The most basic form of a DB
According to the book, the most basic form a database is simply something that reads and writes to a file. For example,
```shell
db_set () {
	echo "$1,$2" >> database
}

db_get () {
	grep "^$1," database | sed -e "s/^$1,//" | tail -n 1
}
```
*Exact example from the book*
```shell
db_set 123456 '{"name":"London","attractions":["Big Ben","London Eye"]}'

db_set 42 '{"name":"San Francisco","attractions":["Golden Gate Bridge"]}'

db_get 42 {"name":"San Francisco","attractions":["Golden Gate Bridge"]}
```
*Reading and writing to the DB*

This is as straightforward as it gets. But obviously, there's an issue with this. Writes are pretty efficient but the reads have a runtime of $O(n)$. Meaning, we have to read the entire DB file to find the data we need. In must real-world applications, majority of the DB operations are reads so having a linear time read is a big issue. We will have to figure out how to make our reads significantly more efficient. But how do we actually do this?

> What if we store offsets for each key?
## Offsets
Pretty straightforward. We store the offsets of each key in memory with a hash-map. When a query comes in, instead of scanning the whole DB for the data, we check the map keyed by the primary key for the offset (location of the data in the DB file), seek to that point in the file and read the data we need. Although we sacrifice extra space for the indexes, our `get()` runtime has drastically reduced from $O(n)$ to $O(1)$. A worthwhile tradeoff.

```go
type SomtoDB struct {
	filePath string
	// maps keys to their corresponding value offsets in the file
	indexes map[int]indexEntry
	// number of bytes written to the file
	fileSize int
	// mutex to protect concurrent access to the database
	mutex sync.Mutex
	// max segment size in bytes
	maxSegmentSize int
	// db file
	file *os.File
}

type indexEntry struct {
	offset int
	length int
}

func (db *SomtoDB) Get(key int) (string, error) {
	indexData, err := db.readIndex(key)
	if err != nil {
		return "", err
	}

	readData, err := db.read(indexData)
	if err != nil {
		return "", err
	}
	
	value := strings.TrimPrefix(string(readData), fmt.Sprintf("key: %d, value: ", key))
	value = strings.TrimSuffix(value, "\n")

	return value, nil
}

func (db *SomtoDB) readIndex(index int) (indexEntry, error) {
	db.mutex.Lock()
	defer db.mutex.Unlock()

	indexData, ok := db.indexes[index]
	if !ok {
		return indexEntry{}, fmt.Errorf("key not found")
	}

	return indexData, nil
}

func (db *SomtoDB) read(indexData indexEntry) ([]byte, error) {
	data := make([]byte, indexData.length)

	_, err := db.file.ReadAt(data, int64(indexData.offset))
	if err != nil {
		return nil, err
	}

	return data, nil
}
```

Notice the `indexEntry` struct, we store the data byte length as well. We use this to know how many bytes to read when we want to read a particular value.
## Concurrency Control
Databases would be a lot easier to implement if reads and writes were completely sequential. However, **if wishes were horses beggars will ride**. Because this is almost always never the case, we have to make sure we handle issues that could occur when several processes read and write to the database at the same time. 

> How do we do this?

Notice the `sync.Mutex` in the `SomtoDB` struct? We use the mutex to control access to the DB so that two operations running concurrently don't corrupt the data. This is particularly useful for writes since they mutate the DB. 

> What happens if a process is writing to the db and another process begins writing to the same file before the last operation is complete? This is why we need a lock.

```go
func (db *SomtoDB) write(key int, data []byte) error {
	db.mutex.Lock()	
	defer db.mutex.Unlock()

	_, err := db.file.Write(data)
	if err != nil {
		return err
	}
	
	dataLength := len(data)
	entry := indexEntry{
		offset: db.fileSize,
		length: dataLength,
	}

	// store the offset of the value in the file	
	db.indexes[key] = entry
	
	// increment the file size
	db.fileSize += dataLength
	
	return nil
}

  

func (db *SomtoDB) Set(key int, value string) (string, error) {
	text := fmt.Sprintf("key: %d, value: %s\n", key, value)
	textbytes := []byte(text)
	
	err := db.write(key, textbytes)
	if err != nil {
		return "", err
	}

	return text, nil
}
```
*Writes to the DB*
## Segmentation and Compaction
==to be continued==

