class Node {
	constructor (data) {
		this.data = data;
		this.prev = null;
		this.next = null;
	}
}

class DoublyLinkedList {
	constructor () {
		this.head = null;
		this.tail = null;
	}

	isEmpty() {
		return this.head === null;
	}

	append(data) {
		const newNode = new Node(data);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
	}

	prepend(data) {
		const newNode = new Node(data);
		if (this.isEmpty()) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
	}

	delete(data) {
		let current = this.head;
		while (current !== null) {
			if (current.data === data) {
				if (current.prev !== null) {
					current.prev.next = current.next;
				} else {
					this.head = current.next;
				}
				if (current.next !== null) {
					current.next.prev = current.prev;
				} else {
					this.tail = current.prev;
				}
				return; // Data found and deleted
			}
			current = current.next;
		}
	}

	display() {
		let current = this.head;
		const result = [];
		while (current !== null) {
			result.push(current.data);
			current = current.next;
		}
		console.log(result.join(' <-> '));
	}
}

// Example usage:
const myList = new DoublyLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);

myList.display(); // Output: 0 <-> 1 <-> 2 <-> 3

myList.delete(2);
myList.display(); 