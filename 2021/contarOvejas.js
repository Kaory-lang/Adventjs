// https://adventjs.dev/challenges/01

'use strict'

function contarOvejas(ovejas){
	let response = [];
	for(let x of ovejas){
		let xName = x.name.toLowerCase();
		if(xName.includes('n') && xName.includes('a') && x.color === 'rojo'){
			response.push(x);
		}
	}
	return response;
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

console.log(contarOvejas(ovejas));
