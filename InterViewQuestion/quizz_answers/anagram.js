//Anagram is a word or phrase formed by rearranging the letters of different word or phrase, using all the original letters exactly once

const isAnagram = function (s, t) {
	s = s.split("").sort().join("");
	t = t.split("").sort().join("");

	return s === t; 
}

//anagram => [a,n,a,g,r,a,m] => aaamnr
// anagram => [n,a,g,a,r,a,m] => aaamnr
console.log(isAnagram("anagram", "nagaram"));

//method 2

const isAnagram2 = function (s, t) {
	if (s.length !== t.length) return false;
	let obj1 = {};
	let obj2 = {};

	for (let i = 0; i < s.length; i++){
		obj1[s[i]] = (obj1[s[i]] || 0) + 1;
		obj2[t[i]] = (obj2[t[i]] || 0) + 1;
	}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;
}


const anagram = function (s, t) {

	if (s.length !== t.length) return false;
	const obj1 = {};
	const obj2 = {};

	for (let i = 0; i < s.length; i++){
		obj1[s[i]] = obj1[s[i]] + 1;
		obj2[t[i]] = obj2[t[i]] + 1;
	}

	for (const key in obj1) {
		if (obj1[key] !== obj2[key]) return false;
	}
	return true;

}