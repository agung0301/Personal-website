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
                    Swal.fire({
                        title: 'Message Sent!',
                        text: 'Terima kasih, pesan kamu sudah masuk ke radar saya.',
                        icon: 'success',
                        iconColor: '#2ecc71',
                        background: '#0a0a0a',
                        color: '#fff',
                        confirmButtonColor: '#2ecc71',
                        confirmButtonText: 'Oke dimengerti!',
                        backdrop: `rgba(46, 204, 113, 0.1) `
                    });
                    myForm.reset();
                })
                .catch(error => {
                    Swal.fire({
                        title: 'Signal Lost!',
                        text: 'Maaf, pesan kamu gagal masuk ke radar saya karena gangguan koneksi.',
                        icon: 'error',
                        iconColor: '#e74c3c', 
                        background: '#0a0a0a',
                        color: '#fff',
                        confirmButtonColor: '#e74c3c',
                        confirmButtonText: 'Coba Lagi!',
                        backdrop: `rgba(231, 76, 60, 0.1)`
                    });
                    console.error("Submission Error:", error);
                });
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
