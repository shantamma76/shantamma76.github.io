document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formStatus = document.getElementById('formStatus');

    if (email && message) {
        formStatus.textContent = 'Thank you! Your message has been sent.';
        formStatus.style.color = 'green';
        document.getElementById('contactForm').reset();
    } else {
        formStatus.textContent = 'Please fill out all fields.';
        formStatus.style.color = 'red';
    }
});
