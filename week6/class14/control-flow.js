// Control flow

// let is_student = false;
const student  = {
  fullName: "Tunmise",
  age: 20,
  grade: "B",
  isStudent: true,
  hobbies: ["reading", "coding", "traveling"],
  address: {
    street: "123 Main St",
    city: "Lagos",
    state: "Lagos State"
  }
}

// if (student.age <= 18 && student.grade === "A") {
//     console.log("You are a student.");
// } else {
//   console.log("You are not a student.");
// }

// if (student.grade === "A") {
//     console.log("Excellent grade!");
// } else if (student.grade === "B") {
//     console.log("Good grade!");
// } else if (student.grade === "C") {
//     console.log("Average grade.");
// } else {
//     console.log("Needs improvement.");
// } 


// switch ( the value to be check ) {
//   cases we can check against
// }


switch (student.grade) {
  case "A":
    console.log("Excellent grade!");
    break;
  case "B":
    console.log("Good grade!");
    break;
  case "C":
    console.log("Average grade.");
    break;
  default:
    console.log("Needs improvement.");
}


