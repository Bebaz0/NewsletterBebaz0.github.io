
let errorMsg = document.getElementById("error")
let emailform = document.getElementById("form")


// Add event listener for form submission
emailform.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("email");

    let emailValue = email.value;

    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (validRegex.test(emailValue)) {
        console.log("Email is valid:", emailValue);
        window.location.href = "success.html?email=" + encodeURIComponent(emailValue);
    

    } else {
        console.error("Invalid email:", emailValue);
        errorMsg.textContent = "Valid email required"
        email.style.border = "1px solid red";
        email.style.color = "red"
    }
});

