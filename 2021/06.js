'use strict'

// https://adventjs.dev/challenges/06

function sumPairs(numbers, result){
	for(let number in numbers){
		let tempArr = [...numbers];
		tempArr.splice(number,1);
		
		for(let x of tempArr){
			if(numbers[number] + x === result) return [numbers[number],x];
		}
	}
	return null
}

console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6));
