const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
const student = ["Alic", 26, true, ["Math", "Science", "History"], { name: "Alic", age: 26, isStudent: true }];

// console.log(fruits[0])
// console.log(fruits[4])
// console.log(student[4])
// console.log(student[2])

// console.log(student.length)

let index = student.length - 1
// console.log(student[index])
console.log(fruits)
// fruits[1] = "Blueberry"

// essential array method

// fruits.push("Fig")
// fruits.pop()
// fruits./unshift("Grapes")
// fruits.shift()
// console.log(fruits)

// const newFruits = fruits.slice(1, 3)
// console.log(newFruits)
// console.log(fruits)


// splice method
// fruits.splice(1, 2, "Grapes", "Honeydew")
// console.log(fruits)

// create an array of fruits
// log each item 
// get the last fruit in the array using length method
// using essential method to add a new fruit to the beginning of the array and remove the last fruit from the array
// using splice method to replace the second fruit in the array with a new fruit
// use slice method to create a new array with the first three fruits from the original array

// const allowRoles = ["admin", "editor", "user", "guest"];

// const user = {
//   name: "John Doe",
//   role: "vendor",
//   email: "guest@gamil.com"
// }

// const doesUserHasAccess = allowRoles.includes(user.role)

// if(doesUserHasAccess){
//   console.log('This user have access')
// }
// const numbers = [1, 2, 3, 4, 5];

// console.log(fruits.indexOf("Cherry"));

// function identifer(){
//   // instructions
// }

// const identifier = () => {}

// const fruit = fruits.find(fruit => fruit == "Cherry")
// console.log(fruit)

// const fruit = fruits.findIndex(fruit => fruit == "Cherry")
// console.log(fruit)

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];

// const combinedNum = num1.concat(num2)
const combinedNum = [...num1, ...num2]
// console.log(combinedNum)

// console.log(num1.join(", "))

// const name = "John Doe";
// console.log(name.split(" "))

// const phone = "123 456 7890";
// const phoneNumber = phone.split(" ").join("");
// console.log(phoneNumber)

// const unSort = [5, 3, 8, 1, 2];
// const sortedNum = unSort.sort((a, b) => b - a);
// console.log(sortedNum)

// const students = [
//   { name: "Alice", age: 26, isStudent: true },
//   { name: "Bob", age: 30, isStudent: false },
//   { name: "Charlie", age: 22, isStudent: true }
// ]

// // students.forEach(student => console.log(student.name))
// const studentAges = students.map(student=> student.age * 2)
// console.log(studentAges)


const products = [
  { name: "Laptop", price: 999.99, category: "Electronics" },
  { name: "Book", price: 19.99, category: "Education" },
  { name: "Shirt", price: 29.99, category: "Clothing" }
]

// const newProducts = products.filter(product => product.name.toLowerCase().includes("o"))
// console.log(newProducts)

const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0);
const total = products.reduce((acc, curr)=> acc + curr.price, 0)
console.log(total)

const average = total / products.length
console.log(average)