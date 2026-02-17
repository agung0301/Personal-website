document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.querySelector('#typing-text');

    if (typingElement) {
        new Typed('#typing-text', {
            strings: [
                'Frontend Developer.',
                'React Specialist.',
                'Full Stack Enthusiast.',
                'Innovation Strategist.',
                'JavaScript Developer.',
                'Responsive Web Designer.'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '_',
            smartBackspace: true
        });
    }

    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: true,
        mobile: true
    });

    sr.reveal('.display-2', { origin: 'left', distance: '100px' });
    sr.reveal('.lead', { delay: 400 });
    sr.reveal('.photo-frame', { delay: 500, origin: 'right' });
    sr.reveal('.card', { interval: 200 });
    sr.reveal('#contact form', { delay: 200 });


    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const myForm = event.target;
            const formData = new FormData(myForm);

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                alert("Pesan berhasil dikirim! Makasih ya Gung.");
                myForm.reset(); 
            })
            .catch(error => alert("Waduh, ada error: " + error));
        });
    }

    const dot = document.getElementById('cursor-dot');
    const outline = document.getElementById('cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        dot.style.left = `${posX}px`;
        dot.style.top = `${posY}px`;

        outline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    const interactiveElements = document.querySelectorAll('a, button, .card, input, textarea');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            dot.classList.add('cursor-hover-dot');
            outline.classList.add('cursor-hover-outline');
        });
        el.addEventListener('mouseleave', () => {
            dot.classList.remove('cursor-hover-dot');
            outline.classList.remove('cursor-hover-outline');
        });
    });
});
