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

}

const bst = new BinarySearchTree()
console.log("Binary Tree is Empty,", bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log("Binary Search,", bst.search(bst.root, 10))
console.log("Binary Search,", bst.search(bst.root, 5))
console.log("Binary Search,", bst.search(bst.root, 15))