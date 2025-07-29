// Import GSAP for animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class PortfolioApp {
    constructor() {
        this.currentPage = 'home';
        this.isDarkMode = localStorage.getItem('darkMode') === 'true';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupDarkMode();
        this.setupAnimations();
        this.setupScrollAnimations();
        this.showPage('home');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.showPage(page);
            });
        });

        // Dark mode toggle
        document.getElementById('darkModeToggle').addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', () => {
            this.toggleMobileMenu();
        });

        // Contact form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            this.handleFormSubmit(e);
        });

        // Resume download
        document.querySelectorAll('.download-resume').forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadResume();
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }

    setupDarkMode() {
        if (this.isDarkMode) {
            document.documentElement.classList.add('dark');
        }
        this.updateDarkModeIcon();
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('darkMode', this.isDarkMode);
        this.updateDarkModeIcon();
    }

    updateDarkModeIcon() {
        const icon = document.querySelector('#darkModeToggle i');
        icon.className = this.isDarkMode ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleMobileMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        const isOpen = mobileMenu.classList.contains('translate-x-0');
        
        if (isOpen) {
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
        } else {
            mobileMenu.classList.add('translate-x-0');
            mobileMenu.classList.remove('translate-x-full');
        }
    }

    showPage(pageId) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });

        // Show selected page
        const targetPage = document.getElementById(`${pageId}Page`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            this.currentPage = pageId;
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-blue-600', 'dark:text-blue-400');
                link.classList.add('text-gray-600', 'dark:text-gray-300');
            });
            
            document.querySelectorAll(`[data-page="${pageId}"]`).forEach(link => {
                link.classList.add('text-blue-600', 'dark:text-blue-400');
                link.classList.remove('text-gray-600', 'dark:text-gray-300');
            });

            // Animate page entrance
            gsap.fromTo(targetPage, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
            );

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
        }
    }

    setupAnimations() {
        // Hero section animations
        const tl = gsap.timeline();
        
        tl.fromTo('.hero-title', 
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        )
        .fromTo('.hero-subtitle', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        )
        .fromTo('.hero-description', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.3"
        )
        .fromTo('.hero-buttons', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.3"
        );

        // Floating animation for hero image
        gsap.to('.hero-image', {
            y: -20,
            duration: 2,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
        });

        // Background particles animation
        this.createParticleAnimation();
    }

    setupScrollAnimations() {
        // Fade in animations for sections
        gsap.utils.toArray('.fade-in-section').forEach(section => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Project cards animation
        gsap.utils.toArray('.project-card').forEach((card, index) => {
            gsap.fromTo(card, 
                { opacity: 0, scale: 0.8, y: 50 },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: index * 0.2,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Skills animation
        gsap.utils.toArray('.skill-item').forEach((skill, index) => {
            gsap.fromTo(skill, 
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    ease: "power2.out",
                    delay: index * 0.1,
                    scrollTrigger: {
                        trigger: skill,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    }

    createParticleAnimation() {
        const particlesContainer = document.querySelector('.particles');
        if (!particlesContainer) return;

        // Create floating particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full opacity-20';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particlesContainer.appendChild(particle);

            gsap.to(particle, {
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                duration: Math.random() * 10 + 10,
                ease: "none",
                repeat: -1,
                yoyo: true
            });
        }
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        this.showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
        e.target.reset();
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white max-w-sm ${
            type === 'success' ? 'bg-green-600' : 
            type === 'error' ? 'bg-red-600' : 'bg-blue-600'
        }`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        gsap.fromTo(notification, 
            { opacity: 0, x: 100 },
            { opacity: 1, x: 0, duration: 0.5 }
        );
        
        setTimeout(() => {
            gsap.to(notification, {
                opacity: 0,
                x: 100,
                duration: 0.5,
                onComplete: () => notification.remove()
            });
        }, 5000);
    }

    downloadResume() {
        // Create a dummy resume download
        const link = document.createElement('a');
        link.href = '#';
        link.download = 'Harshit_Yadav_Resume.pdf';
        link.click();
        
        this.showNotification('Resume download started!', 'success');
    }

    // Voice interaction (optional feature)
    setupVoiceRecognition() {
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.continuous = false;
            recognition.interimResults = false;
            
            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                this.handleVoiceCommand(command);
            };
            
            document.getElementById('voiceBtn')?.addEventListener('click', () => {
                recognition.start();
            });
        }
    }

    handleVoiceCommand(command) {
        if (command.includes('home')) {
            this.showPage('home');
        } else if (command.includes('about')) {
            this.showPage('about');
        } else if (command.includes('projects')) {
            this.showPage('projects');
        } else if (command.includes('contact')) {
            this.showPage('contact');
        } else if (command.includes('dark mode')) {
            this.toggleDarkMode();
        }
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});
