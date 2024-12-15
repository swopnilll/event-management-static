console.log("auth js called");

document.querySelector(".form-button").addEventListener("click", function (e) {
  e.preventDefault();

  console.log("Inside Event");

  // Clear previous error messages
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  // Get form values
  const fullName = document.getElementById("full-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let isValid = true;

  // Validate full name
  if (!fullName) {
    document.getElementById("name-error").textContent =
      "Full Name is required.";
    isValid = false;
  }

  // Validate email
  if (!email) {
    document.getElementById("email-error").textContent =
      "E-mail Address is required.";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("email-error").textContent =
      "Enter a valid e-mail address.";
    isValid = false;
  }

  // Validate password
  if (!password) {
    document.getElementById("password-error").textContent =
      "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters long.";
    isValid = false;
  }

  if (isValid) {
    alert("Account created successfully!");
    document.getElementById("create-account-form").reset();
  }
});
