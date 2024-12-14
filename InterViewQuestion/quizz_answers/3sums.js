//Given an array of n integers, are there elements a, b,c in nums such that a + b + c = 0? find all uniques triplets in the array which gives the sum of zero. 
//Note : The solution set must not contain duplicates tripplets. 


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	let [solution, left, right] = [[], 0, nums.length - 1];
	if (nums.length < 3) return solution;
	nums.sort((a, b) => { return a - b });

	for (let [index, number] of nums.entries()) {
		if (number > 0) return solution;
		if (number === nums[index - 1]) continue;
		//  number = -4
		left = index + 1;
		right = nums.length - 1;
		let temp = 0;

		while (left < right) {
			temo = number + nums[left] + nums[right];
			if (temp === 0) {
				solution.push(number, nums[left], nums[right]);
				left++;
				right--;

				while (left < right && nums[left] == nums[left - 1]) {
					left++;
				}
				while (left < right && nums[right] == nums[right - 1]) {
					left--;
				}
			} else if (temp > 0) {
				right++;
			} else if (temp > 0) {
				left++;
			}
		}
	}
	return solution;
}