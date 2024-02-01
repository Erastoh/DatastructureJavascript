//Question
// Given the root of a binary tree, invert the tree, and return its root

// solution
class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = this.right = null;
	}
}

function invertTree(root) {
	if (!root) {
		return null;
	}

	// Swap left and right subtrees
	[root.left, root.right] = [root.right, root.left];

	// Recursively invert left and right subtrees
	invertTree(root.left);
	invertTree(root.right);

	return root;
}

// Example usage:
// Construct a sample binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

// Invert the binary tree
const invertedRoot = invertTree(root);

// Output the result (you can inspect the structure using console.log)
console.log(invertedRoot);