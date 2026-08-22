document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const navBackdrop = document.getElementById('navBackdrop');
    const contactForm = document.getElementById('contactForm');
    const body = document.body;

    function toggleMenu() {
        const isOpen = navLinks.classList.contains('active');
        navToggle.classList.toggle('active', !isOpen);
        navLinks.classList.toggle('active', !isOpen);
        navBackdrop.classList.toggle('active', !isOpen);
        body.classList.toggle('menu-open', !isOpen);
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        navBackdrop.classList.remove('active');
        body.classList.remove('menu-open');
    }

    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    if (navBackdrop) {
        navBackdrop.addEventListener('click', closeMenu);
    }

    document.querySelectorAll('.nav-item').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Message Sent!';
            btn.style.backgroundColor = '#10b981';
            contactForm.reset();

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        });
    }
});
