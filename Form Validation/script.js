const firstName = document.getElementById("fname");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("Cpassword");
// const email = document.getElementById("email")
// const cemail = document.getElementById("cemail")
const form = document.getElementById("form");

const errorElement = document.getElementById("password-error");
const confirmedPasswordError = document.getElementById("confirmed-password-error");
const confirmedEmailError = document.getElementById("confirmed-email-error");

// Email Error Message



// Password Error Messages

form.addEventListener("submit", (e) => {
    let messages = []
    if (password.value.length <= 6) {
        messages.push("Password must be longer than 6 characters")
    }

    if (password.value.length >= 20) {
        messages.push("Password must not be longer than 20 characters")
    }
    
    if (password.value === "password") {
        messages.push("The password cannot be set as password")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

// Confimred Password Error Messages

form.addEventListener("submit", (e) => {
    let confirmedMessage = []
    
    if (confirmPassword.value.length !== password.value.length) {
        confirmedMessage.push("Password and Confirmed Password do not match")
    }

    if (confirmPassword.value === "password") {
        confirmedMessage.push("The password cannot be set as password")
    }

    if (confirmedMessage.length > 0) {
        e.preventDefault()
        confirmedPasswordError.innerText = confirmedMessage.join(', ')
    }
})