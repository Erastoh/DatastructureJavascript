// Binary Search Pseudocode

// 1. if the array is empty return -1 as the element cannot be found

// 2. If array has element, Find the middle element in the array.if target is equal to the middle element, return the middle element.Binary

// 3. If the target is less than the middle element, binary search left half of the array. 

// 4. If target is greater than the element, Binary search the right half of the array. 

function BinarySearch(arr, target) {
	let start = 0
	let end = arr.length - 1
	while (start <= end) {
		const mid = Math.floor((start + end) / 2)

		if (arr[mid] === target) {
			return mid
		}
		if (arr[mid] < target) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return -1
}

//Big o === O(logn)  because input size is reduced by half
console.log(BinarySearch([-3, 2, 3, 5, 6, 7, 8, 9], 6)) //index 4
console.log(BinarySearch([-2, 3, 5, 6, 7, 8, 9], 5)) // index 2
console.log(BinarySearch([-2, 3, 5, 6, 7, 8], 8)) // index 5

