// 1. Find the input box on the page
const myInput = document.getElementById("myInput");

// 2. What happens when you click INSIDE (Focus)
myInput.addEventListener("focus", function() {
    myInput.style.backgroundColor = "yellow";
});

// 3. What happens when you click OUTSIDE (Blur)
myInput.addEventListener("blur", function() {
    myInput.style.backgroundColor = "white";
});// 1. Grab the container holding the buttons
const container = document.getElementById("button-container");

// 2. Add one listener to that container
container.addEventListener("click", function(event) {
    
    // 3. Check if what we clicked was actually a button
    if (event.target.tagName === "BUTTON") {
        
        // 4. Alert the text inside the button we clicked
        alert("You clicked: " + event.target.innerText);
    }
});// 1. Get the button and the hidden div
const btn = document.getElementById("details-btn");
const details = document.getElementById("project-details");

// 2. Add the click event
btn.addEventListener("click", function() {
    
    // 3. Check if it is currently hidden
    if (details.style.display === "none") {
        details.style.display = "block";  // Show it
        btn.innerText = "Hide Details";   // Change the button text
    } else {
        details.style.display = "none";   // Hide it
        btn.innerText = "Show Details";   // Change text back
    }
});// 1. Grab the form and the feedback message area
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

// 2. Listen for the 'submit' event
contactForm.addEventListener("submit", function(event) {
    // Grab the current values from the boxes
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;

    // 3. Start by clearing any old error messages
    feedback.innerText = "";

    // 4. Check the Name
    if (nameValue === "") {
        event.preventDefault(); // Stop the form from sending!
        feedback.innerText = "Please enter your name.";
        return;
    }

    // 5. Check the Email (looking for the @ symbol)
    if (!emailValue.includes("@")) {
        event.preventDefault(); // Stop the form from sending!
        feedback.innerText = "Please enter a valid email address.";
        return;
    }

    // If everything is fine, let the user know!
   // If everything is fine, clear the error message and show success!
    feedback.innerText = ""; 
    alert("Form submitted successfully!"); alert("Form submitted successfully!");
});