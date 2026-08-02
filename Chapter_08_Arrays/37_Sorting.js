let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let num = [10, 1, 21, 2];
//num.sort();
console.log(num);  
//natural sorting

// proper sorting Asc, Desc

num.sort((a,b) => a-b);
console.log(num);  // Ascending

num.sort((a,b) => b-a);
console.log(num);  // Descending

num.reverse();
console.log(num);  // reverse