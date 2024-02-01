// Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and
// false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a

// different word or phrase, typically using all the original letters exactly once.


function isAnagram(s, t) {
	// Check if the lengths of the strings are equal
	if (s.length !== t.length) {
		return false;
	}

	// Create objects to store the frequency of each character in both strings
	const sFrequency = {};
	const tFrequency = {};

	// Populate the frequency objects for string s
	for (const char of s) {
		sFrequency[char] = (sFrequency[char] || 0) + 1;
	}

	// Populate the frequency objects for string t
	for (const char of t) {
		tFrequency[char] = (tFrequency[char] || 0) + 1;
	}

	// Compare the frequency objects
	return JSON.stringify(sFrequency) === JSON.stringify(tFrequency);
}

// Example usage:
const s = "listen";
const t = "silent";
const result = isAnagram(s, t);

if (result) {
	console.log(`${t} is an anagram of ${s}`);
} else {
	console.log(`${t} is not an anagram of ${s}`);
}