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
	return str === str.split("").reverse.join("");
}

const str = "erastus"; // false
console.log(isPalindrome(str))

3.
// Write a JavaScript program to reverse a given string. 
// function reverseString(name) {
// 	let reversedString = "";
// 	for (let i = name.length - 1; i >= 0; i--) {
// 		reversedString += name[i]
// 	}
// 	return reversedString;
// }

// const name = "testing";
// console.log(reverseString(name)) 

function reverseString(nameString) {
	const reverseString = (nameString) => nameString.split(").reverse().join(");
	return reverseString;
}


const nameString = "testing";
console.log(reverseString(nameString))



3
// Write a functioin that will take an array of numbers and return a new array with only the even numbers
function EvenNumbers(numbers) {
	return numbers.filter(num => num % 2 === 0);
}
const numbers = [2, 4, 5, 7, 9, 8];
console.log(EvenNumbers(numbers))  // [ 2, 4, 8 ]


4. 
// Given a string, write a function to count the occurrences of each character in the string. 

function occurrencesCountInString(str) {
	const charcount = {};

	for (let char in str){
		charcount[char] = (charcount[char] || 0) + 1

	}

	return charcount

}

console.log(countCharacterOccurrences("Hello World")); //{ H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1 }

const occurrencesCountInString1 = function (str) {
	let occ = {};

	for (char in str) {
		occ[char] = (occ[char] || 0) + 1;
	}
	return occ;
}


