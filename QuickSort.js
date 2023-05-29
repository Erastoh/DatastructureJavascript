// Quick Sort Idea
// Begin by Pick first element as pivot, it can be the first element or pick a random element or a median
//put everything that's smaller than the pivot into a left array and everything thats greater than the pivot into a right array. 

//Repeat the process for the individual left and right arrays till you have an array of lenght 1 which is sorted by definition. 


function QuickSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	let pivot = arr[arr.length - 1]
	let left = []
	let right = []
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return [...QuickSort(left), pivot, ...QuickSort(right)]
}
const arr = [8, 20, -2, -6, 4]
console.log(QuickSort(arr)) // [ -6, -2, 4, 8, 20 ]

// Worst Case Complexity --- O(n~2)   when we have a sorted algorith
//Average Case Complexity -- O(n log n)