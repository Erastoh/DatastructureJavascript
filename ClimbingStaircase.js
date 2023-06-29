//Problem Statement
//Given a staircase of 'n'steps, count the number of distinct ways to climb to the top. You can either Climb 1 step or 2 steps  at a time. 

// Solution. 

function ClimbingStairCase(n) {

	const numOfWays = [1, 2]
	for (let i = 2; i <= n; i++) {
		numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2]
	}

	return numOfWays[n - 1]
}


console.log(ClimbingStairCase(1)) // 1  (1)
console.log(ClimbingStairCase(2)) // 2   (1,1), (2)
console.log(ClimbingStairCase(4)) // 5 ----- 5 is the number of ways the user can climb 4 staricase  either (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)
console.log(ClimbingStairCase(5)) // 8 
console.log(ClimbingStairCase(8)) // 34

//Big-O O(n) - linear time complexity. 