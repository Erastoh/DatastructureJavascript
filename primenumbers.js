function
	factorialofanumber(n) {
	let result = 1
	for (let i = 2; i <= n; i++) {
		result = result * i;
	}
	return result;
}

console.log(factorialofanumber(2))
console.log(factorialofanumber(4))
console.log(factorialofanumber(10))