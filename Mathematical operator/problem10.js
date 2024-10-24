let array=["luffy","zoro","namai",1,true];
let array2=["mahesh","hyderabad"];
//console.log(array[0]);
array.push("sanji");
console.log(array);
array.pop();
let array3=[...array,...array2];
console.log(array3);