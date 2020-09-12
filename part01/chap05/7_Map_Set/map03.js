let map = new Map([
	['1', 'str1'],
	[1, 'num1'],
	[true, 'bool1']
]);
alert(map.get('1'));	// str1


let obj = {
	name: "John",
	age: 30
};
let map2 = new Map(Object.defineProperties(obj));
alert(map2.get('name'));	// John