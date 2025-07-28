// Portfolio JavaScript - Modern Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // GSAP Registration
    gsap.registerPlugin(ScrollTrigger);
    
    // Navigation functionality
    initNavigation();
    
    // Smooth scrolling and active link updates
    initSmoothScrolling();
    
    // Scroll animations
    initScrollAnimations();
    
    // Hero animations
    initHeroAnimations();
    
    // Contact form
    initContactForm();
    
    // Chatbot functionality
    initChatbot();
    
    // Typing animation
    initTypingAnimation();
    
    // Particle system
    initParticleSystem();
    
    // Stats counter
    initStatsCounter();
    
    // Tech stack hover effects
    initTechStackEffects();
    
    // Project hover effects
    initProjectEffects();
});

// Navigation Setup
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Smooth Scrolling and Active Links
function initSmoothScrolling() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Update active link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
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
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: targetSection,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1,
                scrollTo: "#about",
                ease: "power2.inOut"
            });
        });
    }
}

// Scroll Animations with GSAP
function initScrollAnimations() {
    // Fade in animations
    gsap.utils.toArray('.fade-in').forEach(element => {
        gsap.fromTo(element, 
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Section titles animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.fromTo(title,
            {
                opacity: 0,
                y: 30,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: title,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Timeline items animation
    gsap.utils.toArray('.timeline-item').forEach((item, index) => {
        const isEven = index % 2 === 0;
        
        gsap.fromTo(item,
            {
                opacity: 0,
                x: isEven ? -100 : 100,
                scale: 0.8
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.8,
                ease: "power2.out",
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach((card, index) => {
        gsap.fromTo(card,
            {
                opacity: 0,
                y: 50,
                scale: 0.9
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                delay: index * 0.1,
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
    
    // Tech stack items animation
    gsap.utils.toArray('.tech-item').forEach((item, index) => {
        gsap.fromTo(item,
            {
                opacity: 0,
                y: 30,
                scale: 0.8
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
                delay: index * 0.05,
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Hero Section Animations
function initHeroAnimations() {
    const heroTimeline = gsap.timeline();
    
    // Hero text animations
    heroTimeline
        .fromTo('.hero-title .greeting', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        .fromTo('.hero-title .name',
            { opacity: 0, x: -50, scale: 0.8 },
            { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" },
            "-=0.5"
        )
        .fromTo('.hero-title .role',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.3"
        )
        .fromTo('.hero-description',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.2"
        )
        .fromTo('.hero-buttons .btn',
            { opacity: 0, y: 30, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.2 },
            "-=0.2"
        );
    
    // Hero image animation
    gsap.fromTo('.hero-image',
        { opacity: 0, scale: 0.8, rotation: -10 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );
    
    // Profile image hover effect
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseenter', () => {
            gsap.to(profileImg, {
                scale: 1.05,
                rotation: 5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        profileImg.addEventListener('mouseleave', () => {
            gsap.to(profileImg, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    }
}

// Contact Form Functionality
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            
            // Show loading state
            submitBtn.innerHTML = '<div class="loading"></div> Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            
            try {
                // Simulate API call (replace with actual endpoint)
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
                submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
                
                // Reset form
                form.reset();
                
                // Show success animation
                gsap.fromTo(submitBtn, 
                    { scale: 1 },
                    { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1 }
                );
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
                
            } catch (error) {
                // Error handling
                submitBtn.innerHTML = '<i class="fas fa-exclamation"></i> Error! Try Again';
                submitBtn.style.background = 'linear-gradient(135deg, #f44336, #d32f2f)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }
        });
        
        // Form input animations
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, {
                    scale: 1.02,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
            
            input.addEventListener('blur', () => {
                gsap.to(input, {
                    scale: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            });
        });
    }
}

// Chatbot Functionality
function initChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbot = document.getElementById('chatbot');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');
    
    // Predefined responses
    const responses = {
        'hello': 'Hi there! How can I help you today?',
        'hi': 'Hello! What would you like to know about Ankit?',
        'experience': 'Ankit has 3+ years of experience in full-stack development, specializing in React, Node.js, and modern web technologies.',
        'skills': 'Ankit is skilled in React, Node.js, JavaScript, Python, MongoDB, AWS, Docker, and many other modern technologies.',
        'projects': 'You can check out Ankits amazing projects in the Projects section! He has built e-commerce platforms, task management apps, chat applications, and more.',
        'contact': 'You can reach Ankit through the contact form, email at ankit@example.com, or connect on LinkedIn and GitHub.',
        'resume': 'You can download Ankits resume by clicking the "Download Resume" button in the Hero section or About section.',
        'education': 'Ankit has a Bachelors degree in Computer Science and has been continuously learning new technologies.',
        'default': 'That\'s interesting! You can explore more about Ankit through the different sections of this portfolio, or feel free to contact him directly!'
    };
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.add('active');
        gsap.fromTo(chatbot, 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
    });
    
    // Close chatbot
    chatbotClose.addEventListener('click', () => {
        gsap.to(chatbot, {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                chatbot.classList.remove('active');
            }
        });
    });
    
    // Send message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';
        
        // Generate bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 1000);
    }
    
    // Add message to chat
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(`${sender}-message`);
        messageDiv.innerHTML = `<p>${message}</p>`;
        
        chatbotMessages.appendChild(messageDiv);
        
        // Animate message
        gsap.fromTo(messageDiv,
            { opacity: 0, y: 20, scale: 0.8 },
            { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "power2.out" }
        );
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Generate bot response
    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, response] of Object.entries(responses)) {
            if (key !== 'default' && lowerMessage.includes(key)) {
                return response;
            }
        }
        
        return responses.default;
    }
    
    // Event listeners
    chatbotSend.addEventListener('click', sendMessage);
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Typing Animation for Hero Title
function initTypingAnimation() {
    const roleElement = document.querySelector('.hero-title .role');
    if (roleElement) {
        const roles = ['Full Stack Developer', 'React Developer', 'Node.js Developer', 'Problem Solver'];
        let currentRoleIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        
        function typeRole() {
            const currentRole = roles[currentRoleIndex];
            
            if (isDeleting) {
                roleElement.textContent = currentRole.substring(0, currentCharIndex - 1);
                currentCharIndex--;
            } else {
                roleElement.textContent = currentRole.substring(0, currentCharIndex + 1);
                currentCharIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && currentCharIndex === currentRole.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentRoleIndex = (currentRoleIndex + 1) % roles.length;
                typeSpeed = 500; // Pause before typing next
            }
            
            setTimeout(typeRole, typeSpeed);
        }
        
        // Start typing animation after initial animation completes
        setTimeout(typeRole, 3000);
    }
}

// Particle System
function initParticleSystem() {
    const hero = document.querySelector('.hero-section');
    if (!hero) return;
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        createParticle();
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        hero.appendChild(particle);
        
        // Animate particle
        gsap.to(particle, {
            y: -100,
            opacity: 0,
            duration: Math.random() * 3 + 2,
            repeat: -1,
            delay: Math.random() * 2,
            ease: "none"
        });
        
        gsap.to(particle, {
            x: Math.random() * 200 - 100,
            duration: Math.random() * 4 + 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }
}

// Stats Counter Animation
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalNumber = parseInt(stat.textContent);
        
        gsap.fromTo(stat, 
            { textContent: 0 },
            {
                textContent: finalNumber,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                    trigger: stat,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
}

// Tech Stack Effects
function initTechStackEffects() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        const icon = item.querySelector('i');
        
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -10,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(icon, {
                rotation: 360,
                duration: 0.6,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Project Effects
function initProjectEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        const image = card.querySelector('.project-image img');
        
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(image, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            
            gsap.to(image, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// Utility Functions

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        gsap.to(window, {
            duration: 1,
            scrollTo: element,
            ease: "power2.inOut"
        });
    }
}

// Add loading animation to buttons
function addLoadingToButton(button, originalText) {
    button.innerHTML = '<div class="loading"></div> Loading...';
    button.disabled = true;
    
    return function resetButton() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Animate element on scroll
function animateOnScroll(element, animation) {
    gsap.fromTo(element, animation.from, {
        ...animation.to,
        scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Mouse parallax effect
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    // Parallax for hero animation
    const heroAnimation = document.querySelector('.hero-animation');
    if (heroAnimation) {
        gsap.to(heroAnimation, {
            x: (mouseX - 0.5) * 20,
            y: (mouseY - 0.5) * 20,
            duration: 1,
            ease: "power2.out"
        });
    }
    
    // Parallax for background elements
    const backgroundElements = document.querySelectorAll('.image-bg');
    backgroundElements.forEach(element => {
        gsap.to(element, {
            x: (mouseX - 0.5) * 10,
            y: (mouseY - 0.5) * 10,
            duration: 1,
            ease: "power2.out"
        });
    });
});

// Window resize handler
window.addEventListener('resize', () => {
    // Refresh ScrollTrigger on resize
    ScrollTrigger.refresh();
});

// Page visibility change handler
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations when page is not visible
        gsap.globalTimeline.pause();
    } else {
        // Resume animations when page becomes visible
        gsap.globalTimeline.resume();
    }
});

console.log('🚀 Portfolio loaded successfully!');
console.log('✨ All animations and interactions are ready!');
