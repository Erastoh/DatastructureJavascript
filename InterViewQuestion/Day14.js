// Longest Palindrome
// Given a string s which consists of lowercase or uppercase letters,
// return the length of the longest palindrome that can be built with 
// those letters. Letters are case sensitive, for example, "Aa" is not considered a
// palindrome here.


function longestPalindrome(s) {
	const charCount = new Map();

	// Count the frequency of each character
	for (const char of s) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}

	let hasOddFrequency = false;
	let palindromeLength = 0;

	// Calculate the length of the longest palindrome
	for (const count of charCount.values()) {
		palindromeLength += Math.floor(count / 2) * 2; // Add even count characters
		if (count % 2 !== 0) {
			hasOddFrequency = true; // Set flag if there's a character with odd count
		}
	}
	// Add one for a character with odd frequency (if any)
	if (hasOddFrequency) {
		palindromeLength += 1;
	}

	return palindromeLength;
}

// Example usage:
console.log(longestPalindrome("abccccdd")); // Output: 7