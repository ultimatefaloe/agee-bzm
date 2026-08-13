const strDate = Date();
const objDate = new Date();

console.log(strDate)
console.log(objDate)

const dob = new Date("1990-01-01");
console.log(dob.getFullYear())
console.log(objDate.getFullYear())
console.log(objDate.getSeconds())

console.log(objDate.toLocaleDateString("en-US"))
console.log(objDate.toLocaleTimeString())

const start = new Date("1990-01-01");
const end = new Date();
const diff = end - start;
console.log(diff)
const days = diff / (365 * 24 * 60 * 60 * 1000);
console.log(Math.round(days))