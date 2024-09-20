import { renderHeader } from './components/header.js';
import { renderFooter } from './components/footer.js';
import { renderCurrentLink } from 'components/currentLink.js';
import { renderHowItWorks } from './components/howItWorks.js';
import { renderPreviousLinks } from 'components/previousLinks.js';

document.addEventListener('DOMContentLoaded', function () {
    renderHeader();  // Header is rendered on every page
    renderFooter();  // Footer is rendered on every page
    
    // Check the URL or active page and render appropriate components
    const path = window.location.pathname;
    
    if (path.includes('index.html')) {
        renderCurrentLink();  // Load current link on the homepage
    } else if (path.includes('about.html')) {
        renderHowItWorks();  // Load "How it Works" on the About page
    } else if (path.includes('form.html')) {
        // Contact form or any additional logic for form page can go here
        renderPreviousLinks();  // Placeholder: Adjust based on content
    }
});
