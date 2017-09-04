	// just reverse the given array
let reverse = (arr) => {
	let array = [];
	for(let i = arr.length - 1; i >= 0; i--) {
		array.push(arr[i]);
	}
	return array;
}
	// in place reverse
let reverseInPlace = (arr) => {
	for(let i = 0; i < Math.round((arr.length)/2); i++) {
		let current = arr[i];
		arr[i] = arr[arr.length - i - 1];
		arr[arr.length - i - 1 ] = current;
	}
	return arr;

}
console.log(reverseInPlace([1,2,3,4,5]));