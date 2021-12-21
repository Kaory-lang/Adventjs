'use strict'

// https://adventjs.dev/challenges/07

function contains(store, product){
	let keys = Object.keys(store);
	
	for(let key of keys){
		if(typeof store[key] === 'object'){
			let r = contains(store[key], product);
			if(r === true) return r;
		}else{
			if(store[key] === product) return true;
		}
	}
	return false;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(otroAlmacen, 'mando'));
