'use strict'

// https://adventjs.dev/challenges/02

function listGifts(letter){
	letter = letter.split(' ');
	let objects = {};
	for(let x of letter){
		if(x[0] !== '_' && x !== '') objects[x] = objects[x] + 1 || 1;
	}
	return objects;
}

console.log(listGifts('bici coche balón _playstation bici  coche peluche'));
