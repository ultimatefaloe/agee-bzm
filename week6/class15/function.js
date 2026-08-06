// function identifier(params){ //added params to the function
//   // instructions for the identifier function
// }

// identifier(value); // calling the function without any arguments

function add() {
  let x = 2;
  let y = 3;
  return x + y;
}

function addWParams(x, y) {
  return x + y;
}

const sum = add(); // calling the add function
// console.log(sum); // logging the result of the add function

const sumWithParams = addWParams(5, 10);
const sumWithParams2 = addWParams(198, 2861);
// console.log(sumWithParams);
// console.log(sumWithParams2);

function checkgrade(grade) {
  if (student.grade === "A") {
    return "Excellent grade!";
  } else if (student.grade === "B") {
    return "Good grade!";
  } else if (student.grade === "C") {
    return "Average grade.";
  } else {
    return "Needs improvement.";
  }
}

// Global scope variable
const student  = {
  fullName: "Tunmise",
  age: 12,
  grade: "B",
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    street: "123 Main St",
    city: "Lagos",
    state: "Lagos State"
  }
}

const myGrade = checkgrade(student.grade);
// console.log(myGrade);

function bioData(student) {
  if (!student.isStudent) {
    return "This is not a student, so I cannot provide their bio data.";
  }
  if (student.age <= 18) {
    return "This student is too young to provide bio data.";
  }

  return `Student Name: ${student.fullName}, Age: ${student.age}, Grade: ${student.grade}, Hobbies: ${student.hobbies.join(", ")}, Address: ${student.address.street}, ${student.address.city}, ${student.address.state}`;
}

const studentBioData = bioData(student);
// console.log(studentBioData);

// void function
function addToCart(item, quantity) {
  console.log(`Added ${quantity} of ${item} to the cart.`);
}

// addToCart("Apple", 5);
// addToCart("Banana", 3);

// Arrow function
const arrowFuction = () => {}; // this is how we create an arrow function, it is a shorter syntax for writing functions in JavaScript

const multiply = () => {
  let x = 5;
  let y = 10;
  return x * y;
}

// console.log(multiply()); // calling the multiply function and logging the result

const multiplyWithParams = (x, y) => {
  return x * y;
}
const mul = multiplyWithParams(5, 10);
// console.log(mul)

// console.log(name)

// Global scope variable
const name = "Tunmise";
const greet = (name) => {
  return `Hello, ${name}!`;
}

const blockGreeting = () => {
  // block scope variable
  const blockName = "Tunmise";
  const greeting = `Hello, ${blockName}!`;
  return greeting;
}

// console.log(name);
// console.log(blockName)


const divide = (x, y=9) => {
  if (y === 0) {
    return "Cannot divide by zero.";
  }
  return x / y;
}

const divisionResult = divide(10);
console.log(divisionResult);