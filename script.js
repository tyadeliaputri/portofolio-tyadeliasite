// Portfolio Website Interactive Features
document.addEventListener('DOMContentLoaded', function() {

    // Navigation functionality
    const navItems = document.querySelectorAll('nav li');
    const sections = document.querySelectorAll('.content-section');

    // Handle navigation clicks for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionName = this.getAttribute('data-section');

            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Scroll to the target section smoothly
            const targetSection = document.getElementById(sectionName);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Set initial active state
    const aboutNav = document.querySelector('[data-section="about"]');
    if (aboutNav) {
        aboutNav.classList.add('active');
    }

    // Contact form handler
    function handleContactForm(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', { name, email, subject, message });

        // Show success message
        alert('Thank you for your message! I will get back to you soon.');

        // Reset form
        form.reset();
    }



    // Social media handlers
    function openSocial(platform) {
        const urls = {
            linkedin: 'https://linkedin.com/in/adelia-putri',
            github: 'https://github.com/adelia-putri',
            instagram: 'https://instagram.com/adelia_putri',
            twitter: 'https://twitter.com/adelia_putri'
        };

        if (urls[platform]) {
            // In a real implementation, this would open the actual social media links
            alert(`Opening ${platform} profile...`);
            console.log(`Opening ${platform}: ${urls[platform]}`);
        }
    }

    // Smooth scroll for internal links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });

    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            header.style.backdropFilter = 'blur(100px)';
            header.style.padding = '20px 40px';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.padding = '40px 40px 0';
        }
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out forwards';
            }
        });
    }, observerOptions);

    // Observe all work items, certificate items, and other elements for animation
    document.addEventListener('DOMContentLoaded', function() {
        const animatedElements = document.querySelectorAll('.work-item, .certificate-item, .contact-item, .info-item, .trait, .feature-item');

        animatedElements.forEach(el => {
            observer.observe(el);
        });
    });

    // Project card interactions
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Add a subtle animation on click
            this.style.transform = 'translateY(-12px) scale(1.02)';
            setTimeout(() => {
                this.style.transform = 'translateY(-8px) scale(1)';
            }, 150);

            // You can add more functionality here like opening project details
            console.log('Project card clicked:', this.querySelector('h3').textContent);
        });

        // Add keyboard accessibility
        card.setAttribute('tabindex', '0');
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                this.click();
            }
        });
    });

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('#name').value;
            const email = this.querySelector('#email').value;
            const message = this.querySelector('#message').value;

            // Basic validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! I\'ll get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }



    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });



    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to return to top of page
        if (e.key === 'Escape') {
            navItems.forEach(nav => nav.classList.remove('active'));
            navItems[0].classList.add('active'); // Set first item as active

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    // Add loading animation to project cards
    const animateOnLoad = () => {
        projectCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    };

    // Initialize animations
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run initial animations
    setTimeout(animateOnLoad, 500);

    // Add resize handler for responsive adjustments
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            // Handle any resize-specific logic here
            console.log('Window resized');
        }, 250);
    });

    // Performance monitoring
    window.addEventListener('load', function() {
        console.log('Portfolio website loaded successfully');

        // Log performance metrics
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        }
    });

    // Add error handling for missing elements
    window.addEventListener('error', function(e) {
        console.error('JavaScript error:', e.error);
    });

    // Animate education cards on scroll
    function animateEducationCards() {
        const cards = document.querySelectorAll('.education-card');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 200);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            observer.observe(card);
        });
    }

    // Initialize education card animations
    animateEducationCards();

    console.log('Portfolio website JavaScript initialized');

    // Toggle PDF viewer visibility
    const togglePdfViewerBtn = document.getElementById('togglePdfViewer');
    const pdfViewerContainer = document.getElementById('pdfViewerContainer');

    if (togglePdfViewerBtn && pdfViewerContainer) {
        togglePdfViewerBtn.addEventListener('click', () => {
            if (pdfViewerContainer.style.display === 'none') {
                pdfViewerContainer.style.display = 'block';
                togglePdfViewerBtn.textContent = '📄 Sembunyikan CV';
            } else {
                pdfViewerContainer.style.display = 'none';
                togglePdfViewerBtn.textContent = '📄 Tampilkan CV';
            }
        });
    }
});
