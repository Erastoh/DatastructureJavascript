//Fibonancci Numbers
//fibonancci series... is sum of previous two numbers

var fib = function (n) {
	let arr = [0, 1]
	
	for (let i = 2; i <= n; i++){
		arr.push(arr[i - 1] + arr[i - 2]);
	}
	return arr[n];
}
fib(5);

// function recursivefibonacci(n) {
// 	if (n < 2) {
// 		return n
// 	}
// 	return recursivefibonacci(n - 1) + recursivefibonacci(n - 2)
// }
// console.log(recursivefibonacci(10))