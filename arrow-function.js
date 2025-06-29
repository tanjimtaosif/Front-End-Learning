const hello = () => {
    console.log("Hello There");
}

hello();

// 1. Concise syntax

let sum = (a, b) => a + b;
console.log(sum(12, 34));

//2. deal with objects
let objreturn = () => ({ name: "smith" }); //it doesn't directly return objects 
console.log(objreturn().name);

// 3. Deal with this keyword
let thiskey = () => this;
console.log(thiskey());

//4. Getting arguments
let arg = (...arguments) => {
    console.log(arguments)
}

arg(4, 3, 5, 32);


const test = (a, b) => {
    return a + b
}
test();

function test1(a, b) {
    return a + b
}
test1()