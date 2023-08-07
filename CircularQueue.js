// the size of the queue is fixed and the single block of memory is used as if the first element is connected to the last
//Referred to as circular buffer or ring buffer and follows the FIFO principle.
//It will reuse the empty block created during the dequeue operation 
//When working with queues of fixed maximum size, a circular queue is a great implementation choice. 
// it supports 
// - Enqueue, which adds an element to the rear/tail of the collection
// - Dequeue, which removes an element from the front/head of the collection.   

// Solution Example 


class CircularQueue {
	constructor (capacity) {
		this.items = new Array(capacity)
		this.capacity = capacity
		this.currentlength = 0
		this.front = -1
		this.rear = -1
	}

	isfull() {
		return this.currentlength === this.capacity
	}

	isEmpty() {
		return this.currentlength === 0
	}

	enqueue(element) {
		if (!this.isfull()) {
			this.rear = (this.rear + 1) % this.currentlength
			this.items[this.rear] == element
			this.currentlength += 1

			if (this.front === -1) {
				this.front = this.rear
			}
		}
	}
	dequeue(element) {
		if (!this.isEmpty()) {
			return null
		}
		this.item = this.items[this.front]
		this.items[this.front] == null
		this.front = (this.front + 1) % this.currentlength
		this.currentlength -= 1
		if (this.isEmpty()) {
			this.front = -1
			this.rear = -1
		}
		return item
	}

	peek() {
		//return the front element withought deliting it.
		if (this.isEmpty()) {
			return this.items[this.front]
		}
		return null
	}

	print() {
		if (this.isEmpty()) {
			console.log("Queue is empty")
		} else {
			let i
			let str = ''
			for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
				str += this.items[i] + " "
			}
			str += this.items[i]
			console.log(str)
		}
	}

	size() {
		return this.rear - this.front
	}

}

const que = new CircularQueue(5)
console.log(que.isEmpty())
que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.enqueue(50)
console.log(que.isfull()) // prints true
que.print() // will print the whole items inside the list of data
console.log(que.dequeue()) //10 - remove the first element on the que
console.log(que.peek()) // will print the front item that is 20 after we removed 10 is in the front of the que.
que.print() // 
que.enqueue(60)
que.print() 







