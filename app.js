const form = document.querySelector("#my-form");
const emailInput = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");
const hamburger = document.querySelector(".hamburger");
const navUl = document.querySelector(".nav-ul");

form.addEventListener("submit", validateForm);
hamburger.addEventListener("click", menuBar);

function validateForm(e) {
    if (emailInput.value === "") {
        showInfo("Please enter a valid email address", "red");
    } else {
        showInfo("Thank you for subscribing to our newsletter!", "green");
    }

    e.preventDefault();
}

// Show Info
function showInfo(msg, color) {
    errorMsg.textContent = msg;
    errorMsg.style.color = color;
    emailInput.value = "";

    // Clear message after 3 secs
    setTimeout(clearMessage, 3000);
}

// Clear message
function clearMessage() {
    document.querySelector(".error-msg").textContent = "";
}

// hamburger
function menuBar() {
    navUl.classList.toggle("show");
}