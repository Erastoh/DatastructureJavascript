//Queue
// The queue DataStructure is a sequential collection of elements that follow the Principal of First In First Out(FIFO) where the first element in will be the first element to go out. 

// It's an abstract data type, it is defined by its behaviour rather thab being a mathematical model

 // supports 2 Main Operations
  // Enqueue - add the element to the rear/tail of the collection
  // Dequeue - removes an element from the front/head of the collection
  // peek() - get the value of the element at the front of the queue withought removing it.
  // isEmpty() - check if the queue is empty
  // size() - get the number of elements in the queue
  // print() - visualize the elements in the queue


class Queue {
    constructor () {
        this.items = []
    }
    enqueue(element) {
        this.items.push(element)
    }
    dequeue(element) {
        return this.items.shift(element)  // 0(n) linear time complexity. 
    }

    isEmpty() {
        return this.items.length === 0
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }

}

const que = new Queue()
console.log(que.isEmpty())
que.enqueue(20)
que.enqueue(10)
que.enqueue(30)
console.log(que.size())
que.print() // 20,10,30
console.log(que.dequeue()) //20 - remove the first element on the que
console.log(que.peek())  // 10 is in the front of the que.


