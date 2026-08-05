> Please note that array questions and string questions are often interchangeable.

## Hash Maps
A hash map is a data structure that maps keys to values for efficient lookup. How does it do this? It does this using a combination of linked lists and an array.

> The implementation of a hash map is based on common knowledge that retrieval from an array when the index of the element is known is $O(1)$ meanwhile when searching for an element with unknown index, runtime is $O(N)$

### How a Hash Map Works
- The hash map stores the value in an array. But before that;
- The key is passed through a hash function
	- This hash function generates a long `int` value. The hash function implementation is such that the same key always yields the same value.
	- The calculation `int % array.length` is done to return a number within the length of the array.
	- The result of the above calculation is the index which the value will be stored. 
- Each array element is a Linked List. 
	- The reason for this is because two different hash codes could map to the same index. What happens if two different keys map to the exact same array index? (e.g., `"apple"` and `"banana"` both output index `3`). This is called a ==**Collision**==. To solve this, each slot in the internal array doesn't just hold a raw value—it holds a **LinkedList of Key-Value Nodes**.
If the number of collisions is very high, the worst case runtime is $O(N)$ because there will be larger linked lists in the array. Because search speed degrades as the underlying array gets crowded, production Hash Maps (like Java's `HashMap` or Go's `map`) automatically resize the array when it gets too full.

```go
package main

type ListNode struct {
	key   string
	value string
	next  *ListNode
}

type Map struct {
	arr []*ListNode // Array of head pointers
}

func (m *Map) Set(key string, value string) {
	if len(m.arr) == 0 {
		return // Avoid divide-by-zero
	}

	hashCode := hash(key)
	index := hashCode % len(m.arr)

	// Update or append to the bucket chain
	m.arr[index] = insertOrUpdate(m.arr[index], key, value)
}

func insertOrUpdate(node *ListNode, key string, value string) *ListNode {
	// Case 1: Empty bucket slot -> create head node
	if node == nil {
		return &ListNode{key: key, value: value}
	}

	// Case 2: Key already exists -> update value in-place
	if node.key == key {
		node.value = value
		return node
	}

	// Case 3: Reached end of list -> append new node
	if node.next == nil {
		node.next = &ListNode{key: key, value: value}
		return node
	}

	// Case 4: Traverse further down the chain
	insertOrUpdate(node.next, key, value)
	return node
}

// Dummy hash function for demonstration
func hash(s string) int {
	h := 0
	for i := 0; i < len(s); i++ {
		h = 31*h + int(s[i])
	}
	if h < 0 {
		return -h
	}
	return h
}
```
## ArrayList
Typically arrays have a fixed size. Appending to a full fixed-sized array returns a `BufferOverflowException` or an `IndexOutOfBoundsException`. ArrayLists fix this by doubling creating a new array with double the capacity of the original, and then copying the data from the original array into the new array. 
### Implementing an ArrayList
- Declare an array of size 2
- On append, if the last element of the array is occupied, create a new array double the size of the initial.
- Loop through the initial array and copy all the elements into the new array, return the new array.
```go
package main

import "fmt"

type ArrayList struct {
	arr      []int
	size     int // Current number of elements stored
	capacity int // Total allocated space
}

// NewArrayList initializes a dynamic array with an initial capacity.
func NewArrayList(initialCapacity int) *ArrayList {
	if initialCapacity <= 0 {
		initialCapacity = 2 // Default initial capacity
	}
	return &ArrayList{
		arr:      make([]int, initialCapacity),
		size:     0,
		capacity: initialCapacity,
	}
}

// Append adds a new value to the end of the list, resizing if necessary.
func (a *ArrayList) Append(val int) {
	if a.size == a.capacity {
		a.resize()
	}
	a.arr[a.size] = val
	a.size++
}

// Get retrieves an element at an index safely.
func (a *ArrayList) Get(index int) (int, bool) {
	if index < 0 || index >= a.size {
		return 0, false // Out of bounds
	}
	return a.arr[index], true
}

// Set updates an existing index.
func (a *ArrayList) Set(index int, val int) bool {
	if index < 0 || index >= a.size {
		return false // Out of bounds
	}
	a.arr[index] = val
	return true
}

// resize doubles the underlying array capacity in O(N) time.
func (a *ArrayList) resize() {
	newCapacity := a.capacity * 2
	newArr := make([]int, newCapacity)

	// Copy existing elements to the new slice
	for i := 0; i < a.size; i++ {
		newArr[i] = a.arr[i]
	}

	a.arr = newArr
	a.capacity = newCapacity
}

func main() {
	list := NewArrayList(2)
	list.Append(10)
	list.Append(20)
	list.Append(30) // Triggers O(N) resize, doubles capacity to 4

	val, ok := list.Get(2)
	if ok {
		fmt.Printf("Element at index 2: %d (Size: %d, Capacity: %d)\n", val, list.size, list.capacity)
		// Output: Element at index 2: 30 (Size: 3, Capacity: 4)
	}
}
```
_implement StringBuilder_