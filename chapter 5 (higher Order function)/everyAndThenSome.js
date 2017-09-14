	// every function implement

let every = (array, f) => {
	for (let i = 0; i < array.length; i++) {
		if(!f(array[i]))
			return false;
	}
	return true;
};

	// some function implement

let some = (array, f) => {
	for (let i = 0; i < array.length; i++) {
		if(f(array[i]))
			return true;
	}
	return false;
};
console.log( every([1, 1, NaN], isNaN) );
console.log( some([1, 1, NaN], isNaN) );


