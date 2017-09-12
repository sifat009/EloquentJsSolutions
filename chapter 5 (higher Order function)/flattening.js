// flattening an multi-dimention Array

let flatten = (arrays) => {
	let array = arrays.reduce((start, next) => {
		return start.concat(next);
	});
	return array;
};

console.log(flatten([[1, 2, 3], [4, 5], [6]]));