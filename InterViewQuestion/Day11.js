// First Bad Version
// Suppose you have n versions[1, 2, ..., n] and you want to find out
// the first bad one, which causes all the following ones to be bad.
// You are given an API bool isBadVersion(version) which returns whether
// version is bad.Implement a function to find the first bad version.


function firstBadFunction(n) {

	let left = 1;
	let right = n;

	while (left < right) {
		let mid = Math.floor((left + right) / 2);

		if (isBadVersion(mid)) {
			right = mid;
		} else {
			left = mid + 1;
		}
	}
}