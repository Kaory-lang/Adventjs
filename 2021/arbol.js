'use strict'

// https://adventjs.dev/challenges/04

function createXmasTree(height){
	if(!(height > 0 && height < 101)) throw new Error('Invalid height MIN:1 and MAX:100');
	let spaces = height - 1;
	let cicle = 1;
	let string = ''; 
	while(spaces !== -1){
		string += '_'.repeat(spaces) + '*'.repeat(cicle) + '_'.repeat(spaces) + '\n'; 
		spaces -= 1;
		cicle += 2;
	}
	return string + '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n'
			+ '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1);
}

console.log(createXmasTree(10));
