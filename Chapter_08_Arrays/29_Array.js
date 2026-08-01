let fruit = [];
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
console.log(fruit.length);

// For the Negative indexedDB, use the at
console.log(browsers[-1]); // undefined
console.log(browsers.at(0));
console.log(browsers.at(1));

// () can be used to access the index of the array in both positive and negative indexing. 
// The at() method is a new addition to JavaScript that allows you to access elements in an array using both positive and negative indices.
// [] can only be used for positive indexing. 