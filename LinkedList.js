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
	// Prepend has a constant time complexity 0(1) because it does not depend on how many items are there in the list
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

	//Insert an item on a linked list


	insert(value, index) {
		//handling invalid index
		if (index < 0 || index > this.size) {
			return
		}
		//adding from an empty list 
		if (index === 0) {
			this.prepend(value)
		} else {
			//adding when
			const node = new Node(value)
			let prev = this.head
			for (let i = 0; i < index.lenght; i++) {
				prev = prev.next
			}
			node.next = prev.next
			prev.next = node
			this.size++
		}
	}


	//Append had a liniear time complexity 0(n) because it depends on the list of items in the node
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
list.prepend(80)
list.prepend(90)
list.prepend(100)
list.print() // will print 10 20 30 40 80 90 100

list.append(50)
list.append(60)
list.append(70)
list.print() // will print 50 60 70 
// full list printed 10 20 30 40 80 90 100 50 60 70 


list.insert(200, 6)
list.print()