 function initNavbar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");
  const header = document.getElementById("header");

  // SAFETY CHECK
  if (!mobileMenuBtn || !navLinks || !header) {
    console.log("Navbar elements not found");
    return;
  }

  // Mobile menu toggle
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = mobileMenuBtn.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-times");

    document.body.style.overflow =
      navLinks.classList.contains("active") ? "hidden" : "auto";
  });

  // Close menu on link click
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  });

  // Hide / show header on scroll
  let lastScrollTop = 0;
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || 0;
    header.style.transform =
      scrollTop > lastScrollTop && scrollTop > 100
        ? "translateY(-100%)"
        : "translateY(0)";
    lastScrollTop = scrollTop;
  });

  // Active page highlight
  const currentPage = location.pathname.split("/").pop() || "index.html";
  navLinks.querySelectorAll("a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
  link.classList.add("active");
}

  });
}
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
        
        // // Mobile Menu Toggle
        // const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        // const navLinks = document.getElementById('navLinks');
        
        // mobileMenuBtn.addEventListener('click', () => {
        //     navLinks.classList.toggle('active');
        //     const icon = mobileMenuBtn.querySelector('i');
        //     if (navLinks.classList.contains('active')) {
        //         icon.classList.remove('fa-bars');
        //         icon.classList.add('fa-times');
        //         document.body.style.overflow = 'hidden';
        //     } else {
        //         icon.classList.remove('fa-times');
        //         icon.classList.add('fa-bars');
        //         document.body.style.overflow = 'auto';
        //     }
        // });
        
        // // Close mobile menu when clicking on a link
        // document.querySelectorAll('.nav-links a').forEach(link => {
        //     link.addEventListener('click', () => {
        //         navLinks.classList.remove('active');
        //         const icon = mobileMenuBtn.querySelector('i');
        //         icon.classList.remove('fa-times');
        //         icon.classList.add('fa-bars');
        //         document.body.style.overflow = 'auto';
        //     });
        // });
        
        // Header hide/show on scroll
        let lastScrollTop = 0;
        const header = document.getElementById('header');
        
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
        
        // Smooth scrolling for navigation links
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
        
        // Highlight current section in navigation
        const sections = document.querySelectorAll('section[id]');
        const navLinksItems = document.querySelectorAll('.nav-links a[href^="#"]');
        
        if (sections.length > 0 && navLinksItems.length > 0) {
            window.addEventListener('scroll', () => {
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (scrollY >= (sectionTop - 150)) {
                        current = section.getAttribute('id');
                    }
                });
        
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === current) {
                        link.classList.add('active');
                    }
                });
            });
        }
        
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
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
            // Add continuous pulse animation to logo
            const logoIcon = document.querySelector('.logo-icon');
            setInterval(() => {
                logoIcon.style.animation = 'none';
                setTimeout(() => {
                    logoIcon.style.animation = 'pulse 2s infinite';
                }, 10);
            }, 5000);
        });
        // Add hover effect to hero tags
        const heroTags = document.querySelectorAll('.tag');
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
        
        // // Header hide/show on scroll
        // let lastScrollTop = 0;
        // const header = document.getElementById('header');
        
        // window.addEventListener('scroll', () => {
        //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
        //     if (scrollTop > lastScrollTop && scrollTop > 100) {
        //         header.classList.add('hidden');
        //     } else {
        //         header.classList.remove('hidden');
        //     }
            
        //     lastScrollTop = scrollTop;
        // });
        
        // Initialize on load
        document.addEventListener('DOMContentLoaded', () => {
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
        });
   