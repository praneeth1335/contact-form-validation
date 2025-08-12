const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const successMessage = document.getElementById("successMessage");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
  if (nameField.value.trim() === "") {
    nameError.textContent = "Name is required.";
    nameField.classList.add("invalid");
    nameField.classList.remove("valid");
    return false;
  } else {
    nameError.textContent = "";
    nameField.classList.add("valid");
    nameField.classList.remove("invalid");
    return true;
  }
}

function validateEmail() {
  if (emailField.value.trim() === "") {
    emailError.textContent = "Email is required.";
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    return false;
  } else if (!emailPattern.test(emailField.value.trim())) {
    emailError.textContent = "Invalid email format.";
    emailField.classList.add("invalid");
    emailField.classList.remove("valid");
    return false;
  } else {
    emailError.textContent = "";
    emailField.classList.add("valid");
    emailField.classList.remove("invalid");
    return true;
  }
}

function validateMessage() {
  if (messageField.value.trim() === "") {
    messageError.textContent = "Message is required.";
    messageField.classList.add("invalid");
    messageField.classList.remove("valid");
    return false;
  } else {
    messageError.textContent = "";
    messageField.classList.add("valid");
    messageField.classList.remove("invalid");
    return true;
  }
}

nameField.addEventListener("input", validateName);
emailField.addEventListener("input", validateEmail);
messageField.addEventListener("input", validateMessage);

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isMessageValid = validateMessage();

  if (isNameValid && isEmailValid && isMessageValid) {
    successMessage.textContent = "Form submitted successfully!";
    this.reset();
    nameField.classList.remove("valid");
    emailField.classList.remove("valid");
    messageField.classList.remove("valid");
  } else {
    successMessage.textContent = "";
  }
});
