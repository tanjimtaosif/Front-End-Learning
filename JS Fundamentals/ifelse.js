var name = 'Tanjim';
var age = 65;

if (age < 13) {
    console.log(name + " is a child.");
}
else if (age >= 13 && age <= 25) {
    console.log(name + " is young.");
}
else {
    console.log(name + " is old.");
    console.log("Wisdom comes with age!");
    console.log("Hope you're enjoying your golden years!");
}

// x = 2;
// y = 4;

// console.log(x === 2);

// // == -> Only check values
// // === -> Checks value and type also


//Number greater and equal 80=> print A+
//Number greater and equal 70=> print A 
//Number greater and equal 60=> print A- 
//Number greater and equal 50=> print B+
//Other Fail 

const number = 89;

if (number >= 80) {
    console.log("A+");
}
else if (number >= 70) {
    console.log("A");
}
else if (number >= 60) {
    console.log("A-");
}
else if (number >= 50) {
    console.log("B+");
}
else {
    console.log("Fail");

}