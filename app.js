const form = document.querySelector("#my-form");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", validateForm);

function validateForm(e) {
    if (emailInput.value === "") {
        showError("Please enter a valid email address");
    } else {
        showInfo("Thank you for subscribing to our newsletter!");
    }
    
    e.preventDefault();
}

// Show Error
function showError(msg) {
    const div = document.querySelector(".form");

    // Create Element
    const p = document.createElement("p");
    p.className = "error-msg";
    p.style.color = "red";
    // Create text and append to div
    const text = document.createTextNode(msg);
    p.appendChild(text);

    div.insertBefore(p, form);

    // Clear error after 3 secs
    setTimeout(clearMessage, 4000);
}

// show Info
function showInfo(msg) {
    const div = document.querySelector(".form");

    // Create Element
    const p = document.createElement("p");
    p.className = "error-msg";
    p.style.color = "green";
    // Create text and append to div
    const text = document.createTextNode(msg);
    // text.style.color = "red";
    p.appendChild(text);

    div.insertBefore(p, form);

    // Clear error after 3 secs
    setTimeout(clearMessage, 4000);
}

// Clear message
function clearMessage() {
    document.querySelector(".error-msg").remove();
}