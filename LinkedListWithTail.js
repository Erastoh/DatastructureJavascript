
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

	}

	append(value) {

	}

	removeFromFront() {

	}
	removeFromEnd() {

	}


}
const list = new LinkedList
console.log('List is empty: ', list.isEmpty()) // List is empty:  true
console.log('List is Size: ', list.getSize()) //  List is Size:  0
list.print()