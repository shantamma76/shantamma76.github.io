<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form values
    $full_name = htmlspecialchars($_POST['full_name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile_number = htmlspecialchars($_POST['mobile_number']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Email recipient (your email address)
    $to = "siragashantamma@example.com";  // Change this to your actual email address
    $subject = "New Contact Message: $subject";
    
    // Email body content
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Full Name: $full_name\n";
    $body .= "Email Address: $email\n";
    $body .= "Mobile Number: $mobile_number\n";
    $body .= "Message: $message\n";
    
    // Headers
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message.";
    }
}
?>
