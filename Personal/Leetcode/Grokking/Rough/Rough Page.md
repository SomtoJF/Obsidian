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

