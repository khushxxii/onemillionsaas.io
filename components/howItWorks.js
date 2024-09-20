// components/howItWorks.js
export function renderHowItWorks() {
    const howItWorksHTML = `
        <section id="how-it-works">
            <div class="container">
                <h2>How It Works</h2>
                <ol>
                    <li>Buy the main link. Each time someone changes the link, the price increases by 20%.</li>
                    <li>Promote your product, service, or idea on the main page of MillionDollarSaaS.io.</li>
                    <li>Earn clicks and exposure. You can also resell the link for a higher price!</li>
                    <li>Additional features: analytics, SaaS tools, and promotional boosts (coming soon).</li>
                </ol>
            </div>
        </section>
    `;
    document.getElementById('main-content').innerHTML = howItWorksHTML;
}
