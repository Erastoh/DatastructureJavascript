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
	constructur() {
		this.items = []
	}

	push(element) {
		this.items.push(element)
	}

	pop() {
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
console.log(stack.zize())
stack.print()

console.log(stack.pop())
console.log(stack.peek())
 