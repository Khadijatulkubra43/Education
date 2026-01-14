
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
        
        // Button click animations
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
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
                
                // If it's a "#" link, show alert
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        alert('Thank you for your interest! In a real implementation, this would redirect to the appropriate page.');
                    }, 1500);
                }
            });
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
        
        // Header hide/show on scroll
        let lastScrollTop = 0;
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Add animation to the hero highlight
            const heroHighlight = document.querySelector('.highlight-text');
            if (heroHighlight) {
                setInterval(() => {
                    heroHighlight.style.transform = 'scale(1.02)';
                    setTimeout(() => {
                        heroHighlight.style.transform = 'scale(1)';
                    }, 300);
                }, 3000);
            }
            
            // Add pulse animation to logo
            const logoIcon = document.querySelector('.logo-icon');
            if (logoIcon) {
                setInterval(() => {
                    logoIcon.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        logoIcon.style.transform = 'scale(1)';
                    }, 300);
                }, 2000);
            }

            // Add click event to play button
            const playButton = document.querySelector('.play-button');
            if (playButton) {
                playButton.addEventListener('click', function() {
                    const videoTitle = document.querySelector('.video-title');
                    const originalText = videoTitle.innerHTML;
                    videoTitle.innerHTML = '<i class="fas fa-volume-up"></i> Playing: "Xin chào" (Hello)';
                    
                    this.innerHTML = '<i class="fas fa-pause"></i>';
                    this.style.animation = 'none';
                    
                    setTimeout(() => {
                        this.innerHTML = '<i class="fas fa-play"></i>';
                        videoTitle.innerHTML = originalText;
                        this.style.animation = 'pulsePlay 2s infinite';
                    }, 3000);
                });
            }
        });
    