//A Tree is a hierachical datastructure that consists of Nodes connected by Edges. It is a non-linear
//Binary Tree is a tree data Structure in which each node has atleast 2 childeren
class Node {
	constructor (value) {
		this.value = value
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor () {
		this.root = null
	}

	isEmpty() {
		return this.root === null
	}

	insert(value) {
		const newnode = new Node(value)
		if (this.isEmpty()) {
			this.root = newnode
		} else {
			this.InsertNode(this.root, newnode)
		}
	}

	InsertNode(root, newnode) {
		if (newnode.value < root.value) {
			if (root.left === null) {
				root.left = newnode
			} else {
				this.InsertNode(root.left, newnode)
			}
		} else {
			if (root.right === null) {
				root.right = newnode
			} else {
				this.InsertNode(root.right, newnode)
			}
		}
	}

	search(root, value) {
		if (!root) {
			return false
		} else {
			if (root.value === value) {
				return true
			} else if (root.value > value) {
				return this.search(root.left, value)
			} else {
				return this.search(root.right, value)
			}
		}
	}
	// PreOrder Traversal
	//Depth First Search
	preorder(root) {
		if (root) {
			console.log(root.value)
			this.preorder(root.left)
			this.preorder(root.right)
		}
	}
	inOrder(root) {
		if (root) {
			this.inOrder(root.left)
			console.log(root.value)
			this.inOrder(root.right)
		}
	}

	postOrder(root) {
		if (root) {
			this.postOrder(root.left)
			this.postOrder(root.right)
			console.log(root.value)
		}
	}
	//Breath First Search
	LevelOrder() {
		const queue = []
		queue.push(this.root)
		while (queue.length) {
			let curr = queue.shift()
			console.log(curr.value)
			if (curr.left) {
				queue.push(curr.left)
			}
			if (curr.right) {
				queue.push(curr.right)
			}
		}
	}

	min(root) {
		if (!root.left) {
			return root.value
		} else {
			return this.min(root.left)
		}
	}

	max(root) {
		if (!root.left) {
			return root.value
		} else {
			return this.max(root.right)
		}
	}

	delete(value) {
		this.root = this.deleteNode(this.root, value)
	}

	deleteNode(root, value) {
		if (root === null) {
			return root
		}
		if (value < root.value) {
			root.left = this.deleteNode(root.left, value)
		} else if (value > root.value) {
			root.right = this.deleteNode(root.left, value)
		} else {
			if (!root.left && !root.right) {
				return null
			}
			if (!root.left) {
				return root.right
			} else if (!root.right) {
				return root.left
			}
			root.value = this.min(root.left)
			root.right = this.deleteNode(root.right, root.value)
		}
		return root
	}
}

const bst = new BinarySearchTree()
console.log("Binary Tree is Empty,", bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log("Binary Search,", bst.search(bst.root, 10))
console.log("Binary Search,", bst.search(bst.root, 5))
console.log("Binary Search,", bst.search(bst.root, 15))
bst.preorder(bst.root) // 10, 5, 3, 7, 15
console.log("InOrder Search")
bst.inOrder(bst.root) // 3,5,7,10,15
console.log("PostOrder Search")
bst.postOrder(bst.root) // 3, 7, 5, 15, 10
console.log("Breadth First Search")
bst.LevelOrder() //Breadth First Search - 10, 5, 15, 3, 7
console.log("Delete==============")
bst.delete(3) //10, 5, 15, 7
bst.LevelOrder()
console.log("Min Value", bst.min(bst.root)) // 3

console.log("Max Value", bst.max(bst.root)) // 15


