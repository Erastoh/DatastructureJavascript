// Quez 5 - Bext Time to buy and sell stock
// you are given an array prices where prices[i] is the price of a given stock on the ith day
//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//Return the maximum profit, if you cannot achieve any profit, terutn 0.

// input: prices = [7,1,5,3,6,4]; ---->>>> output:5;
// input: prices = [7,6,4,3,1];---->>>> output:0;

function maxProfit(prices) {
	let globalProfit = 0;
	for (let i = 0; i < prices.length - 1; i++){
		for (let j = i + 1; j < prices.length; j++){
			const currentProfit = prices[j] - prices[i];

			if (currentProfit > globalProfit) globalProfit = currentProfit;
		}
	}

	return globalProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));

