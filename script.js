document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let isValid = true;

  if (name === "") {
    nameError.textContent = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    emailError.textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email.";
    isValid = false;
  }

  if (message === "") {
    messageError.textContent = "Message is required.";
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});
