// Diameter of Binary Tree Easy
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between
// any two nodes in a tree.This path may or may not pass through the root

// Definition for a binary tree node.
class TreeNode {
	constructor (val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

class Solution {
	constructor () {
		this.diameter = 0;
	}

	diameterOfBinaryTree(root) {
		// Helper function to calculate the height of the tree
		const height = (node) => {
			// Base case: if the node is null, its height is 0
			if (node === null) {
				return 0;
			}

			// Recursively calculate the height of left and right subtrees
			const leftHeight = height(node.left);
			const rightHeight = height(node.right);

			// Update the diameter at each node
			this.diameter = Math.max(this.diameter, leftHeight + rightHeight);

			// Return the height of the node
			return Math.max(leftHeight, rightHeight) + 1;
		};

		// Start the DFS from the root
		height(root);

		// The diameter is stored in the `this.diameter` variable
		return this.diameter;
	}
}

// Example usage:
// Create the binary tree: 
//      1
//     / \
//    2   3
//   / \     
//  4   5    

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

const solution = new Solution();
console.log(solution.diameterOfBinaryTree(root)); // Output: 3