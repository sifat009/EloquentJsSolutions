	// range function
let Range = (start, end, interval = 1) => {
	let output = [];
	for (let i = start; (start <= end) ? (i <= end) : (i >= end); i = i + interval) {
		output.push(i);
	}
	return output;
}
	// sum of the given range
let Sum = (arr) => {
	return arr.reduce((sum, next) => {
		return sum + next;
	});
}

console.log(Sum(Range(5,1,-2)));