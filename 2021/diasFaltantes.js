'use strict'

// https://adventjs.dev/challenges/05

function daysToXmas(date){
	let result =  Math.ceil((new Date('Dec 25, 2021').getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
	return result;
}

console.log(daysToXmas(new Date('Dec 23, 2021 00:00:01')));
