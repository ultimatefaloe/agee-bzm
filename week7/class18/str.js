let name = "John Doe";

console.log(name.length); // Output: 8
console.log(name[6]);
console.log(name.at(-1));

// Case
console.log(name.toUpperCase());
console.log(name.toLowerCase());

const protocol = "http://app.acefre.com";
if (protocol.startsWith("https")) {
  console.log("Secure connection");
}

const email = "ultimate@gmail.com"
console.log("=======Checking email========");
console.log(email.includes("@"));
console.log("=======Checking email========");

// searching for a substring
const phone = "+234807643627";

switch (phone) {
  case phone.startsWith("+234"):
    console.log("Nigeria");
    break;
  case phone.startsWith("+1"):
    console.log("US");
    break;
  default:
    console.log("Unknown country");
}

console.log(name.indexOf("o"));
console.log(name.lastIndexOf("o"));

// Extracting
const text = "lorem text to be extract";
console.log(text.slice(5, 15));
console.log(text.slice(-8, -1));
console.log(text.substring(5, 15));

// replacing
console.log(text.replace("lorem", "Lorem ipsum"));
console.log(text.replaceAll("o", "0"));

// splitting
const fruits = "apple, banana, orange, mango";
console.log(fruits.split(","));
const fruit = " banana ";
console.log(fruit.trim());
console.log(fruit.trimStart());
console.log(fruit.trimEnd());

// padding
console.log(fruit.padStart(20, "*"));
console.log(fruit.padEnd(20, "*"));

const product = {
  name: "Laptop",
  price: 1000,
  description: "A high-end laptop",
};

console.log(product.name.toString().padStart(50, "*"));
console.log(product.price.toString().padStart(50, "*"));
console.log(product.description.toString().padStart(50, "*"));

const str = "Hello, World!";
console.log(str.repeat(2))

const studentName = "John Doe";
const studentScore = 85;
const studentGrade = studentScore >= 90 ? "A" : studentScore >= 80 ? "B" : studentScore >= 70 ? "C" : studentScore >= 60 ? "D" : "F";

const studentReportUI = `
    <div>
        <h2>${studentName}</h2>
        <p>Score: ${studentScore}</p>
        <p>Grade: ${studentGrade}</p>
    </div>
`;


// Regular Expressions

const Statement = "The quick brown fox jumps over the lazy dog. The dog barked.";

console.log(/cat/.test(Statement));


const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
console.log(emailRegex.test("user@example.com"))
// true
console.log(emailRegex.test("not-an-email"));
