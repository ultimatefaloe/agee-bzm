// WOrking with for loop

// for (variable; condition; increment) {
//   instructions
// }


for (let i = 0; i <= 100; i++){
  if (i === 50){
    console.log("Halfway there!");
    continue;
  }
  console.log(i);
}

// for (let n = 100; n >= 0; n--){
//   console.log(n);
// }

// Working with while loop


let num = 0;


// while (num <= 100) {
//   console.log(num);
//   num++;
// }

let n = 100;
let is_student = false;

while (n >= 0 && is_student) {
  console.log(n);
  n--;
}


let itr = 1000;

// do {
//   console.log(itr);
//   itr++;
// } while (itr <= 100);