require('./ancestry.txt');
let ancestry = JSON.parse(module.children[0].exports);

// let groupBy = (arr, f) => {
// 	let group = {};
// 	arr.forEach( person => {
// 		if( !group[f(person)] ) {
// 			group[f(person)] = [person];
// 		}
// 		group[f(person)].push(person);
// 	});
// 	return group;
// };
let groupByAge = (arr, f) => {
	let group = {};
	arr.forEach( person => {
		if( !group[f(person)] )
			group[f(person)] = [person.died - person.born];
		else
			group[f(person)].push(person.died - person.born);
	});
	return group;
};
let century = person => {
	return Math.ceil(person.died/100);
};

let average = arr => {
	return (arr.reduce((prev, next) => prev + next))/ arr.length;
};

let groups = groupByAge(ancestry, century);
let groupOfAverageAge = {};
for(let key in groups ) {
	groupOfAverageAge[key] = average(groups[key]).toPrecision(3);
}

console.log(groupOfAverageAge);

