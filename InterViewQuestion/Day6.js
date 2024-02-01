// Binary Search

// Given an array of integers nums which is sorted in ascending order, and
// an integer target, write a function to search target in nums.If target
// exists, then return its index.Otherwise, return -1.
// You must write an algorithm with 0(log n) runtime complexity.

function binarysearch(nums, target) {
	if (nums.length < 1) return -1;
	let start = 0
	let end = nums.length - 1
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);

		if (nums[mid] === target) {
			return mid
		}
		if (nums[mid] < target) {
			start = mid + 1
		} else {
			end = mid - 1
		}
	}
	return -1
}
console.log(binarysearch([1, 2, 3, 4, 5, 6, 7, 8], 5));

