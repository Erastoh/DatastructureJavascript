// Balanced Binary Tree Easy
// Given a binary tree, determine if it is height - balanced.


class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const isBalanced = (root) => {
	const getHeight = (node) => {
		if (!node) return 0;

		const leftHeight = getHeight(node.left);
		const rightHeight = getHeight(node.right);

		if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
			// If any subtree is unbalanced or the difference in heights is greater than 1, return -1
			return -1;
		}

		// Otherwise, return the height of the current subtree
		return Math.max(leftHeight, rightHeight) + 1;
	};

	return getHeight(root) !== -1;
};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(isBalanced(root)); // Output: true