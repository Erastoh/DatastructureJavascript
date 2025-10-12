// Write a function: that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].


function solution(A) {
	const N = A.length;
	for (let i = 0; i < N; i++) {
		while (A[i] > 0 && A[i] <= N && A[A[i] - 1] !== A[i]) {
			const correctIndex = A[i] - 1;
			[A[i], A[correctIndex]] = [A[correctIndex], A[i]];
		}
	}

	for (let i = 0; i < N; i++) {
		if (A[i] !== i + 1) {
			return i + 1;
		}
	}

	return N + 1;
}
