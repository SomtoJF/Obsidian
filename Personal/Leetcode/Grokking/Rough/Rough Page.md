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
>Key insight here is that for a string to be the same forwards and backwards, each character must appear an even number of times with an exception for max 1 character where the odd character could be in the middle
### String Compression
Implement a method to perform basic string compression using the counts of repeated characters. For example, the string `aabcccccaaa` would become `a2blc5a3`. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters $(a - z)$.
```python
def compress_string(s):
	"""
	init a character counter = 0
	init a string list
	loop index, c the string
		if index > 0
			if c != c + 1 
				increment counter
				append to string list "c+character counter"
				set counter to 0
				continue
		increment counter
	
	
	inputs: aabcccccaaa, abc, abcccc
	outputs: a2blc5a3, a1b1c1, a1b1c4 -> abcccc
	"""
	
	counter = 0
	sArr = []
	
	for i,c in enumerate(s):
		if i > 0:
			if (i == (len(s) - 1)) or (c != s[i+1]):
				counter += 1
				sArr.append(c + str(counter))
				counter = 0
				continue
		counter += 1
	
	if len(sArr) >= len(s):
		return s
	else:
		return "".join(sArr)
	
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
### String Rotation
Assume you have a method `isSubstring` which checks if one word is a substring of another. Given two strings, `s1` and `s2`, write code to check if `s2` is a rotation of `s1` using only one call to isSubstring (e.g., "waterbottle" is a rotation of"erbottlewat").
#### Notes
> `isSubstring` checks if one string occurs as a **contiguous sequence of characters** inside another.

I know I could solve this using two pointers. But what two pointers will I use?. I was thinking of setting my first pointer at the beginning of `s1` , looking for the character in `s1` and looping through checking if both pointers point to the same character. But the problem with this is what if the letter occurs more than once in the strings? I could potentially find the wrong one? What if I reference the next character as well?
#### Nope
```python
def isStringRotation(s1, s2):
	return len(s1) == len(s2) and isSubstring(s1 + s1, s2)
		


def isSubString(s1, s2):
	# dummy impl
```
Why?

Take:

```
s1 = waterbottle
s2 = erbottlewat
```

Double `s1`:

```
waterbottlewaterbottle
```

The rotation appears as a contiguous substring:

```
waterbottle[erbottlewat]erbottle
              ↑
```

So if `s2` is a rotation of `s1`, it **must appear inside `s1 + s1`**.

And this satisfies the requirement of using `isSubstring` only once.
## Remove Duplicates from an unsorted linked list
Write code to remove duplicates from an unsorted linked list.
```python
"""
nil
a -> a
a -> b
a -> b -> a
a -> a -> a
"""

def main():
	node = new_node() #stump
	node = removeDuplicates(None, node, set())
# prev and current are nodes
def removeDuplicates(prev, current, buffer):
	if current is None:
		return None
	
	nextPrev = current
	if current.value in buffer:
		# prev cannot be null theoretically
		prev.next = current.next
		nextPrev = prev
	else:
		buffer.add(current.value)
	
	removeDuplicates(nextPrev, current.next, buffer)
	return current
		
	

```
## Find the kth to last element of a singly linked list
Implement an algorithm to find the kth to last element of a singly linked list.
```python
"""
a -> b -> c -> nil | k = 2
"""
def kth_to_the_last(node, k):
	fast = node
	slow = node
	i = 0
	while i < k:
		if fast is None:
			return None
		fast = fast.next
	
	while fast is not None:
		slow = slow.next
		fast = fast.next
		
	return slow
```

## Delete Middle Node
Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.![[Screenshot 2026-08-19 at 15.11.53.png]]
```python
"""
we can't go back from the middle node
"""

def deleteMiddleNode(node):
	node.value = node.next.value
	node.next = node.next.next
```
## Partition
Write code to partition a linked list around a value x, such that ==all nodes less than x come before all nodes greater than or equal to x==. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.
```python
"""
input = 3 -> 5 -> 10 -> 5 -> 8 -> 2 -> 1, x = 5
output = 3 -> 2 -> 1 -> 5 -> 10 -> 5 -> 8

approach here would be to have two additional nodes
less list and more list
if x < current node
	append to less list else append to more list
	advance current node pointer
	
connect the two lists with the tail of the less pointing to the head of more
"""
def partition(node, x)
	current = node
	less_dummy = Node(0)
	less_tail = less_dummy
	more_dummy = Node(0)
	more_tail = more_dummy
	
	while current is not None:
		new_current = current.next
		if current.val < x:
			temp = current
			temp.next = None
			
			less_tail.next = temp
			less_tail = less_tail.next
		else:
			temp = current
			temp.next = None
			
			more_tail.next = temp
			more_tail = more_tail.next
			
		current = new_current
		
	less_tail.next = more_dummy.next
	return less_dummy.next
