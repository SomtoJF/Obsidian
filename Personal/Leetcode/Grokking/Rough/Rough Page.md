## I scribble random thoughts here and write code
### Hash Map
```go
type Map struct{
	array []*Node
}

type Node struct{
	value string
	key int
	next *Node
}

func (m *Map) Set(key int, val string){
	// hash the key
	hashCode := hash(key)
	
	// assign key an array index using code % len(array)
	keyIndex := hashCode % len(m.array)
	
	// insert/update the linkedList at that index
	m.array[index] = upsertToLinkedList(m.array[keyIndex], key, val)
}

func upsertToLinkedList(node *Node, key int, val string) *Node{
	if node == nil{
		return &Node{
			value: val,
			key: key,
			next: nil
		}
	}
	
	// go automatically dereferences so no need for *node.key
	if node.key == key{
		node.val = val
		return node
	} 
	
	node.next = upsertToLinkedin(node.next, key, val)
	return node
}

func hash(key int) int {
	var hashCode int
	// perform some hashing operation
	
	return hashCode
}
```
### ArrayList
```go
type ArrayList struct{
	arr []int
	capacity int
	size int
}

func NewArrayList ()*ArrayList{
	 return &ArrayList{
		 arr: make([]int, 2)
		 capacity: 2
		 size: 0
	 }
}

func (a *ArrayList) Set(index int, value int){
	a.arr[index] = value
	a.size += 1
}

func (a *ArrayList) Append(value int){
	if a.size == len(a.capacity){
		a.resize()
	}
	
	a.arr[a.size] = value
	a.size += 1
}

func (a *ArrayList) Get(index int)int{
	return a.arr[index]
}

func (a *ArrayList) resize(){
	newCapacity := a.capacity * 2
	newArray := make([]int, newCapacity)
	
	for index,elem := range(a.arr){
		newArray[index] = elem
	}
	
	a.arr = newArray
	a.capacity = newCapacity
}
```
### Palindrome Permutation
```python
"""
input: Tact Toa
output: true (permutations: "taco cat", "atco eta")


loop the string
count the occurence of each character in a map[char]count

loop the map
check that at most one character has an odd number of occurences
"""

def palindromePerm (input):
	 # Remove spaces and convert to lowercase
    input = input.replace(" ", "").lower()
	map = {}
	oddOccurenceFound = False
	for c in input:
		if c in map:
			map[c] += 1
		else:
			map[c] = 1
				
	for key, value in map.items():
		if oddOccurenceFound and value % 2 not 0:
			return False
		if not oddOccurenceFound and value % 2 not 0: 
			oddOccurenceFound = True
	return True

```
Key insight here is that for a string to be the same forwards and backwards, each character must appear an even number of times with an exception for max 1 character where the odd character could be in the middle