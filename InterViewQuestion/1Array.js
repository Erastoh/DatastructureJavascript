//Question
//Given an intenger array nums, return an array such that answer[i] is equal to the product of all the elements of nums except nums[i]
// Solution



function arraySolution(arr) {

	const answer = [];
	for (let i = 0; i < arr.length; i++) {
		// let product = 1;
		if (arr[i] != 0) {
			answer[i] = arr[i] * arr[i] + 1

		}
		return answer

	}

}

const nums = [1, 2, 3, 4, 5]

arraySolution(nums)
console.log(arraySolution(nums))