```
## Palindrome
Implement a function to check if a linked list is a palindrome.
> Palindrome is a word that is the same forwards and backwards
```python
"""
c -> a -> t return False
c -> a -> c return True
d -> i -> v -> i -> d return True
d i i d
Idea here is split the linked list at its center and reverse the second half
If the list is a palindrome, the values at the first list will be equal to the values in the second list (bar the middle value for odd number length lists)
"""
def isPalindrome(node):
	fast = head
	slow = head
	
	while fast.next and fast.next.next:
		slow = slow.next
		fast = fast.next.next
	  
	second = slow.next
	slow.next = None
	
	dummy = ListNode(0)

	while second:
		dummyNext = dummy.next
		secondNext = second.next

		dummy.next = second
		second.next = dummyNext

		second = secondNext
		second = dummy.next

	while second:
		if second.val != head.val: return False

		second = second.next
		head = head.next

	return True
```
## Intersection
Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linked list, then they are intersecting.
```python
"""
determine if the two lists intersect
return the intersecting node

intersecting nodes are defined by reference i.e node1 == node2
=====
maybe we should use a nested loop linear search? O(n1 * n2) runtime and O(1) space

can we use a hash map here? maybe. can a hash map key by memory address? more specifically can it happen in python?

is there an approach where we won't use a hashmap? ordering doesnt matter so we can't use stacks or queues

lets use a set

O(n) time and space

to achieve constant space we will do the nested loop

"""

def get_intersection(node1, node2):
	cache = set()
	while node1 is not None:
		cache.add(node1)
		node1 = node1.next
	
	# this whole implementation falls apart if we can't store memory address in a set
	while node2 is not None:
		if node2 in cache: return node2
		node2 = node2.next
	return None

```
## Loop Detection
Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

>Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so as to make a loop in the linked list.

```python
"""
input: A -> B -> C -> D (-> B -> C -> D)
output: B
input: A -> B -> C -> D -> E -> C
output: C


We will use floyd's cycle detection algorithm
"""

def detect_loop(head):
	# chech if there is a cycle
	fast = head
	slow = head
	hasCycle = False
	while fast.next and fast.next.next:
		slow = slow.next
		fast = fast.next.next
		if slow == fast: 
			hasCycle = true
			break
		
	if !hasCycle: return None
	
	# keep fast at the collision
	slow = head
	while slow != fast:
		slow = slow.next
		fast = fast.next
		
	return slow
```
## Three in One
Explain how you would use a single array to implement 3 stacks.
### Explanation
The most intuitive approach would be to divide an array into contiguous regions. But that raises a problem. On every pop, we would move/reassign the head of the respective stack.
```
             ONE ARRAY
┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐
│     │     │     │     │     │     │     │     │     │
└─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┴─────┘
  ↑                 ↑                 ↑
Stack 1          Stack 2           Stack 3
```
>What happens when a stack maxes out it's allocated capacity?

We would resize the array. To do this, we would double the capacity if the current underlying array by copying all elements to a new array twice the size of the current. It's as simple as that. Because resizing happens exponentially infrequently, we are able to amortize the cost of resizing and achieve $O(1)$ pushes and $O(1)$ pops.

### Resize `push`

When the array is full:

```
[ A ][ B ][ C ][ D ][ E ][ F ][ G ][ H ]
```

you allocate a new array:

```
[ A ][ B ][ C ][ D ][ E ][ F ][ G ][ H ][ _ ][ _ ][ _ ][ _ ][ _ ][ _ ][ _ ][ _ ]
```

and copy the elements.
## Stack Min
Design a stack that, in addition to `push`, `pop`, and `peek`, can return the minimum element in **O(1)** time.
### Explanation
There are two ways to handle this. First way would be to keep a second stack and track the mins there. The invariant in this approach is that the top of the stack always represents the smallest number in the main stack. So when we pop that number from the main stack, we should pop it from the min stack as well so the min stack holds the next smallest number. If we push a number to the stack and it is smaller than the top of the min stack, we should push it to the min stack as well.
```
Main stack:       Min stack:

  1 ← top           1 ← top
  7                 2
  2                 5
  5
