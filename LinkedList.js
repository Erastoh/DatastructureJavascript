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
			this.node = this.head
			this.head = node
		}
		this.size++
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
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.prepend(80)
list.prepend(90)
list.prepend(100)
list.print()