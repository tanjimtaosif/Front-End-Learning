// Helps to iterate in String and Arrays

let str = "JavaScript";

let size = 0;
// here val is the value container of the string 
for (let val of str){
    console.log("Value =", val);
    size++;
}

console.log(size, "String size:", size);
