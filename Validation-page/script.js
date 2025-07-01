function validateName() {
    const name = document.getElementById("name").value.trim();
    const errorBox = document.getElementById("nameError");
    const errors = [];

    if (!name) {
        errorBox.innerHTML = "";
        return;
    }

    if (name[0] !== name[0].toUpperCase()) {
        errors.push("Must start with an uppercase letter");
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        errors.push("Only letters and spaces allowed");
    }

    errorBox.innerHTML = errors.map(e => "• " + e).join("<br>");
}

function validateEmail() {
    const email = document.getElementById("email").value.trim();
    const errorBox = document.getElementById("emailError");
    const errors = [];

    if (!email) {
        errorBox.innerHTML = "";
        return;
    }

    if (email !== email.toLowerCase()) {
        errors.push("Must be lowercase");
    }

    if (!email.endsWith("@gmail.com")) {
        errors.push("Must end with @gmail.com");
    }

    const namePart = email.split("@")[0];
    if (!/^[a-z0-9]+$/.test(namePart)) {
        errors.push("Only letters and numbers allowed before @");
    }

    errorBox.innerHTML = errors.map(e => "• " + e).join("<br>");
}

function validatePhone() {
    const phone = document.getElementById("phone").value.trim();
    const errorBox = document.getElementById("phoneError");
    const errors = [];

    if (!phone) {
        errorBox.innerHTML = "";
        return;
    }

    if (!phone.startsWith("+88")) {
        errors.push("Must start with +88");
    }

    const digits = phone.replace("+", "");
    if (!/^\d+$/.test(digits)) {
        errors.push("Only numeric digits allowed");
    }

    if (phone.length !== 14) {
        errors.push("Must be exactly 14 characters (+88 + 11 digits)");
    }

    errorBox.innerHTML = errors.map(e => "• " + e).join("<br>");
}

function validatePassword() {
    const password = document.getElementById("password").value;
    const errorBox = document.getElementById("passwordError");
    const errors = [];

    if (!password) {
        errorBox.innerHTML = "";
        return;
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("Must contain at least one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("Must contain at least one lowercase letter");
    }

    if (!/\d/.test(password)) {
        errors.push("Must contain at least one number");
    }

    if (!/[\W_]/.test(password)) {
        errors.push("Must contain at least one special character");
    }

    if (password.length < 6) {
        errors.push("Must be at least 6 characters long");
    }

    errorBox.innerHTML = errors.map(e => "• " + e).join("<br>");

    // Also revalidate retype password
    validateRetypePassword();
}

function validateRetypePassword() {
    const password = document.getElementById("password").value;
    const retype = document.getElementById("retypePassword").value;
    const errorBox = document.getElementById("retypeError");

    if (!retype) {
        errorBox.innerHTML = "";
        return;
    }

    if (password !== retype) {
        errorBox.innerHTML = "• Passwords do not match";
    } else {
        errorBox.innerHTML = "";
    }
}

function validateForm() {
    validateName();
    validateEmail();
    validatePhone();
    validatePassword();
    validateRetypePassword();

    const errors = document.querySelectorAll(".error");
    const hasError = Array.from(errors).some(e => e.textContent !== "");

    const msgBox = document.getElementById("message");
    msgBox.style.color = hasError ? "red" : "green";
    msgBox.innerHTML = hasError
        ? "Please fix the errors above before submitting."
        : "✅ Sign-in successful!";
}

function togglePassword(fieldId, toggleElem) {
    const input = document.getElementById(fieldId);
    const isPassword = input.type === "password";

    input.type = isPassword ? "text" : "password";
    toggleElem.textContent = isPassword ? "Hide" : "Show";
}
