'use strict'

// https://adventjs.dev/challenges/09

function groupBy(collection, it) {
	let groups = {};
	if(typeof it === 'function'){
		collection.forEach((curr) => {
			if(groups[it(curr)] === undefined) groups[it(curr)] = [curr];
			else groups[it(curr)].push(curr); 
		});
	}else if(typeof it === 'string'){
		collection.forEach((curr) => {
			if(groups[curr[it]] === undefined) groups[curr[it]] = [curr];
			else groups[curr[it]].push(curr);
		});
	}

	return groups; 
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor));
console.log(groupBy(['one', 'two', 'three'], 'length'));
console.log(groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
));
console.log(groupBy([{age: 23}, {age: 24}], 'age'));
console.log(groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating'));
