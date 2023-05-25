// Bubble Sort Pseudocode. 
//used for sorting arrays from small to biggest. 

// Compare adjacent elements in the array and swap the positions if they are not in the intended order
// Repeat the instruction as you step through each element in the array
//once you step through the whole array with no swaps, the array is sorted

function BublleSort(arr) {
	let swapped
	do {
		swapped = false
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i]
				arr[i] = arr[i + 1]
				arr[i + 1] = temp
				swapped = true
			}
		}
	} while (swapped)
}
const arr = [3, 5, -5, 9, -2, 7, -8, 4, -1]
BublleSort(arr)
console.log(arr) // final output [- 8, -5, -2, -1, 3,4, 5, 7, 9]

//Big-O = 0(n`2)