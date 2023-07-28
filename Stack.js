//Stack  
//-- stack data structure is a sequencial collection of elements that follow the principal of last in First out(LIFO)
// the last element inserted into the stack is first element to be removed

//Must support 
// push - add an element to the top of the stack
// pop() - remove the top most element from the stack
//peek() - get the value of the top element without removing it
//isEmpty() - check if the stack is empty
// size() - get the number of elements in the stack

// Solution

class Stack {
	constructor () {
		this.items = []
	}

	push(element) {
		this.items.push(element)
	}

	pop(element) {
		return this.items.pop(element)
	}

	peek() {
		return this.items[this.items.length - 1]
	}

	isEmpty() {
		return this.items.length === 0
	}
	size() {
		return this.items.length
	}

	print() {
		console.log(this.items.toString())
	}

}

const stack = new Stack()
// console.log(stack.isEmpty())
stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.size()) //3
stack.print() // 20,10,30

console.log(stack.pop()) // 30 last in and first out
console.log(stack.peek()) // 10
stack.print()  //20,10 
 