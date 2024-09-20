// components/form.js
export function renderContactForm() {
    const formHTML = `
        <div class="container">
            <h1>Contact Us</h1>
            <form id="contact-form">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" required><br><br>
                
                <label for="email">Email:</label><br>
                <input type="email" id="email" name="email" required><br><br>
                
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" required></textarea><br><br>
                
                <button type="submit" id="submit-button">Submit</button>
            </form>
            <p id="thankyou-message" style="display:none;">Thank you! Your message has been sent.</p>
        </div>
    `;
    document.getElementById('main-content').innerHTML = formHTML; // Correctly inject into main-content
}
