// Climbing Stairs
// You are climbing a staircase.It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.In how many distinct ways
// can you climb to the top ?


function climbStairs(n) {
	if (n <= 2) {
		return n; // Base cases: 1 step or 2 steps
	}

	// Initialize an array to store the number of ways to reach each step
	const dp = new Array(n + 1);
	dp[0] = 0; // Base case: 0 steps
	dp[1] = 1; // Base case: 1 step
	dp[2] = 2; // Base case: 2 steps

	// Iterate from step 3 to n and calculate the number of ways for each step
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]; // Number of ways to reach step i
	}

	return dp[n]; // Return the number of ways to reach the top
}

// Example usage:
const n = 5;
console.log(climbStairs(n)); // Output: 8 (1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 2+2+1, 2+1+2, 1+2+2)