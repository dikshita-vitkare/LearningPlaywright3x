//   *
//  ***
// ***** 

let n = 3;

for(let i=1; i<=n; i++){
let row = "";
    for(let j=1; j<=n-i; j++){
        row += " ";
    }
    for(let s=1; s<=2*i-1; s++){
        row = row + "*";
    }
    console.log(row);
}