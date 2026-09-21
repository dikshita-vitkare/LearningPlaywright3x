const user1 = {
    name : "Pramod",
    printName(){
        return this.name;   //function inside Object
    }
}

console.log(user1.printName());

const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(user);

// Accessing properties
console.log(user.name);
console.log(user["age"]);

// Adding/modifying properties
user.city = "NYC";
user.age = 31;

console.log(user);