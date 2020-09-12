let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // // John, Pete, Mary 
}