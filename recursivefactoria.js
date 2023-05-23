function recursivefactorialnumber(n) {
	if (n === 0) {
		return 1;
	}
	return n * recursivefactorialnumber(n-1);
}

console.log(recursivefactorialnumber(2))
console.log(recursivefactorialnumber(4))
console.log(recursivefactorialnumber(11))
