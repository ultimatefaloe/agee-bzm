// Selecting Element by ID
const heading = document.getElementById("heading");
// console.log(heading);
// changing text content of the heading
// heading.textContent = 'Hello World';
heading.innerText = "Hello World Again";

// Selecting Element by Query Selector
const paragraph = document.querySelector("p");
// console.log(paragraph);

// Selecting all elements by Query Selector All
const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);

// selecting my sklls heading

const skills = document.querySelector(".my-skills");
console.log(skills);
// skills.classList.add('sub-heading');
// skills.classList.remove('my-skills');
skills.classList.replace("my-skills", "sub-heading");

const inputTypePassword = document.querySelector('input[type="password"]');
console.log(inputTypePassword);

// allParagraphs.forEach(p => console.log(p.textContent))

const arrPara = Array.from(allParagraphs);
// arrPara.map(p => console.log(p.textContent))

// const skillsSection = document.querySelector('.skills-section');

// skillsSection.innerHTML = `
//   <h2>This was changed</h2>
//   <p>This is my new paragraph text added using innerHTML</p>
// `

// skillsSection.style.color = 'lightblue';
// skillsSection.style.padding = '20px';
// skillsSection.style.borderRadius = '10px';

const documentBody = document.body;
documentBody.classList.add("body");

const image = document.querySelector("img");
// image.setAttribute("src", "../images/logo.png");
image.alt = "This is my new image";
image.src = "../images/logo.png"


const imageSrc = image.getAttribute("src");
console.log("Image Source: " + imageSrc);


const link = document.createElement("a");
link.href = "../project/project.html";
link.innerText = "Go to Project Page";
link.style.textDecoration = "none";
link.style.color = "blue";
link.style.fontSize = "20px";
link.style.padding = "10px";

documentBody.prepend(link);