//palindrome
// a palindrome is a number or a string that can read the same forward and backward

//input: x = 121 ------->>> output: true


const isPalindrome = function (x) {
	return x === +x.toString().split("").reverse().join(""); 
}

const res = isPalindrome(121)
console.log(res);   //true
