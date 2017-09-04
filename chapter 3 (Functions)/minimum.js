
// old version
function min(a) {
    var mini = a[0];
    for(var i = 0; i < a.length; i++) {
        if(a[i] < mini ) mini = a[i];
    }
    return mini;
}

console.log(min([3,2,1,0,-2]));

/*

// new version

function min() {
	var min = arguments[0];
	var args = Array.prototype.slice.call(arguments);
	args.forEach(function(value){
		if(value < min) min = value;
	}) 
	return min;
}
console.log(min(3,2,1,0,-2));

*/