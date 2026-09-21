// let a = {status : "Pass"};
// console.log(a.status);
// console.log(a["status"]);

// keys are case sensitive.
// let a22 = { status: "pass", Status: "fail" };
// console.log(a22["status"]);
// console.log(a22["Status"]);

let a = { status: "pass" };
let b = a;  //Copy the reference
b.status = "fail";
console.log(a.status); //fail


let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);


const t_json = {
    "name": "pramod",
    "age": 10
};
console.log(t_json);

const t_js = {
    name: "pramod",
    age: 10
};
console.log(t_js);