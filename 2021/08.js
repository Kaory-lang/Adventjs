'use strict'

// https://adventjs.dev/challenges/08

function maxProfits(prices){
	let validSellPrices = prices;

	let minValue = prices.reduce((acc, curr, index) => {
		let prevValue = prices[index - 1];
		if(prevValue < curr && prevValue < acc){
			validSellPrices = prices.slice(index - 1);
			return prevValue;
		}
		else return acc;
	});

	let maxValue = Math.max(...validSellPrices);

	return (maxValue - minValue !== 0) ? maxValue - minValue : -1;
};

console.log(maxProfits([39, 18, 29, 25, 34, 32, 5]));
console.log(maxProfits([3, 3, 3, 3, 3]));
console.log(maxProfits([10, 20, 30, 40, 50, 60, 70]));
console.log(maxProfits([15, 18, 12, 11, 9, 7]));
