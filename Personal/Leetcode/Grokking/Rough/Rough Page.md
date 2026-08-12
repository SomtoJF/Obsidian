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
### String Compression
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabcccccaaa` would become `a2blc5a3`. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters $(a - z)$.
```python
def compress_string(s):
	"""
	loop the string
		count each occurence using a map
	loop the map and build the final string using the frequencies from the map
	
	inputs: aabcccccaaa, abc, abcccc
	outputs: a2blc5a3, a1b1c1, a1b1c4 -> abcccc
	"""
	
	map = {}
	for c in s:
		# O(n)
		if c in map:
			map[c] += 1
		else:
			map[c] = 0
	newStr = ""
	for k,v in map:
		vStr = str(v)
		newStr += (k+vStr)
		
	if len(s) == len(newStr):
		return s
	else:
		return newStr
	
```
This algorithm runs in $O(n)$ time and $O(n)$ space.
### One Away
There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
#### Notes
- One replacement away means they must be same length.  `pale` -> `bale`
- One insertion away means `s1` is one length difference away from `s2`. `apple` -> `aple`
- One deletion away means `s1` is also one length difference away from `s2`. `apple` -> `aple`
```python
def one_away(s1, s2):
	if len(s1) == len(s2):
		return isReplacementAway(s1, s2)
	if len(s1) > len(s2):
		return isInsertionAway(s1, s2)
	if len(s1) < len(s2):
		return isInsertionAway(s2, s1)
	return False
	
def isReplacementAway(s1, s2):
	diffFound = False
	i2 = 0
	for c in s1:
		if (c != s2[i2]):
			if (diffFound):
				return False
			diffFound = True
		i2 += 1
	return True
	
def isInsertionAway(s1, s2):
	i2 = 0
	for i, c in enumerate(s1):
		if (c != s2[i2]):
			if (i != i2):
				return False
			continue #this should shift the index for i
		i2 += 1
	return True
	
```