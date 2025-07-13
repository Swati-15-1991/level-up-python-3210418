// Portfolio Website JavaScript

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link highlighting
  function highlightActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Navbar background change on scroll
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(255, 255, 255, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.background = 'rgba(255, 255, 255, 0.95)';
      navbar.style.boxShadow = 'none';
    }
  }

  // Skill bar animation
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        const percentage = bar.getAttribute('data-percentage');
        bar.style.width = percentage + '%';
        bar.classList.add('animated');
      }
    });
  }

  // Fade in animation for sections
  function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.8) {
        element.classList.add('visible');
      }
    });
  }

  // Counter animation for statistics
  function animateCounters() {
    const counters = document.querySelectorAll('.stat h3');

    counters.forEach(counter => {
      const rect = counter.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && !counter.classList.contains('animated')) {
        counter.classList.add('animated');
        const target = parseInt(counter.textContent);
        const increment = target / 100;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + '+';
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + '+';
          }
        }, 20);
      }
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !subject || !message) {
      showNotification('Please fill in all fields.', 'error');
      return;
    }

    if (!isValidEmail(email)) {
      showNotification('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission
    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
    contactForm.reset();

    // In a real application, you would send the data to a server here
    console.log('Form submitted:', { name, email, subject, message });
  });

  // Email validation function
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Notification system
  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            border-radius: 5px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            ${type === 'success' ? 'background: #27ae60;' : 'background: #e74c3c;'}
        `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Hide notification after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(400px)';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);
  }

  // Typing animation for hero text
  function typeWriter() {
    const text = "Full Stack Developer";
    const element = document.querySelector('.hero-subtitle');
    let i = 0;

    element.textContent = '';

    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    }

    type();
  }

  // Parallax effect for hero section
  function parallaxEffect() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;

    hero.style.transform = `translateY(${rate}px)`;
  }

  // Project card hover effects
  function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
      });

      card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Initialize scroll-triggered animations
  function initScrollAnimations() {
    // Add fade-in classes to elements
    const animatedElements = document.querySelectorAll('.about-content, .timeline-item, .education-card, .skill-category, .project-card, .certification-card');

    animatedElements.forEach(element => {
      element.classList.add('fade-in');
    });
  }

  // Scroll event listener
  window.addEventListener('scroll', function () {
    highlightActiveLink();
    handleNavbarScroll();
    animateSkillBars();
    fadeInElements();
    animateCounters();

    // Throttle parallax effect for better performance
    if (window.innerWidth > 768) {
      requestAnimationFrame(parallaxEffect);
    }
  });

  // Initialize all functions
  function init() {
    typeWriter();
    initProjectCards();
    initScrollAnimations();

    // Trigger initial animations
    setTimeout(() => {
      animateSkillBars();
      fadeInElements();
    }, 500);
  }

  // Start the application
  init();

  // Resize event listener
  window.addEventListener('resize', function () {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    }
  });

  // Smooth page load
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
});

// Additional utility functions

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// Smooth reveal animation
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('active');
    }
  });
}

// Add reveal class to elements that need it
document.addEventListener('DOMContentLoaded', function () {
  const revealElements = document.querySelectorAll('.timeline-content, .project-card, .skill-category');
  revealElements.forEach(element => {
    element.classList.add('reveal');
  });
});

// Optimized scroll listener
window.addEventListener('scroll', throttle(reveal, 10));

// Back to top button (optional)
function createBackToTopButton() {
  const backToTop = document.createElement('button');
  backToTop.innerHTML = '↑';
  backToTop.className = 'back-to-top';
  backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: #3498db;
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
    `;

  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.opacity = '1';
      backToTop.style.visibility = 'visible';
    } else {
      backToTop.style.opacity = '0';
      backToTop.style.visibility = 'hidden';
    }
  });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);