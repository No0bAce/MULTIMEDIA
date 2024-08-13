document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling za Navigation Links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // provjera dal je link internal il ne (starta s  #)
            if (targetId.startsWith('#')) {
                e.preventDefault();  // preventDef samo za internale
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });

    // scrolling animacija za sekcije
    const sections = document.querySelectorAll('section');
    const observerOptions = {
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // fade in down animacija za header
    const header = document.querySelector('header');
    header.style.animation = `fadeInDown 1s ease-out forwards`;

    
});
