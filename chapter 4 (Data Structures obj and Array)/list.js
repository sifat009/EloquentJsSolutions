// 	// forward approach

// function arrayToList(arr) {
// 	let list = null;
// 	arr.reverse().forEach(function(element) {
// 		list = {value: element, next: list};
// 	});
// 	return list;
// }

// 	// backward approach

function arrayToList(arr){
	let head = null;
	let Node = function(val) {
		this.value = val;
		this.next = null;
	}
	arr.forEach(function(element) {
		let node = new Node(element);	
		if(!head) {
			head = node;
		} else{
			let current = head;
			while(current.next) {
				current = current.next;
			}
			current.next = node;
		}
	});
	return head;
}

// console.log(arrayToList([1,2,3]));

	// converting a lint in to an array

// function listToArray(list) {
// 	let array = [];
// 	while(list) {
// 		array.push(list.value);
// 		list = list.next;
// 	}
// 	return array;
// }

// console.log(listToArray(arrayToList([1,2,3])));

	// prepend function

// function prepend(val, list) {
// 	return {value: val, next: list};
// }
// console.log(prepend(10, {value: 20, next: {value: 30, next: null}}));

	// finding nth element

// function nth(position, list) {
// 	if(!list)
// 		return undefined;
// 	if(position == 0)
// 		return list.value;
// 	return nth(position-1, list.next);
// }
// console.log(nth(1,{value:1, next: {value:2, next: {value: 3, next: null}}}));



