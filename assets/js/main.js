// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

function highlightNavigation() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavigation);
window.addEventListener('load', highlightNavigation);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // You can add your form submission logic here
        // For now, we'll just show an alert
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        this.reset();
    });
}

// Counter animation for stats
const counters = document.querySelectorAll('.stat-number');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const init = +counter.innerText;
    const increment = target / speed;

    if (init < target) {
        counter.innerText = Math.ceil(init + increment);
        setTimeout(() => animateCounter(counter), 10);
    } else {
        counter.innerText = target;
    }
};

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            animateCounter(counter);
            counterObserver.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Download CV functionality
const downloadBtn = document.querySelector('.btn-custom-primary');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        // Add your CV download logic here
        alert('CV download functionality to be implemented. You can link to your actual CV file here.');
    });
}
