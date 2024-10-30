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

const twosum2 = function (nums, target) {
	var obj = {};

	for (let i = 0; i < nums.length; i++){
		var n = nums[i];
		if (obj[target - n] >= 0) {
			return [obj[target - n], i];
		} else {
			return obj[n] = i;
		}
	}
}

console.log(twosum2([2, 10, 6, 1, 9,4], 9));
