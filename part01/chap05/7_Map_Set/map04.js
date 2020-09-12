let prices = Object.fromEntries([
	['apple', 1],
	['banana', 2],
	['carrot', 3]
]);

// now prices = { apple: 1, banana: 2, carrot: 3 }
alert(prices.banana);	// 2


let map = new Map();
map.set('doughnut', 4);
map.set('eggplant', 5);
map.set('fig', 6);

let obj = Object.fromEntries(map.entries());	// let obj = Object.fromEntries(map); is Same.
// obj = { doughnut: 4, eggplant: 5, fig: 6 };
alert(obj.fig); // 5