function recursivefibonacci(n) {
	if (n < 2) {
		return n
	}
	return recursivefibonacci(n - 1) + recursivefibonacci(n - 2)
}
console.log(recursivefibonacci(0))
console.log(recursivefibonacci(1))
console.log(recursivefibonacci(2))
console.log(recursivefibonacci(7))//6+5
console.log(recursivefibonacci(11))

//big 0 = O(n) -- iterative
// time complexity  0(2^n)