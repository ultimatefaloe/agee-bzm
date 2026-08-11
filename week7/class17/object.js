// creating an object using object literal
const person = {
  name: "John",
  age: 30,
  greet: () => {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

// creating nested object
const student = {
  name: "Alice",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
  },
  subjects: ["Math", "Science", "History"],
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

// dot notation
// console.log(person.name)
person.greet();
// console.log(student.address.city)

// bracket notation
// console.log(student["subjects"][student.subjects.length - 1])

person.name = "ULTIMATE";
person.email = "ultimate@gmail.com";

delete person.greet;

// console.log(student.hasOwnProperty('address')) // alterfnative to hasOwnProperty
// console.log(person)

const calculation = {
  width: 10,
  height: 5,
  length: 20,
  area: function () {
    return this.width * this.height + this.length;
  },
};

const result = calculation.area();
// console.log(result) // Output: 50

const user = {
  name: "John Name",
  age: 25,
  email: "email@gamil.com",
  isAdmin: true,
  phone: "1234567890"
};

for (const key in user) {
  console.log(user[key]);
  // console.log(`${key}: ${user[key]}`);
}

// const keys = Object.keys(user)
// console.log(keys)

// const values = Object.values(user)
// console.log(values)

// Object.entries(user).forEach(([key, value]) => {
//   console.log(`${key}: ${value}`);
// })

const { name: username, age, isAdmin, email, phone = "0805162717288" } = user;
const { name, age: studentAge, address } = student;

// let name = user.name;
// // let age = user.age;
// // let isAdmin = user.isAdmin;
// // let email = user.email;

// let username = name;

console.log(phone)

const numbers = [1, 2, 3, 4, 5];
const [ , , third, ...restNum] = numbers;
console.log( third);

function createUser(user) {
  const {name, email } = user;
  console.log(`Name: ${name}, Email: ${email}`);
}

createUser(user);

const { name: unk, ...cleanUser} = user;
console.log(cleanUser)

const userDetails = {
  name: "John Doe",
  age: 30,
}

const merged = { ...userDetails, ...user };

console.log(merged)