// components/currentLink.js
export function renderCurrentLink() {
    const currentLinkHTML = `
        <section id="current-link">
            <div class="container">
                <h2>Current Featured Link</h2>
                <p id="featured-link">https://example.com</p>
                <p>Purchased for: <span id="price">$100</span></p>
                <p>Clicks: <span id="click-count">150</span></p>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = currentLinkHTML;
}
