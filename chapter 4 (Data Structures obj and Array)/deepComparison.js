	
	// deep equality comparison

function deepEqual(a, b) {
	if(a === b) 
		return true;
	if( typeof(a) != 'object' || a == null  || typeof(b) != 'object' || b == null )
		return false;
	for(var prop in a) {
		if(b.hasOwnProperty(prop)){
			if( !deepEqual(a[prop], b[prop]) )
				return false;
		} else{
			return false;	
		}
	}
	return true;

}
obj = {
	name: 'sifat',
	degree: {
		ssc: 5.00,
		hsc: 5.00
	},
	value: 2
};
obj1 = {
	name: 'sifat',
	degree: {
		ssc: 5.00,
		hsc: 5.00
	},
	value: 2
};
// obj = {a:1, b:2};
// obj1 = {a:1, b:2};
console.log(deepEqual(obj,obj1));