```
#### Solution 2
An alternative solution is that in addition to each node storing it's current value and  pointing to the next node, it could also store the `min_so_far`.
```
┌──────────────┐
│ value = 1    │
│ min = 1      │
└──────────────┘
       ↓
┌──────────────┐
│ value = 7    │
│ min = 2      │
└──────────────┘
       ↓
┌──────────────┐
│ value = 2    │
│ min = 2      │
└──────────────┘
       ↓
┌──────────────┐
│ value = 5    │
│ min = 5      │
└──────────────┘
```

Then `min()` is ridiculously simple:

```
def min(self):
    if self.stack is None:
        return None

    return self.stack.min
```

Because **the top node always knows the minimum of everything beneath it**.
## Stack of Plates
```python
class StackNode(Stack):
	def __init__(self):
		push
		
class SetOfStacks:
	def __init__(self, capacity):
		self.stacks = [] # call stacks
		self.hCap = 0 # head capacity // call hc
		self.capacity = capacity # call cap
		self.hindex = 0
		
	def push(self, val):
		node = StackNode(val)
		if stacks[hindex] is None:	
			stacks.append(node)
			hc = 1
			return
		if hc == cap:
			hindex += 1
			hc = 0
			return self.push(val)
		
		stacks[hindex].push(node)
		hc += 1
		return
		
	def pop(self):
		if hCap == 0:
			if hindex <= 0:
				return none
			hindex -= 1
		hCap -= 1
		return stacks[hindex].pop()
	
```
## Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and is Empty. Key insight here is to maintain sorted order on the temp stack.
```python
"""
	LTR
	1 4 2 5 6 -> 6 5 2 4 1 | max = 6
	6 1 4 2 5 -> 5 2 4 1 | max = 5
"""

def sortStack(stack):
	size = 0
	temp = Stack()
	mx = None
	while not stack.isEmpty():
		n = stack.pop()
		if mx is None:
			mx = n
		elif n > mx:
			mx = n
			
		temp.push(n)
		size += 1
		
	if size == 0 or size == 1: return temp
	i = 0
	
	while i < size:
		while not temp.isEmpty():
			n = temp.pop()
			stack.push(max)
			if n != max:
				stack.push(n)
		j = 0
		mx = None		
		while j < size-i:
			n = stack.pop()
			if mx is None:
				mx = n
			elif n > mx:
				mx = n
			temp.push(n)
			j += 1
		i += 1
	
	while not temp.isEmpty():
		stack.push(temp.pop())	
	return stack
	
```
## Animal Shelter
An animal shelter, which holds only dogs and cats, operates on a strictly =="first in, first out"== basis. People must adopt either the "oldest" (based on arrival time) of all animals at the shelter, or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). They cannot select which specific animal they would like. Create the data structures to maintain this system and implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. You may use the built-in Linked list data structure.
```python
class AnimalShelter:
	def __init__(self):
		self.__queue = None # known as q from now on
		self.__tail = None # known as tail from now on
		
	def enqueue(self, animal):
		if q is None:
			q = ListNode(animal)
			tail = q
			return
		tail.next = ListNode(animal)
		tail = tail.next
		
	def dequeueAny(self):
		animal = q
		q = q.next
		animal.next = None
		
		if q is None: tail = None
		return animal
		
	def dequeueDog(self, animal):
		curr = q
		prev = None
		if curr is None: return None
		
		while curr and curr.type != "dog":
			curr = curr.next
			prev = curr
		
		if prev is None:
			q = q.next
			return curr
			
		prev.next = curr.next
		
		# Always remember to check cases where you remove the last element
		if curr == tail:
			tail = prev
		return curr
		
	def dequeueCat(self, animal):
		curr = q
		prev = None
		
		if curr is None: return None
		
		while curr and curr.type != "cat":
			curr = curr.next
			prev = curr
		
		if prev is None:
			q = q.next
			return curr
			
		prev.next = curr.next
		
		# Always remember to check cases where you remove the last element
		if curr == tail:
			tail = prev
			
		return curr
```