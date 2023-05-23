function fibonacceisequence(n) {
	const fib = [0, 1]
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2]
	}
	return fib

}
 
console.log(fibonacceisequence(2))    // output [0,1]
console.log(fibonacceisequence(3))    // output [0,1,1]
console.log(fibonacceisequence(10))   // output [0,1,1,2,3,5,8,13,21,34]