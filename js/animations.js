// Reveal animations for sections
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Add subtle parallax effect
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.3;
                entry.target.style.transform = `translate3d(0, ${rate}px, 0)`;
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '-50px'
    });
    
    reveals.forEach(element => observer.observe(element));
}

window.addEventListener('scroll', reveal);
reveal(); // Initial check

// Add floating animation class to icons
document.querySelectorAll('.service-card i, .social-icon').forEach(icon => {
    icon.classList.add('floating');
});

// Theme switcher
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '🌙';
themeToggle.classList.add('theme-toggle');
themeToggle.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
`;

document.body.appendChild(themeToggle);

let isDark = false;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    if (isDark) {
        document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        themeToggle.innerHTML = '☀️';
    } else {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        themeToggle.innerHTML = '🌙';
    }
});