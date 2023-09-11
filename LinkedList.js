// A linked list is a linear data structure that includes a series of connected nodes 
// Each Node consists of a data value and a pointer that points to the next node
// The list element can be easily inserted or removed withought reallocation or reorganization of the entire structure
// Random access of elements is not feasible and accessing an element has linear time complexity. 

// The linked list data structure supports three main operations
// - Insert- to add an element at the beginning, end or at a given index in the list
// - Deletion - to remove an item given its index or value
// - Search - to find an element given its value





class Node {
	constructor (value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor (value) {
		this.head = null
		this.size = 0 //to track the number of nodes
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
	}
	prepend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
		} else {
			node.next = this.head
			this.head = node
		}
		this.size++
	}

	append(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
		} else {
			let prev = this.head
			while (prev.next) {
				prev = prev.next
			}
			prev.next = node
		}
		this.size++
	}

	insert(value, index) {
		//handling invalid index
		if (index < 0 || index > this.size) {
			return null
		}
		//adding from an empty list 
		if (index === 0) {
			this.prepend(value)
		} else {
			//adding when
			const node = new Node(value)
			let prev = this.head
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			node.next = prev.next
			prev.next = node
			this.size++
		}
	}

	removeFrom(index) {
		if (index < 0 || index >= this.size) {
			return null
		}
		//remove index = 0
		let removedNode
		if (index === 0) {
			removedNode = this.head
			this.head = this.head.next
		} else {
			let prev = this.head
			for (let i = 0; i < index - 1; i++) {
				prev = prev.next
			}
			removedNode = prev.next
			prev.next = removedNode.next
		}
		this.size--
		return removedNode.value
	}



	print() {
		if (this.isEmpty()) {
			console.log('List is empty: ')
		} else {
			let curr = this.head
			let listlength = ''
			while (curr) {
				listlength += `${curr.value} `
				curr = curr.next
			}
			console.log('List Length:', listlength)
		}
	}
}
const list = new LinkedList
console.log('List is empty: ', list.isEmpty()) // List is empty:  true
console.log('List is Size: ', list.getSize()) //  List is Size:  0
list.print()
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.print()

list.append(50)
list.append(60)
list.append(70)
list.print()

console.log('List is Insert: ', list.insert(80, 3))
//   Node {
//   value: 30,
//   next: Node { value: 80, next: Node { value: 20, next: [Node] } }
// }
list.print()
console.log('List is remove: ', list.removeFrom(2))
list.print()
list.print(list.getSize())







