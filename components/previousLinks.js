// components/previousLinks.js
export function renderPreviousLinks() {
    const previousLinksHTML = `
        <section id="previous-links">
            <div class="container">
                <h2>Previous Links</h2>
                <ul id="link-history">
                    <li>https://prevexample1.com - Sold for $75</li>
                    <li>https://prevexample2.com - Sold for $60</li>
                    <li>https://prevexample3.com - Sold for $50</li>
                </ul>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = previousLinksHTML;
}
