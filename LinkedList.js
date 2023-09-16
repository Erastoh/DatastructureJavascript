
class Node {
	constructor (value) {
		this.value = value
		this.next = null
	}
}

class LinkedList {
	constructor (value) {
		this.head = null
		this.tail = null
		this.size = 0 //to track the number of nodes
	}

	isEmpty() {
		return this.size === 0
	}

	getSize() {
		return this.size
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

	prepend(value) {
		const node = new Node(value)
		if (this.isEmpty()) {
			this.head = node
			this.tail = node
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
			this.tail = node
		} else {
			node.next = this.tail
			this.tail = node
		}
		this.size++
	}

	//has Constant time comlexity 0(1)
	removeFromFront() {
		if (this.isEmpty()) {
			return null
		}
		const value = this.head.value
		this.head = this.head.next
		this.size--
		return value
	}

	// has linear time Complexity 0(n)
	removeFromEnd() {
		if (this.isEmpty()) {
			return null
		}
		const value = this.tail.value
		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while (prev.next !== this.tail) {
				prev = prev.next
			}
			prev.next = null
			this.tail = prev
		}
		this.size--
		return value
	}


}
const list = new LinkedList
console.log('List is empty: ', list.isEmpty()) // List is empty:  true
console.log('List Size: ', list.getSize()) //  List is Size:  0

list.append(1)
list.append(2)
list.append(3)
list.prepend(0)
list.print()
console.log('List Size: ', list.getSize())

list.removeFromFront()
list.print()

list.removeFromEnd()
list.print()


