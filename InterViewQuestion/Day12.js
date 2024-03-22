// Ransom Note Easy
// Given two strings ransomNote and magazine, return true if ransomNote
// can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote


function canConstruct(ransomNote, magazine) {
	// Create a hashmap to store character frequencies in magazine
	const charCount = new Map();

	// Populate the hashmap with character frequencies from magazine
	for (const char of magazine) {
		charCount.set(char, (charCount.get(char) || 0) + 1);
	}

	// Check if ransomNote can be constructed using characters from magazine
	for (const char of ransomNote) {
		if (!charCount.has(char) || charCount.get(char) === 0) {
			return false; // Character not found or frequency exhausted
		}
		// Decrement the frequency of the character in the hashmap
		charCount.set(char, charCount.get(char) - 1);
	}

	return true; // All characters in ransomNote can be constructed
}

// Example usage:
const ransomNote = "aabb";
const magazine = "aabbc";
console.log(canConstruct(ransomNote, magazine)); // Output: true