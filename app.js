
    // Create animated background elements
    const animatedBg = document.getElementById('animatedBg');
    for (let i = 0; i < 15; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        const size = Math.random() * 100 + 50;
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const duration = Math.random() * 30 + 20;
        const delay = Math.random() * 10;
        
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${top}%`;
        element.style.left = `${left}%`;
        element.style.animationDuration = `${duration}s`;
        element.style.animationDelay = `${delay}s`;
        element.style.opacity = Math.random() * 0.05 + 0.02;
        
        animatedBg.appendChild(element);
    }
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            document.body.style.overflow = 'hidden';
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        });
    });
    
    // Header hide/show on scroll
    let lastScrollTop = 0;
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.classList.add('hidden');
        } else {
            // Scrolling up
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
        
        // Trigger animations on scroll
        triggerAnimations();
    });
    
    // Testimonial slider (if you still have testimonials)
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length > 0) {
        let currentTestimonial = 0;
        
        function showNextTestimonial() {
            testimonialCards[currentTestimonial].classList.remove('active');
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            testimonialCards[currentTestimonial].classList.add('active');
        }
        
        // Auto-rotate testimonials
        setInterval(showNextTestimonial, 5000);
        
        // Manual testimonial controls
        testimonialCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                testimonialCards[currentTestimonial].classList.remove('active');
                currentTestimonial = index;
                card.classList.add('active');
            });
        });
    }
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // For your new sections
                if (entry.target.classList.contains('value-item')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('benefit-item')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('focus-item')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('step-simple')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('expert-card')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('audience-item')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('tone-item')) {
                    entry.target.classList.add('visible');
                }
                
                // For existing sections if you still have them
                if (entry.target.classList.contains('step-card')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('course-card')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('instructor-card')) {
                    entry.target.classList.add('visible');
                }
                
                // Footer elements
                if (entry.target.classList.contains('footer-column')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('footer-logo')) {
                    entry.target.classList.add('visible');
                }
                
                if (entry.target.classList.contains('copyright')) {
                    entry.target.classList.add('visible');
                }
                
                // Headings
                if (entry.target.tagName === 'H2' && !entry.target.classList.contains('animated')) {
                    entry.target.classList.add('animated');
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements for animations - Update this list based on your actual sections
    document.querySelectorAll(
        '.value-item, .benefit-item, .focus-item, .step-simple, .expert-card, ' +
        '.audience-item, .tone-item, .step-card, .course-card, .instructor-card, ' +
        '.footer-column, .footer-logo, .copyright, h2'
    ).forEach(el => {
        observer.observe(el);
    });
    
    // Button click animations
    document.querySelectorAll('.btn').forEach(button => {
        if (button.getAttribute('href') === '#') {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
                
                // Loading state
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    alert('Thank you for your interest! In a real implementation, this would redirect to the signup page.');
                }, 1500);
            });
        } else {
            button.addEventListener('click', function(e) {
                // Ripple effect for all buttons
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'ripple 0.6s linear';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        }
    });
    
    // Add ripple animation
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't prevent default for CTA buttons that should show alerts
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                    document.body.style.overflow = 'auto';
                }
            }
        });
    });
    
    // Initialize animations on load
    function triggerAnimations() {
        // Already handled by intersection observer
    }
    
    // Trigger initial animations for elements in viewport
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(triggerAnimations, 500);
        
        // Add hover effect to hero tags
        const heroTags = document.querySelectorAll('.hero-tag');
        heroTags.forEach(tag => {
            tag.addEventListener('mouseenter', () => {
                tag.style.transform = 'translateY(-5px)';
            });
            
            tag.addEventListener('mouseleave', () => {
                tag.style.transform = 'translateY(0)';
            });
        });
        
        // Add animation to the hero highlight
        const heroHighlight = document.querySelector('.highlight');
        if (heroHighlight) {
            setInterval(() => {
                heroHighlight.style.transform = 'scale(1.02)';
                setTimeout(() => {
                    heroHighlight.style.transform = 'scale(1)';
                }, 300);
            }, 3000);
        }
    });
