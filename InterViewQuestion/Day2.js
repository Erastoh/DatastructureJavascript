//Question 1

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.The list should be made by splicing
// together the nodes of the first two lists.
// Return the head of the merged linked list.

class NodeList {
	constructor (value, next = null) {
		this.value = value
		this.next = next
	}
}

function MergeTwoList(list1, list2) {
	const head = new NodeList(-1)
	let current = head

	while (list1 !== null && list2 !== null) {
		if (list1 < list2) {
			current.next = list1
			list1 = list1.next

		} else {
			current.next = list2
			list2 = list2.next
		}
		current = current.next
	}

	if (list1 !== null) {
		current.next = list1;
	} else {
		current.next = list2;
	}

	return head.next;

}

// const list1 = new NodeList(1, new NodeList(2, new NodeList(4)));
// const list2 = new NodeList(1, new NodeList(3, new NodeList(4)));
const list1 = [2, 3, 5, 6]
const list2 = [1, 3, 4, 6]
// Merge the lists
const mergedList = MergeTwoList(list1, list2);

// Print the merged list
let current = mergedList;
while (current !== null) {
	console.log(current.val);
	current = current.next;
}



// Question 2
// You are given an array prices where prices[i] is the price of a given
// stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one
// stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0