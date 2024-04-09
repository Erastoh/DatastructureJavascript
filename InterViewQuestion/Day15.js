// Given two binary strings a and b return their sum as a binary string.s

function addBinary(a, b) {
	let i = a.length - 1;
	let j = b.length - 1;
	let sum = '';
	let carry = 0;

	while (i >= 0 || j >= 0 || carry > 0) {
		const digitA = i >= 0 ? parseInt(a[i]) : 0;
		const digitB = j >= 0 ? parseInt(b[j]) : 0;
		const currentSum = digitA + digitB + carry;
		sum = (currentSum % 2) + sum;
		carry = Math.floor(currentSum / 2);
		i--;
		j--;
	}

	return sum;
}

// Example usage:
console.log(addBinary("11", "1")); // Output: "100"
