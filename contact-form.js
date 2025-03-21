// Initialize EmailJS with your user ID (replace 'YOUR_USER_ID' with your actual EmailJS user ID)

(function() {
    emailjs.init("siraganshantamma@gmail.com"); // Replace with your EmailJS User ID
})();

// Form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page


    // Get form values
    var fullName = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var mobileNumber = document.getElementById("mobile_number").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;


    // Send email with EmailJS
    emailjs.send("siraganshantamma@gmail.com", "siraganshantamma@gmail.com", {
        full_name: fullName,
        email: email,
        mobile_number: mobileNumber,
        subject: subject,
        message: message
    })

    .then(function(response) {
        console.log("Email sent successfully!", response);
        alert("Email sent successfully!");
    }, function(error) {
        console.log("Failed to send email.", error);
        alert("Failed to send email. Please try again later.");
    });
    
});
