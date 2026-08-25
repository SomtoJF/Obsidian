A stack is a linear data structure (like an array) that stores data using LIFO (last-in-first-out) ordering. A queue is a linear data structure that stores data using FIFO (first-in-first-out) ordering. Both stacks and queues can be implemented using arrays or a linked list.
## Stack Operations
Stacks have the following operations.
- Push: To add an item to the top of the stack
- Pop: To remove an item from the top of the stack
- IsEmpty: To check if the stack is empty
- Peek: To view the item at the top of the stack without removing it
## Implementing a stack
```python
class Stack:
	def __init__(self):
		self.stack = None
	
	def isEmpty(self):
		return self.stack is None
		
	def pop(self):
		if self.stack is None:
			return None
		val = self.stack.val
		self.stack = self.stack.next
		return val
		
	def peek(self):
		if self.stack is None:
			return None
		return self.stack.val
		
	def push(self, val):
		node = ListNode(val)
		node.next = self.stack
		self.stack = node
```
## Queue Operations
- Add: Add an item to the end of the queue
- Remove: Remove the first item in the queue
- Peek: Return the top of the queue
- IsEmpty: Check if the queue is empty
## Implementing a queue
```python
class Queue:
	def __init__(self):
		self.__node = None
		self.__tail = None
		
	def isEmpty(self):
		return self.__node is None
		
	def add(self, val):
		newNode = ListNode(val)
		if self.__node is None:
			self.__node = newNode
		else:
			self.__tail.next = newNode
		self.__tail = newNode
	
	def peek(self):
		if self.__node is not None:
			return self.__node.val
		return None
		
	def remove(self):
		if self.__node is None:
			return None
		currVal = self.__node.val
		self.__node = self.__node.next
		if self.__node is None:
			self.__tail = None
		return currVal
```