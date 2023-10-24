// Question 1
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.


function twoSum(nums, target) {
	const numIndices = {};

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i];

		if (complement in numIndices) {
			// If the complement is found in the object, return the indices
			return [numIndices[complement], i];
		}

		// Otherwise, add the current number and its index to the object
		numIndices[nums[i]] = i;
	}

	// If no solution is found, return an empty array or handle it as needed
	return [];
}

// Example usage:
const nums = [2, 7, 4, 11, 15];
const target = 15;

const result = twoSum(nums, target);
if (result.length > 0) {
	console.log(`The indices of the two numbers that add up to the target are: [${result}]`); //values at index [2,3]
} else {
	console.log("No solution found.");
}


// Question 2

// Given a string s containing just the characters '(', ')', '{', '}',
// 	'[' & ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
