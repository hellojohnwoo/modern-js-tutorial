let foodMap = new Map([
	['Apple', 100],
	['Banana', 200],
	['Cocoa', 300]
]);

for (let food of foodMap.keys()) {
	alert(food); // Apple, Banana, Cocoa
}

for (let amout of foodMap.values()) {
	alert(amout);	// 100, 200, 300
}

for (let entry of foodMap) {	// foodMap.entries() is Same.
	alert(entry);	// Apple,100 ...
}

foodMap.forEach( (value, key, map) => {
	alert(`${key}: ${value}`);	// Apple: 100 ...
})