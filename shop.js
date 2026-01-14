
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
        
        // Filter Courses
        const filterButtons = document.querySelectorAll('.filter-btn');
        const courseCards = document.querySelectorAll('.course-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                courseCards.forEach(card => {
                    if (filterValue === 'all') {
                        card.style.display = 'block';
                    } else {
                        const cardCategories = card.getAttribute('data-category');
                        if (cardCategories.includes(filterValue)) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    }
                });
            });
        });
        
        // FAQ Accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const icon = question.querySelector('i');
                
                // Toggle active class on answer
                answer.classList.toggle('active');
                
                // Rotate icon
                if (answer.classList.contains('active')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
                
                // Close other answers
                faqQuestions.forEach(otherQuestion => {
                    if (otherQuestion !== question) {
                        const otherAnswer = otherQuestion.nextElementSibling;
                        const otherIcon = otherQuestion.querySelector('i');
                        otherAnswer.classList.remove('active');
                        otherIcon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        });
        
        // Add to Cart Animation
        const addToCartButtons = document.querySelectorAll('.course-card .btn');
        
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
                this.style.pointerEvents = 'none';
                
                // Get course info
                const courseCard = this.closest('.course-card');
                const courseName = courseCard.querySelector('h3').textContent;
                const coursePrice = courseCard.querySelector('.course-price').textContent;
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-check"></i> Added!';
                    
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
                    successMsg.innerHTML = `
                        <h4 style="margin-bottom: 0.5rem;"><i class="fas fa-check-circle"></i> Added to Cart!</h4>
                        <p style="margin-bottom: 0.5rem;"><strong>${courseName}</strong></p>
                        <p style="margin-bottom: 0;">${coursePrice}</p>
                    `;
                    document.body.appendChild(successMsg);
                    
                    // Remove message after 3 seconds
                    setTimeout(() => {
                        successMsg.remove();
                        this.innerHTML = originalText;
                        this.style.pointerEvents = 'auto';
                    }, 3000);
                    
                }, 1000);
            });
        });
        
        // Play button functionality
        const playButtons = document.querySelectorAll('.play-btn');
        
        playButtons.forEach(button => {
            button.addEventListener('click', function() {
                const videoContainer = this.closest('.catalogue-video');
                const originalContent = videoContainer.innerHTML;
                
                // Show playing state
                videoContainer.innerHTML = `
                    <div style="position: relative; z-index: 2; color: white; text-align: center; padding: 2rem; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                        <i class="fas fa-volume-up" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary-yellow);"></i>
                        <h3 style="color: white; margin-bottom: 1rem;">Sample Lesson Playing</h3>
                        <p style="color: rgba(255,255,255,0.9);">Course preview content playing...</p>
                        <div style="width: 80%; max-width: 300px; height: 4px; background: rgba(255,255,255,0.2); margin: 2rem auto; border-radius: 2px;">
                            <div style="width: 40%; height: 100%; background: var(--gradient-yellow); border-radius: 2px;"></div>
                        </div>
                    </div>
                `;
                
                // Reset after 4 seconds
                setTimeout(() => {
                    videoContainer.innerHTML = originalContent;
                    // Re-add event listener
                    videoContainer.querySelector('.play-btn').addEventListener('click', arguments.callee);
                }, 4000);
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
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Add animation to course cards
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all course cards
            courseCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
            
            // Observe category cards
            const categoryCards = document.querySelectorAll('.category-card');
            categoryCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });
    