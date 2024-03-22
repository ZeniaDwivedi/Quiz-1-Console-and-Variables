const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

const prompt = require('prompt-sync')();

let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));

let celsius = (fahrenheit - 32) * (5 / 9);

console.log("Equivalent temperature in Celsius: " + celsius.toFixed(2));


EXPLAINATION: To start, I imported the prompt-sync package, which allows me to actually use the command line to c user input.
We use prompt() to ask the user to input a temperature in Fahrenheit. To make sure it can accept decimal values, we use parseFloat() to convert the input to a floating-point number.
Using the formula (Fahrenheit - 32) * (5 / 9), the entered temperature in Fahrenheit is converted to Celsius.
Console.log() is used to display the comparable temperature in Celsius, and toFixed(2) is used to round the Celsius number to two decimal places.




//Program 2: Grade Calculator


const prompt = require('prompt-sync')();

let percentage = parseFloat(prompt("Enter percentage score: "));

let grade;
if (percentage >= 90) {
    grade = 'A';
} else if (percentage >= 80) {
    grade = 'B';
} else if (percentage >= 70) {
    grade = 'C';
} else if (percentage >= 60) {
    grade = 'D';
} else {
    grade = 'F';
}
console.log("Your grade is: " + grade);


//Program 3: Leap Year Checker

const prompt = require('prompt-sync')();
let year = parseInt(prompt("Enter a year: "));
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
if (isLeapYear) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


//Program 4: Largest Number Finder

const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let num3 = parseFloat(prompt("Enter third number: "));

let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}

console.log("The largest number is: " + largest);

