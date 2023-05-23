function LinearSearch(n) {
	var arraymain = [-5, 2, 34, 43, 5, 10, 9]

	for (let i = 0; i < arraymain.length; i++) {
		if (i == n) {
			return arraymain.indexOf(i)
		}
	}
}

console.log(LinearSearch(2))
console.log(LinearSearch(4))
console.log(LinearSearch(5))


//major working Code
function LinearSearch2(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i
		}
	}
	return -1

}

console.log(LinearSearch2([2, 3, 5, 6, 1, 7, 8, 200], 200))
console.log(LinearSearch2([2, 3, 5, 6, 1, 4, 7, 8,], 4))
console.log(LinearSearch2([2, 3, 5, 6, 1, 7, 8,], 5))

//this is has 1 forloop 
//Big-O  = O(n)