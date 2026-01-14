
        // Create animated background elements
        const animatedBg = document.getElementById('animatedBg');
        for (let i = 0; i < 20; i++) {
            const element = document.createElement('div');
            element.classList.add('floating-element');
            
            const size = Math.random() * 120 + 50;
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
            element.style.background = i % 3 === 0 ? 'var(--primary-yellow)' : 
                                     i % 3 === 1 ? 'var(--secondary-yellow)' : 
                                     'var(--accent-blue)';
            
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
        
        // Progress Bar
        const progressBar = document.getElementById('progressBar');
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + '%';
        });
        
        // Preview Play Button
        const previewPlay = document.getElementById('previewPlay');
        if (previewPlay) {
            previewPlay.addEventListener('click', function() {
                const videoContainer = this.closest('.preview-video');
                const lessonTitle = document.querySelector('.preview-content h3');
                const originalTitle = lessonTitle.textContent;
                
                // Show playing state
                videoContainer.innerHTML = `
                    <div style="position: relative; z-index: 2; color: white; text-align: center; padding: 2rem; width: 100%;">
                        <i class="fas fa-volume-up" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-yellow);"></i>
                        <h3 style="color: white; margin-bottom: 1rem;">Playing: Basic Greetings Lesson</h3>
                        <p style="color: rgba(255,255,255,0.9);">Lesson audio playing: "Xin chào, tôi là..." (Hello, I am...)</p>
                        <div style="width: 80%; max-width: 400px; height: 4px; background: rgba(255,255,255,0.2); margin: 2rem auto; border-radius: 2px;">
                            <div style="width: 30%; height: 100%; background: var(--gradient-yellow); border-radius: 2px; transition: width 0.3s;"></div>
                        </div>
                        <p style="color: var(--primary-yellow); font-size: 0.9rem;">Sample lesson playing - In the full course, you'll have full video lessons</p>
                    </div>
                `;
                
                // Simulate progress
                const progressBar = videoContainer.querySelector('div > div > div');
                let progress = 30;
                const progressInterval = setInterval(() => {
                    progress += 2;
                    if (progress <= 100) {
                        progressBar.style.width = `${progress}%`;
                    } else {
                        clearInterval(progressInterval);
                    }
                }, 200);
                
                // Reset after 5 seconds
                setTimeout(() => {
                    videoContainer.innerHTML = `
                        <div class="preview-play" id="previewPlay">
                            <i class="fas fa-play"></i>
                        </div>
                    `;
                    lessonTitle.textContent = originalTitle;
                    
                    // Re-add event listener to new button
                    document.getElementById('previewPlay').addEventListener('click', arguments.callee);
                }, 5000);
            });
        }
        
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
                
                // If it's a "#" link that goes to pricing/enroll, show success message
                if (this.getAttribute('href') === '#pricing' || this.getAttribute('href') === '#enroll') {
                    e.preventDefault();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    this.style.pointerEvents = 'none';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        this.style.pointerEvents = 'auto';
                        
                        // Show success message
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
                        successMsg.style.maxWidth = '300px';
                        successMsg.style.animation = 'fadeIn 0.3s ease';
                        successMsg.innerHTML = '<h4><i class="fas fa-check-circle"></i> Success!</h4><p>You would be redirected to the checkout page in a real implementation.</p>';
                        document.body.appendChild(successMsg);
                        
                        setTimeout(() => {
                            successMsg.style.animation = 'fadeIn 0.3s ease reverse';
                            setTimeout(() => {
                                successMsg.remove();
                            }, 300);
                        }, 3000);
                    }, 1500);
                }
            });
        });
        
        // Scroll animation trigger
        function triggerAnimations() {
            const sections = document.querySelectorAll('section');
            const h2Elements = document.querySelectorAll('h2:not(.animated)');
            
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (sectionTop < windowHeight * 0.85) {
                    section.style.animation = 'fadeIn 0.8s ease forwards';
                }
            });
            
            h2Elements.forEach(h2 => {
                const h2Top = h2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (h2Top < windowHeight * 0.85) {
                    h2.classList.add('animated');
                    setTimeout(() => {
                        h2.classList.add('visible');
                    }, 300);
                }
            });
        }
        
        // Initialize animations on load
        document.addEventListener('DOMContentLoaded', () => {
            triggerAnimations();
            
            // Add the animated class to the first h2 to make it appear immediately
            const firstH2 = document.querySelector('h2');
            if (firstH2) {
                firstH2.classList.add('animated');
                setTimeout(() => {
                    firstH2.classList.add('visible');
                }, 100);
            }
            
            // Add animation to course badge
            const courseBadge = document.querySelector('.course-badge');
            if (courseBadge) {
                setInterval(() => {
                    courseBadge.style.transform = 'scale(1.05) rotate(1deg)';
                    setTimeout(() => {
                        courseBadge.style.transform = 'scale(1) rotate(0deg)';
                    }, 300);
                }, 3000);
            }
            
            // Add hover effect to all cards
            const cards = document.querySelectorAll('.feature-card, .learning-item, .benefit-card, .audience-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
            
            // Initialize stats counter animation
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                
                const updateNumber = () => {
                    if (current < target) {
                        current += increment;
                        stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                        setTimeout(updateNumber, 30);
                    } else {
                        stat.textContent = target + (stat.textContent.includes('+') ? '+' : '');
                    }
                };
                
                // Start counter when stat is in view
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            updateNumber();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(stat);
            });
        });
        
        // Add keyboard accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Add focus styles for accessibility
        document.querySelectorAll('a, button').forEach(element => {
            element.addEventListener('focus', () => {
                element.style.outline = '2px solid var(--primary-yellow)';
                element.style.outlineOffset = '3px';
            });
            
            element.addEventListener('blur', () => {
                element.style.outline = 'none';
            });
        });
    