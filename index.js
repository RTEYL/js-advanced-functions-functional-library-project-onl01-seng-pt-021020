const fi = (function() {
	return {
		libraryMethod: function() {
			return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0';
		},

		each: function(collection, callback) {
			for (const i in collection) {
				callback(collection[i]);
			}
			return collection;
		},

		map: function(collection, callback) {
			let array = [];
			for (const i in collection) {
				array.push(callback(collection[i]));
			}
			return array;
		},

		reduce: function(collection, callback, acc) {
			let arr = collection;
			if (!acc) {
				acc = arr[0];
				arr = arr.slice(1);
			}
			for (let i = 0; i < arr.length; i++) {
				acc = callback(acc, arr[i], arr);
			}
			return acc;
		},

		find: function(collection, predicate) {
			for (const i in collection) {
				if (predicate(collection[i])) {
					return collection[i];
				}
			}
		},

		filter: function(collection, predicate) {
			let array = [];
			for (const i in collection) {
				if (predicate(collection[i])) {
					array.push(collection[i]);
				}
			}
			return array;
		},

		size: function(collection) {
			return Object.keys(collection).length;
		},

		first: function(array, n) {
			if (n === undefined) {
				return array[0];
			} else {
				return array.slice(0, n);
			}
		},

		last: function(array, n) {
			if (n === undefined) {
				return array[array.length - 1];
			} else {
				return array.slice(array.length - n);
			}
		},

		compact: function(array) {
			let newArr = [];
			for (const i in array) {
				if (!!array[i]) {
					newArr.push(array[i]);
				}
			}
			return newArr;
		},

		sortBy: function(array, callback) {
			return [ ...array ].sort((a, b) => callback(a) - callback(b));
		},

		flatten: function(array, shallow = false) {
			if (shallow) {
				return array.flat();
			} else {
				return array.flat(Infinity);
			}
		},

		uniq: function(array, isSorted, callback) {
			if (!callback || isSorted) {
				return [ ...new Set(array) ];
			} else {
				let callbackVals = new Set();
				let uniqVals = new Set();
				for (let val of array) {
					let callbackVal = callback(val);
					if (!callbackVals.has(callbackVal)) {
						callbackVals.add(callbackVal);
						uniqVals.add(val);
					}
				}
				return Array.from(uniqVals);
			}
		},

		keys: function(obj) {
			return Object.keys(obj);
		},

		values: function(obj) {
			return Object.values(obj);
		},

		functions: function(obj) {
			let arr = [];
			for (let key in obj) {
				if (typeof obj[key] === 'function') {
					arr.push(key);
				}
			}
			return arr.sort();
		}
	};
})();

fi.libraryMethod();
