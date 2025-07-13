// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
  }
});

// Animate skill bars when they come into view
const observerOptions = {
  threshold: 0.7,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillBars = entry.target.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
    }
  });
}, observerOptions);

// Observe skills section
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  observer.observe(skillsSection);
}

// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.timeline-item, .project-card, .education-card, .certification-card');

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('fade-in-up');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// Contact form handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Show success message (in a real application, you would send this to a server)
    alert('Thank you for your message! I will get back to you soon.');

    // Reset form
    this.reset();
  });
}

// Typing animation for hero section
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.innerHTML = '';

  const timer = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};

// Initialize typing animation when page loads
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero-content h1');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
  }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Counter animation for statistics (if you want to add a stats section)
const animateCounter = (element, start, end, duration) => {
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / (end - start)));

  const timer = setInterval(() => {
    current += increment;
    element.textContent = current;

    if (current === end) {
      clearInterval(timer);
    }
  }, stepTime);
};

// Projects filter (if you want to add filtering functionality)
const filterProjects = (category) => {
  const projects = document.querySelectorAll('.project-card');

  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
      project.style.animation = 'fadeInUp 0.6s ease-out';
    } else {
      project.style.display = 'none';
    }
  });
};

// Dark mode toggle (optional feature)
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
};

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// Scroll to top button
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
  const scrollButton = document.querySelector('.scroll-to-top');
  if (scrollButton) {
    if (window.scrollY > 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }
  }
});

// Preloader (if you want to add a loading screen)
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

// Image lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove('lazy');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});

// Copy to clipboard functionality
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    // Show success message
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = 'Copied to clipboard!';
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3000);
  });
};

// Add event listeners for copy buttons (if you add them to contact info)
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const text = e.target.dataset.copy;
    copyToClipboard(text);
  });
});

// Smooth reveal animation for sections
const revealSections = () => {
  const sections = document.querySelectorAll('section');

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionVisible = 150;

    if (sectionTop < window.innerHeight - sectionVisible) {
      section.classList.add('section-visible');
    }
  });
};

window.addEventListener('scroll', revealSections);

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize animations
  animateOnScroll();
  revealSections();

  // Add smooth scrolling to all internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  console.log('Portfolio website initialized successfully!');
});