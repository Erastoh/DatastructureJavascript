//Queue
// The queue DataStructure is a sequential collection of elements that follow the Principal of First In First Out(FIFO) where the first element in will be the first element to go out. 

// It's an abstract data type, it is defined by its behaviour rather than being a mathematical model

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



//Optimized Queue 
//the engueue has constant time complexity compared to previous logics


class Queue {
    constructor () {
        this.items = {}
        this.front = 0
        this.rear = 0
    }
    enqueue(element) {
        this.items[this.rear] = element
        this.rear++
    }
    dequeue(element) {
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty() {
        return this.items.rear - this.front === 0
    }

    peek() {
        //return the front element withought deliting it.
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print() {
        console.log(this.items)
    }

}

const que2 = new Queue()
console.log(que2.isEmpty())
que2.enqueue(20)
que2.enqueue(10)
que2.enqueue(30)
console.log(que2.size())
que2.print() // 20,10,30
console.log(que2.dequeue()) //20 - remove the first element on the que
console.log(que2.peek())  // 10 is in the front of the que.



// What is Complexity Analysis of Queue operations ? Related To: Data Structures
// 
// Answer
// Queues offer random access to their contents by shifting the first element off the front of the queue.You have to do this repeatedly to access an arbitrary element somewhere in the queue.Therefore, access is O(n).
// Searching for a given value in the queue requires iterating until you find it.So search is O(n).
// Inserting into a queue, by definition, can only happen at the back of the queue, similar to someone getting in line for a delicious Double - Double burger at In 'n Out. Assuming an efficient queue implementation, queue insertion is O(1).
// Deleting from a queue happens at the front of the queue.Assuming an efficient queue implementation, queue deletion is `O(1).

