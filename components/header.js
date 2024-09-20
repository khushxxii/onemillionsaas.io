// components/header.js
export function renderHeader() {
    const headerHTML = `
        <header>
            <div class="container">
                <h1>Welcome to MillionDollarSaaS.io</h1>
                <p>A unique internet experiment where users compete to own the main link. The price increases with every change!</p>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
}
