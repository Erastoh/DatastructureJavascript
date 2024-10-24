//Anagram is a word or phrase formed by rearranging the letters of different word or phrase, using all the original letters exactly once

const isAnagram = function (s, t) {
	s = s.split("").sort().join("");
	t = t.split("").sort().join("");

	return s === t; 
}

//anagram => [a,n,a,g,r,a,m] => aaamnr
// anagram => [n,a,g,a,r,a,m] => aaamnr
console.log(isAnagram("anagram", "nagaram"));