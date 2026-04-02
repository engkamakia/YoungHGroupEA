document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('nav-scrolled');
        } else {
            nav.classList.remove('nav-scrolled');
        }
    });

    // Mobile menu toggle
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    // Intersection Observer for reveal animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .service-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
});
