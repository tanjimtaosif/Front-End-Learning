// Conditional Statement

// If statement 
let age = 25;
let num = 10;
let mode = "dark";
let color;


// if (age > 18){
//     console.log("You can vote");

// }

// if (age < 18){
//     console.log("You can vote");

// }

// if (mode === "dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);

// if (age >= 18){
//     console.log("vote");
// }
// else{
//     console.log("not vote");
// }

if (num % 2 === 0) {
    console.log("This is even number");
}
else {
    console.log("This is odd");

}

// Syntax -> Rules

// else if 

if (mode === "dark") {
    color = "Black";
}
else if (mode === "blue"){
    color = "blue";
}
else if (mode === "pink"){
    color = "pink";
}
else{
    color= "white";
}

console.log(color);

// Ternary Operators -> condition? true output : false output
// age > 18 ? "adult" : "not adult" => here the condition will check if age is greater then 18 then it will print adult otherwise it will print not adult

let result = age>= 18? "adult" : "not adult";
console.log(result);
