document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Create mailto link
    const mailtoLink = `mailto:khushisingh7205@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Display thank you message
    document.getElementById('thankyou-message').style.display = 'block';

    // Optionally clear the form
    document.getElementById('contact-form').reset();
});
