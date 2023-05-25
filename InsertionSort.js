// Insertion Sort Idea
// Virtually slits the array into sorted and unsorted Parts
// Assume the first element is sorted and the other elements are unsorted
// Select unsorted element and compare with all the sorted elements in the sorted part
// if the element sorted is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger sorted element to the right. 
// insert the selected element to the right index
// Repeat till all the unsorted element are placed in the right order

function InsertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numbertoInsert = arr[i]
		let j = i - 1
		while (j >= 0 && arr[j] > numbertoInsert) {
			arr[j + 1] = arr[j]
			j = j - 1
		}
		arr[j + 1] = numbertoInsert
	}
}
const arr = [3, 20, -5, 9, -2, 7, 8, 4, -1]
InsertionSort(arr)
console.log(arr)