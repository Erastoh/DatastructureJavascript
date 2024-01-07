//Question 1

// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.The list should be made by splicing
// together the nodes of the first two lists.
// Return the head of the merged linked list.

// Solution 1....
class ListNode {
	constructor (val, next = null) {
		this.val = val;
		this.next = next;
	}
}

function mergeTwoLists(list1, list2) {
	// Create a dummy node as the head of the merged list
	const dummyHead = new ListNode(-1);
	let current = dummyHead;

	// Iterate through the lists while there are nodes in both lists
	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			// Connect the current node to the smaller node in list1
			current.next = list1;
			list1 = list1.next; // Move to the next node in list1
		} else {
			// Connect the current node to the smaller node in list2
			current.next = list2;
			list2 = list2.next; // Move to the next node in list2
		}
		// Move the current pointer to the last added node
		current = current.next;
	}

	// If there are remaining nodes in either list, connect them to the merged list
	if (list1 !== null) {
		current.next = list1;
	} else {
		current.next = list2;
	}

	// The merged list starts from the next node of the dummy head
	return dummyHead.next;
}

// Example usage:
const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));


const mergedList = mergeTwoLists(list1, list2);

// Print the merged list
let current = mergedList;
while (current !== null) {
	console.log(current.val); // 1, 1, 2, 3, 4,4
	current = current.next;
}


// class NodeList {
// 	constructor (value, next = null) {
// 		this.value = value
// 		this.next = next
// 	}
// }

// function MergeTwoList(list1, list2) {
// 	let head = new NodeList(0)
// 	let current = head
// 	while (list1 && list2) {
// 		if (list1.value < list2.value) {
// 			current.next = list1
// 			list1 = list1.next
// 		}
// 		else {
// 			current.next = list2
// 			list2 = list2.next
// 		}
// 		current = current.next
// 	}
// 	// If one of the lists has remaining nodes, just attach them to the merged list
// 	if (list1 !== null) {
// 		current.next = list1
// 	} else {
// 		current.next = list2
// 	}

// 	// return dummyHead.next
// 	// current.next = list1 || list2
// 	return head.next

// }

// // const list1 = new NodeList(1, new NodeList(2, new NodeList(4)));
// // const list2 = new NodeList(1, new NodeList(3, new NodeList(4)));
// const list1 = [2, 3, 5, 6]
// const list2 = [1, 3, 4, 6]
// // Merge the lists
// const mergedList = MergeTwoList(list1, list2);
// console.log(mergedList); // [ 1, 3, 4, 6, next: [ 2, 3, 5, 6 ] ]



class ListNode {
	constructor (val, next = null) {
		this.val = val;
		this.next = next;
	}
}


function mergeTwoLists(list1, list2) {
	// Create a dummy node as the head of the merged list
	const dummyHead = new ListNode(-1);
	let current = dummyHead;

	// Iterate through the lists while there are nodes in both lists
	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			// Connect the current node to the smaller node in list1
			current.next = list1;
			list1 = list1.next; // Move to the next node in list1
		} else {
			// Connect the current node to the smaller node in list2
			current.next = list2;
			list2 = list2.next; // Move to the next node in list2
		}
		// Move the current pointer to the last added node
		current = current.next;
	}

	// If there are remaining nodes in either list, connect them to the merged list
	if (list1 !== null) {
		current.next = list1;
	} else {
		current.next = list2;
	}

	// The merged list starts from the next node of the dummy head
	return dummyHead.next;
}

// Example usage:
const list11 = new ListNode(1, new ListNode(2, new ListNode(4)));
const list21 = new ListNode(1, new ListNode(3, new ListNode(4)));


const mergedListt = mergeTwoLists(list1, list2);

// Print the merged list
let currentt = mergedList;
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


function maxProfit(prices) {
	if (!prices || prices.length < 2) {
		return 0;
	}

	let minPrice = prices[0];
	let maxProfit = 0;

	for (let i = 1; i < prices.length; i++) {
		// Calculate potential profit if selling on the current day
		const potentialProfit = prices[i] - minPrice;

		// Update maximum profit if the potential profit is greater
		maxProfit = Math.max(maxProfit, potentialProfit);

		// Update minimum price if the current price is lower
		minPrice = Math.min(minPrice, prices[i]);
	}

	return maxProfit;
}

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
const result = maxProfit(prices);
console.log(result);