// Lowest Common Ancestor of a Binary
// Search Tree Easy
// Given a binary search tree(BST), find the lowest common ancestor(LCA) 

// node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common
// ancestor is defined between two nodes p and q as the lowest node in T
// that has both p and q as descendants (where we allow a node to be a
// descendant of itself).”


class TreeNode {
	constructor (val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

const lowestCommonAncestor = (root, p, q) => {
	if (!root) return null;

	while (root) {
		if (root.val > p.val && root.val > q.val) {
			root = root.left;
		} else if (root.val < p.val && root.val < q.val) {
			root = root.right;
		} else {
			return root;
		}
	}

	return null; // LCA not found
};

// Example usage:
const root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);

const p = root.left;
const q = root.right;
const lca = lowestCommonAncestor(root, p, q);
console.log('Lowest Common Ancestor:', lca.val); 