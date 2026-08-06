// const name =  "amaka";
// let age = 20;

// console.log(age);
// // Reassigned the value of age
// age = 21;
// name = "Amaka";

const calculateTheAreaOfACircle = (radius) => {} //camel case
const is_student = true; //snake case
const _goals = ["reading", "coding", "traveling"]; //underscore case

// function function() {} //pascal casex
// console.log(age)


// Data types in JS
let name = "Tunmise"
let lastname = 'Johnson'
let age = 20;
let measurement = 20.5;
let isStudent = true;
let nullValue = null;
let undefinedValue;

// console.log(typeof name);
// console.log(typeof lastname);
// console.log(typeof age);
// console.log(typeof measurement);
// console.log(typeof isStudent);
// console.log(typeof nullValue);
// console.log(typeof undefinedValue);


let num1 = 10;
let num2 = 20;

let sum  = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let remin = num1 % num2;
let exp = num1 ** num2;

let areaOfCircle = (22/7) * (num1 ** 2);


// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(remin);
// console.log(exp);
// console.log(areaOfCircle);

// Increment and Decrement Operators
let count = 0
// count++
count--
// let decrement = count--

// console.log(count);

// Assignment Operators shortcuts
let x = 10;
let y = 20;

x = x + y;
x += y // x = x + y
y -= x // y = y - x
y *= x // y = y * x
y /= x // y = y / x
y %= x // y = y % x

// console.log(x);
// console.log(y);

// Comparison Operators
let a = 10;
let b = 20;
let c = '10';

// loose checking
// console.log(a == c);
// console.log(a != c);

// // strict checking
// console.log(a === c);
// console.log(a !== c);

let check_name = "tunmise" == "Tunmise";

// Greater than and less than operators
// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a <= b);

const student  = {
  fullName: "Tunmise",
  age: 20,
  grade: "A",
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    street: "123 Main St",
    city: "Lagos",
    state: "Lagos State"
  }
}

let qualifiedStudent = student.age <= 18 || student.grade === "A"

// (and &&) (or ||) (not !)
// all - true - true - false
// one - false  - true - falsetrue
// both - fasle - false - true

let lieAge = !(student.age <= 18)
let trueAge = (student.age <= 18)
console.log(lieAge);
console.log(trueAge);


console.log(name + " " + lastname);

console.log(`My name is ${name} ${lastname} and I am ${age} years old.`);

console.log("Score: " + 85);

console.log("50 " + 30)

// let result = (15 + 5) * 3/4;
// console.log(result);

let x = (15 + 5) * 3/4;

console.log(x);


