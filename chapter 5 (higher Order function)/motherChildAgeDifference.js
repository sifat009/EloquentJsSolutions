require('./ancestry.txt');
let ancestry = JSON.parse(module.children[0].exports);


let byName = {};
ancestry.forEach(person => byName[person.name] = person);

let count = ages = 0;
ancestry.forEach(person => {
	if(byName[person.mother]) {
		ages += (person.born - byName[person.mother].born);
		count++;
	}
});
console.log((ages/count).toPrecision(3));


