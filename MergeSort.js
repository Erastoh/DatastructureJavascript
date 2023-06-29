// Merge Sorte Idea
// Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array. 

// Problem - Given an array of integers Sort the Array [8, -1, 20, -2, -6, 4]

function MergeSort(arr) {
	if (arr.length < 2) {
		return arr
	}
	const mid = Math.floor(arr.length / 2)
	const Leftarr = arr.slice(0, mid)
	const rightarr = arr.slice(mid)

	return merge(MergeSort(Leftarr), MergeSort(rightarr))
}

function merge(leftarr, rightarr) {
	let mergedarr = []
	while (leftarr.length && rightarr.length) {
		if (leftarr[0] <= rightarr[0]) {
			mergedarr.push(leftarr.shift())
		} else {
			mergedarr.push(rightarr.shift())
		}
	}
	return [...mergedarr, ...leftarr, ...rightarr]
}

const arr = [8, -1, 20, -2, -6, 4]
console.log(MergeSort(arr)) //[ -6, -2, -1, 4, 8, 20 ]


//Big O Notation 0(nlogn) the size is reduced by half and further reduced by half. 