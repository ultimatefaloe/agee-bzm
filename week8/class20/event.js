const button  = document.getElementById('btn')

// button.addEventListener(eventType, callbackFunction)

button.addEventListener("click", ()=> {
  console.log("Button clicked!");
})

const form = document.getElementById('contact-form')

form.addEventListener('submit', (event) =>{
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const formData = {
    name,
    email,
    message
  }

  console.log(formData);
  
})

const mouseTrack = document.getElementById('mouse-track');

document.body.addEventListener('mousemove', (event) => {
  const x = event.clientX;
  const y = event.clientY;

  mouseTrack.textContent = `Mouse Position: X: ${x}, Y: ${y}`;
})