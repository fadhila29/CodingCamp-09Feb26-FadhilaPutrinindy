welcomeMessage()

function welcomeMessage() {
    //Show Popup
    let name = prompt("Welcome to My Personal Website! Please enter your name:");

    //Validation
   if (name == null || name.trim() === "") {
    // If user cancels or enters an empty name, set a default name
        name = "Guest";
    }

    //Display Welcome Message
    document.getElementById("welcome-speech").innerHTML = `Hello, ${name}! Welcome to My Personal Website!`;
}

function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    let errorMessage = "";
    if (name === "") {
        errorMessage += "Name is required.\n";
    }           
    if (email === "") {
        errorMessage += "Email is required.\n";
    } else if (!isValidEmail(email)) {
        errorMessage += "Please enter a valid email address.\n";
    }
    if (message === "") {
        errorMessage += "Message is required.\n";
    }
    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
// Add event listener to the form submit button
document.getElementById("message-us-page").addEventListener("submit", function(event) {
    if (validateForm()) {
        event.preventDefault(); // Prevent form submission if validation passes
        document.getElementById("message-us-page").innerHTML = "Thank you, your message has been sent!";
    } else {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

