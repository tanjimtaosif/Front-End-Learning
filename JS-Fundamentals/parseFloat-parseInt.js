var num1 = "30.55";
var num2 = 20.55;
// console.log(parseFloat(num1+num2)); // It will show the sum with float value
// console.log(parseInt(num1+num2)); // It will show the sum without float value
var sum = parseFloat(parseFloat(num1)+num2); // Here if we store our number as string we can convert the string number to numeric data type by using parseFloat or ParseInt
console.log(sum);
