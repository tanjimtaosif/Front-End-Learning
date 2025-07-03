// console.log("Programming");
// console.log("Tanjim Mahtab");
// console.log("Lets Learn JavaScript");

// name = "Tony Stark";
// age = 24;
// price = 99;
// x = undefined;
// isFollow = false // Boolean
// console.log(x);

// JavaScript is Dynamically typed language 
// Variable should be meaningful
// Variable names are case sensitive
// We shouldn't give space in variable name
// In name of variable we can not start with numbers
// Also we can not use reserved words as variable
// camelCase is better practice to use in variable name 
// We have to use let, var, const to declare variables
// ES6 new standard from 2015, now we don't use var to declare var 
// By using let we cannot Redeclare Block Scoped variables, for one variable we have to use let single time, after this we can update the variable without declaring
// When we use const we can not update the value of the variable it will be constant
// When we use const ew have set a value for the variable otherwise we can not see the output
// {any code} => It called block 
// const pi = 3.1416;
// console.log(pi);

// fullName = "Tanjim mahtab"; // camelCase
// fullname = "Mahtab Taosif";

// console.log(fullName);

// {
//     let a = 5;
//     console.log(a);
// }

// {
//     let a = 4;
//     console.log(a); // here we can see we are declaring variable a again but iot didn't showed any error because these two variable belong s to different block 
// }

// There are two types of data types permeative and non-permeative
// Number, String, Boolean, Undefined, Null - (Object), BigInt, Symbol - Permeative
// Object - (Collection of values) [key: value;], Arrays

const student = {
    fullName: "Tanjim mahtab",
    age: 23,
    cgpa: 2.89,
    isPass: true,
}

student["age"] = student["age"] + 1; // by this we can update a value in object (We can object key only)
console.log(student.age);
console.log(student["fullName"])
console.log(student);
