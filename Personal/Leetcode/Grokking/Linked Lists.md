A linked list is a data structure that represents a sequence of nodes. In a singly linked list, each node points to the next node in the sequence. A doubly linked list is a linked list where each node has a pointer to the previous node and the next node.

![[Screenshot 2026-08-16 at 21.12.41.png]]
## Differences between a linked list and an array
- Unlike an array, a linked list does not provide constant time access to a particular *"index"* within the list. This means that if you'd like to find the Kth element in the list, you will need to iterate through K elements.
- Appending to the end of a singly linked list is $O(n)$.
- All nodes/elements in a linked lists aren't stored in a contiguous block of memory.
## Implementing a Linked List
```go
type Node struct{
	Next *Node
	Value string
}

// nil
// a -> b
// a -> b -> c

// deletes appends a node to the end and returns the head
func (n *Node) Append(value string) *Node {
	if (n == nil){
		return &Node{ Value: value }
	}
	
	if (n.Next == nil){
		n.Next = &Node{ Value: value }
		return n
	}
	
	n.Next.Append(value)
	
	return n
}

// val = a
// b -> a
// b
// nil
// b -> c
// a
// deletes a node from the linked list
func (n *Node) Delete(value string) *Node{
	if (n == nil){
		return n
	}
	
	if (n.Value == value){
		return nil
	}
	
	if (n.Next == nil){
		return n
	}
	
	if (n.Next.Value == value){
		n.Next = n.Next.Next
		return n
	}
	
	n.Next.Delete(value)
	return n
}
```
