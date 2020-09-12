let john = {name: "John"};
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
alert(visitsCountMap.get(john));


let john2 = { name: "John2" };
let visitsCountObj = {};
visitsCountObj[john2] = 2020; 
alert( visitsCountObj["[object Object]"] ); 