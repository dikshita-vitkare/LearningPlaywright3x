let scores = [45, 82, 91, 60, 73];

// Map is generally used whenever we want to 
// transform the array into a new array of the same size. 

let result = scores.map(s => s>70 ? "Pass" : "Fail");
console.log(result);

// Filter

let passing = scores.filter(s => s >= 70);
console.log(passing);