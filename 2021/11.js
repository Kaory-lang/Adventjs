'use strict'

// https://adventjs.dev/challenges/11

function shouldBuyFidelity(times) {
	const TICKET_PRICE = 12;
	
	let fidelityCardValue = 250;
	let normalValue = TICKET_PRICE * times;

	for(times; times !== 0; times--) fidelityCardValue += TICKET_PRICE * (0.75 ** times);

	return (fidelityCardValue < normalValue) ? true : false;
}

console.log('Example: ' + shouldBuyFidelity(1));
console.log('Example: ' + shouldBuyFidelity(100));
