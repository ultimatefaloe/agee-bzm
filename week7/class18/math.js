const updateProductPrice = product.price / 9;
console.log(updateProductPrice.toFixed(2));
console.log(Math.round(updateProductPrice));
console.log(Math.round(111.6));
console.log(Math.ceil(111.1));
console.log(Math.floor(111.6));

console.log(Math.trunc(111.6));

const classDuration = "30m";
let stringNumber = "8091";

console.log(parseInt(classDuration)); // Output: 2
console.log(Number(classDuration)); // Output: NaN
console.log(10 + +"68");

console.log(Number.MAX_SAFE_INTEGER);

console.log(Math.max(1, 3, 2, 5, 10, 1, 37));

const power = 2 ** 3;
const pow = Math.pow(2, 3);
console.log(Math.PI);

let random = Math.random() * 100;
console.log(Math.round(random));
