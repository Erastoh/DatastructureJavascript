1.
//Write a JavaScript program to find the maximum number in an array

// solution 

// function MaximumNumber(arr) {
// 	let maximumnum = 1;
// 	for (let i = 0; i < arr.length; i++){
// 		if (arr[i] > ) {		
// 		}
// 	}
// }
// const arr = [2,4,5,69,9,7]

function MaximumNumber(arr) {
	return Math.max(...arr);
}

const arr = [2, 4, 5, 69, 9, 7]
console.log(MaximumNumber(arr)) // 69

2.
// Write a javascript function to check if a given String is a palindrome

function isPalindrome(str) {
	return str === str.split(").reverse.join(");
}

const str = "erastus"; // false
console.log(isPalindrome(str)) 

3. 
// Write a JavaScript program to reverse a given string. 
function reverseString(name) {
	let reversedString = "";
	for (let i = name.length - 1; i >= 0; i--) {
		reversedString += name[i]
	}
	return reversedString;
}

const name = "testing";
console.log(reverseString(name)) 



