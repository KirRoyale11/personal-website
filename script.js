const myForm = document.getElementyById("contactForm");

myForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
}

// const myForm = document.getElementById("contactForm");

// myForm.addEventListener("submit", handleSubmit);

// function handleSubmit(e) {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   formData.forEach((value, key) => {
//     console.log(`${key}: ${value}`);
//   });
// }
