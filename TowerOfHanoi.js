// Problem Statement
//The objective of the puzzle is to move the entire stack to the last rod, obeying the following Rules: 
//- Only one disk may be moved at a time. 
// - Each move consists of having the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly,
// No disk may be placed on top of a disk that is smaller. 



function TowerOfHanoi(n, fromRod, toRod, UsingRod) {

	if (n === 1) {
		console.log(`Move Disk 1 from ${fromRod} to ${toRod}`)
		return
	}
	TowerOfHanoi(n - 1, fromRod, UsingRod, toRod)
	console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`)
	TowerOfHanoi(n - 1, UsingRod, toRod, fromRod)
	
}

TowerOfHanoi(3, 'A', 'C', 'B')
// Move Disk 1 from A to C
// Move Disk 2 from A to B
// Move Disk 1 from C to B
// Move Disk 3 from A to C
// Move Disk 1 from B to A
// Move Disk 2 from B to C
// Move Disk 1 from A to C

// Big-O n(2^n)