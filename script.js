document.addEventListener('DOMContentLoaded', function() {
    // Sticky Navbar on Scroll
    const navbar = document.querySelector('.glass-navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu when a link is clicked
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // Update active link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add animation to navbar items on page load
    setTimeout(() => {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(-20px)';
            item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        });
        
        // Add keyframes dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(-20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }, 100);
});

// Initialize particles.js if you want to use it
document.addEventListener('DOMContentLoaded', function() {
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    
    // Animate hero content on load
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
    
    // If using particles.js (uncomment and add particles.js library)
    /*
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 2,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 0.5
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
    }
    */
    
    // Scroll down button functionality
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});

// About Section Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when scrolling to about section
    const aboutSection = document.querySelector('.about-section');
    const profileCard = document.querySelector('.profile-card');
    const aboutContent = document.querySelector('.about-content');
    
    if (aboutSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animate profile card
                    if (profileCard) {
                        profileCard.style.opacity = '1';
                        profileCard.style.transform = 'translateY(0)';
                    }
                    
                    // Animate about content
                    if (aboutContent) {
                        aboutContent.style.opacity = '1';
                        aboutContent.style.transform = 'translateY(0)';
                    }
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(aboutSection);
        
        // Set initial styles for animation
        if (profileCard) {
            profileCard.style.opacity = '0';
            profileCard.style.transform = 'translateY(30px)';
            profileCard.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        }
        
        if (aboutContent) {
            aboutContent.style.opacity = '0';
            aboutContent.style.transform = 'translateY(30px)';
            aboutContent.style.transition = 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s';
        }
    }
});
