// Given an array of integers nums and an integer target
//return incdices of the two numbers such that they add up tp target

const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++){
		for (let j = i+1; j < nums.length; j++) {
			if(nums[i] + nums[j] == target) return [i,j]
		}
	}
}

console.log(twoSum([2, 2, 6, 3, 8], 9));