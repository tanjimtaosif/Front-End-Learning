// alert("hello!"); // single time message

// let num = prompt("Enter a number");

// if (num % 5 === 0) {
//     console.log(num, "Is multiple of 5");

// } else {
//     console.log("Not multiple of 5");
// }

let score = 75;

let grade;

if (score >= 90 && score <= 100) {
    grade = 'A';
}
else if (score >= 70 && score <= 89) {
    grade = 'B';
}
else if (score >= 60 && score <= 69) {
    grade = 'C';
} else if (score >= 50 && score <= 59) {
    grade = 'D';
} else {
    grade = 'F You should study hard';
}

console.log("According ton your score, your grade is :", grade);
