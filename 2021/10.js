'use strict'

// https://adventjs.dev/challenges/10

function getCoins(change) {
	const coins = [1,2,5,10,20,50];
	let returnValue = [...coins].map(() => 0); 

	while(change !== 0){
		for(let curr of [...coins].reverse()){
			if(change >= curr){
				let index = coins.indexOf(curr);
				returnValue[index] += 1;
				change -= curr;
				break;
			}
		}
	}

	return returnValue; 
}

console.log(getCoins(100));
