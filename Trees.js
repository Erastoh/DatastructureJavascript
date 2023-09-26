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



	//InOrder Traversal
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
bst.preorder(bst.root)
console.log("InOrder Search")
bst.inOrder(bst.root)
console.log("PostOrder Search")
bst.postOrder(bst.root)
