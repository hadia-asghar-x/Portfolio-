const currentYear = document.getElementById('year');
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

const navLinks = [...document.querySelectorAll('.site-nav a')];
const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 120;
    let activeSectionId = '';

    sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
            activeSectionId = section.id;
        }
    });

    navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeSectionId}`;
        link.classList.toggle('active', isActive);
    });
});

const feedbackForm = document.getElementById('feedbackForm');
const feedbackStatus = document.getElementById('feedbackStatus');

if (feedbackForm && feedbackStatus) {
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();
        feedbackStatus.textContent = 'Thank you for your feedback. Your message has been received.';
        feedbackForm.reset();
    });
}
