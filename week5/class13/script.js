let name = "amaka";
let age = 20;
let isStudent = true;
let hobbies = ["reading", "coding", "traveling"];
let student = {
  name: "amaka",
  age: 20,
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
};
let nullValue = null;
let undefinedValue;

function def() {}

def();

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof hobbies); // object
console.log(typeof student); // object
console.log(typeof nullValue); // object
console.log(typeof undefinedValue); // undefined

// const navigation  = document.getElementById("nav")

// const boxContainer = document.querySelector("body")

// const boxes = document.querySelectorAll(".box")

// console.log(navigation)

// console.log(boxContainer)

// console.log(boxes)

const pageHeading = document.querySelector("h1");

pageHeading.innerText = "We have changed the heading";

// pageHeading.innerHTML = "<span>We have changed the heading</span>"

// console.log(pageHeading)

pageHeading.style.color = "red";
pageHeading.style.fontSize = "50px";
pageHeading.classList.remove("heading");

const boxContainer = document.querySelector(".blog-title");

boxContainer.classList.add("heading");

const img = document.querySelector("img");

img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1682685790910-1e3f5c7d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8&auto=format&fit=crop&w=500&q=60",
);

console.log("Getting our img attributes", img.getAttribute("src"));