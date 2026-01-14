
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
        
        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Get submit button
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (in real implementation, this would be an AJAX call)
            setTimeout(() => {
                // Show success message
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'var(--accent-green)';
                
                // Create success notification
                const successMsg = document.createElement('div');
                successMsg.style.position = 'fixed';
                successMsg.style.top = '100px';
                successMsg.style.right = '20px';
                successMsg.style.background = 'var(--gradient-yellow)';
                successMsg.style.color = 'var(--dark-gray)';
                successMsg.style.padding = '1.5rem 2rem';
                successMsg.style.borderRadius = 'var(--border-radius)';
                successMsg.style.boxShadow = 'var(--shadow-medium)';
                successMsg.style.zIndex = '9999';
                successMsg.style.maxWidth = '350px';
                successMsg.innerHTML = `
                    <h4 style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle"></i> Thank You!</h4>
                    <p style="margin-bottom: 0.5rem;">Your message has been sent successfully.</p>
                    <p style="font-size: 0.9rem; margin-bottom: 0;"><i class="fas fa-clock"></i> We'll respond within 24 hours.</p>
                `;
                document.body.appendChild(successMsg);
                
                // Reset form
                contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    submitBtn.style.background = '';
                    
                    // Remove success message
                    successMsg.style.opacity = '0';
                    successMsg.style.transition = 'opacity 0.3s';
                    setTimeout(() => successMsg.remove(), 300);
                }, 3000);
                
            }, 1500);
        });
        
        // Add focus styles for accessibility
        const formInputs = document.querySelectorAll('.form-input, select, textarea');
        
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentElement.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', () => {
                input.parentElement.style.transform = 'translateY(0)';
            });
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
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
        
        // Add hover effect to info items
        const infoItems = document.querySelectorAll('.info-item');
        infoItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                const icon = item.querySelector('.info-icon');
                icon.style.background = 'var(--gradient-yellow)';
                icon.style.transform = 'scale(1.1)';
            });
            
            item.addEventListener('mouseleave', () => {
                const icon = item.querySelector('.info-icon');
                icon.style.background = 'var(--light-yellow)';
                icon.style.transform = 'scale(1)';
            });
        });
        
        // Add typing animation to form labels (optional)
        const formLabels = document.querySelectorAll('.form-label');
        formLabels.forEach(label => {
            label.style.opacity = '0';
            label.style.transform = 'translateX(-10px)';
            label.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        });
        
        // Initialize animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate form labels
                    if (entry.target.classList.contains('form-group')) {
                        const label = entry.target.querySelector('.form-label');
                        label.style.opacity = '1';
                        label.style.transform = 'translateX(0)';
                    }
                    
                    // Animate cards
                    if (entry.target.classList.contains('purpose-card') || 
                        entry.target.classList.contains('design-feature') ||
                        entry.target.classList.contains('assistance-item') ||
                        entry.target.classList.contains('trust-item')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        }, observerOptions);
        
        // Observe elements
        document.querySelectorAll('.form-group, .purpose-card, .design-feature, .assistance-item, .trust-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
        
        // Phone number formatting
        const phoneLink = document.querySelector('a[href^="tel:"]');
        if (phoneLink) {
            phoneLink.addEventListener('click', function(e) {
                // Show confirmation for better UX
                if (confirm('Would you like to call our support line?')) {
                    // Proceed with call
                } else {
                    e.preventDefault();
                }
            });
        }
    