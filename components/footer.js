// components/footer.js
export function renderFooter() {
    const footerHTML = `
        <footer>
            <div class="container">
                <p>&copy; 2024 MillionDollarSaaS.io | All Rights Reserved</p>
                <ul>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
