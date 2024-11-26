
// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times.Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well - formed, etc.Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k.For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.

// k = how many times we repeat stuff
// [  = now I need to start storing what I want to repeat
// ]  = better start repeating

const decodeString = function (s) {

	let multipy = [];
	let tempMult = '';
	let repeatStr = [];
	let solution = '';
	// 31[a2[c]]
	for (let char of s) {
		if (!isNaN(char)) {
			tempMult = `${tempMult}${char}`; // ''
		} else if (char === '[') {
			multipy.push(tempMult);
			tempMult = '';
			repeatStr.push(solution); // ['',a]
			solution = '';
		} else if (char === ']') {

			solution = repeatStr.pop() + solution.repeat(multipy.pop()); // 
		} else {
			solution += char; // ''+ a + c
		}
	}
	return solution;
};