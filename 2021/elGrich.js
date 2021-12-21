'use strict'

// https://adventjs.dev/challenges/03

function isValid(letter){
	if(letter.match(/\(\)/)) return false;
	else return Boolean(letter.match(/\([a-zA-ZÀ-ÿ]+\)/));
}
