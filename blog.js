
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
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Calculate appropriate offset based on screen size
                    const offset = window.innerWidth <= 768 ? 65 : 75;
                    window.scrollTo({
                        top: targetElement.offsetTop - offset,
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
        
        // Category filter function
        function filterCategory(category) {
            alert(`Filtering articles by category: ${category}\nIn a full implementation, this would filter the blog articles.`);
            // In a real implementation, this would filter articles by category
        }
        
        // Modern search functionality
        const searchInput = document.querySelector('.search-input');
        const searchButton = document.querySelector('.search-box .btn');
        
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                alert(`Searching for: "${query}"\nThis would initiate a modern search in a full implementation.`);
                // In a real implementation, this would search articles
            }
        });
        
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
        
        // Modern button click animations
        document.querySelectorAll('.btn').forEach(button => {
            button.addEventListener('click', function(e) {
                // Modern ripple effect
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
                ripple.style.animation = 'ripple 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
                
                // Modern subscribe functionality
                if (this.getAttribute('href') === '#subscribe' || this.textContent.includes('Subscribe')) {
                    e.preventDefault();
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                        // Modern notification
                        const notification = document.createElement('div');
                        notification.style.position = 'fixed';
                        notification.style.top = '100px';
                        notification.style.right = '20px';
                        notification.style.background = 'var(--gradient-yellow)';
                        notification.style.color = 'var(--dark-gray)';
                        notification.style.padding = '1.8rem 2.2rem';
                        notification.style.borderRadius = 'var(--border-radius)';
                        notification.style.boxShadow = 'var(--shadow-medium)';
                        notification.style.zIndex = '9999';
                        notification.style.maxWidth = '320px';
                        notification.style.transform = 'translateX(120%)';
                        notification.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                        notification.innerHTML = '<h4 style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle"></i> Successfully Subscribed!</h4><p style="margin: 0; font-size: 0.95rem;">Welcome to our modern learning community!</p>';
                        document.body.appendChild(notification);
                        
                        // Animate in
                        setTimeout(() => {
                            notification.style.transform = 'translateX(0)';
                        }, 10);
                        
                        // Remove after 3 seconds
                        setTimeout(() => {
                            notification.style.transform = 'translateX(120%)';
                            setTimeout(() => notification.remove(), 400);
                        }, 3000);
                    }, 1500);
                }
            });
        });
        
        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Add animation to blog badge
            const blogBadge = document.querySelector('.blog-badge');
            if (blogBadge) {
                setInterval(() => {
                    blogBadge.style.transform = 'scale(1.03)';
                    setTimeout(() => {
                        blogBadge.style.transform = 'scale(1)';
                    }, 300);
                }, 3000);
            }
            
            // Animate elements on scroll
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-on-scroll');
                    }
                });
            }, observerOptions);
            
            // Observe sections for animation
            document.querySelectorAll('.category-card, .featured-card, .latest-card, .expert-card').forEach(card => {
                observer.observe(card);
            });
        });
    