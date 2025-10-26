// script.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("password_confirm");

  form.addEventListener("submit", function (event) {
    // Prevent default submit until validation passes
    event.preventDefault();

    // Basic form validation
    const requiredFields = form.querySelectorAll("[required]");
    let allFilled = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        allFilled = false;
        field.style.borderColor = "red";
      } else {
        field.style.borderColor = "";
      }
    });

    if (!allFilled) {
      alert("⚠️ Please fill in all required fields.");
      return;
    }

    // Password validation
    if (password.value !== confirmPassword.value) {
      alert("❌ Passwords do not match!");
      confirmPassword.style.borderColor = "red";
      return;
    } else {
      confirmPassword.style.borderColor = "";
    }

    if (!password.value.match(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/)) {
      alert("⚠️ Password must be at least 8 characters long and include both letters and numbers.");
      return;
    }

    // If everything is valid
    alert("✅ Registration successful!");
    form.submit(); // Proceed with submission
  });

  // Optional: live password match feedback
  confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value) {
      confirmPassword.style.borderColor = "orange";
    } else {
      confirmPassword.style.borderColor = "green";
    }
  });
});
