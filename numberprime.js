function primenumbersnumber(n) {
	if (n < 2) {
		return false
	}
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true;
}

console.log(primenumbersnumber(2))
console.log(primenumbersnumber(4))
console.log(primenumbersnumber(11))
