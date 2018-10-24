/**
 * Writing programming interview questions hasn't made me rich yet ... so I might give up and start trading Apple stocks all day instead.

	First, I wanna know how much money I could have made yesterday if I'd been trading Apple stocks all day.

	So I grabbed Apple's stock prices from yesterday and put them in an array called stockPrices, where:

	The indices are the time (in minutes) past trade opening time, which was 9:30am local time.
	The values are the price (in US dollars) of one share of Apple stock at that time.
	So if the stock cost $500 at 10:30am, that means stockPrices[60] = 500.

	Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

	For example:

	const stockPrices = [10, 7, 5, 8, 11, 9];

	getMaxProfit(stockPrices);
	// Returns 6 (buying for $5 and selling for $11)

	No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.
 */

function getMaxProfit(stockPrices) {

	if (stockPrices.length < 2) {
		console.log('the array have to have at least 2 elements');
	}
	let profit = stockPrices[0] - stockPrices[1];
	
	for (let i= 1; i < stockPrices.length - 1; i++) {
		let buy = stockPrices[i];
		for (let j = i + 1; j < stockPrices.length; j++) {
			let sell = stockPrices[j];
			let tmp = sell - buy;
			if (tmp > profit) {
				profit = tmp;
			}
		}
	}
	return profit;
}

// this algorithm is an O(n^2)
// this is a O(n) but with 2 cycles
function getMaxProfit_o(stockPrices) {

	if (stockPrices.length < 2) {
		console.log('the array have to have at least 2 elements');
	}
	let buy = stockPrices[0];
	let profit = stockPrices[1] - buy;
	
	for (let i= 1; i < stockPrices.length - 1; i++) {
		const currentPrice = stockPrices[i];
		const tmpProfit = currentPrice - buy;
		
		profit = tmpProfit > profit ? tmpProfit : profit;
		
		buy = currentPrice < buy ? currentPrice : buy;
	}
	
	return profit;
}


console.log(getMaxProfit_o([10, 7, 5, 8, 11, 9]));