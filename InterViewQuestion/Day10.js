// Linked List Cycle Easy
// Given head, the head of a linked list, determine if the linked list has
// a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be
// reached again by continuously following the next pointer.Internally, pos
// is used to denote the index of the node that tail's next pointer is connected
// to.Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list.Otherwise, return false.

class ListNode {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

const hasCycle = (head) => {
	if (!head || !head.next) {
		return false; // No cycle if the list is empty or has only one node
	}

	let slow = head;
	let fast = head.next; // Start fast pointer one step ahead

	while (slow !== fast) {
		if (!fast || !fast.next) {
			return false; // No cycle if fast pointer reaches the end of the list
		}
		slow = slow.next; // Move slow pointer one step forward
		fast = fast.next.next; // Move fast pointer two steps forward
	}

	return true; // Cycle detected
};

// Example usage:
const head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next; // Create a cycle

console.log(hasCycle(head)); // O