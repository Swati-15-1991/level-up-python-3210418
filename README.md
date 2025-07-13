# Professional Portfolio Website

A clean, modern, and fully responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your skills, experience, and projects to potential employers and clients.

## 🚀 Features

### Core Sections
- **Hero Section** - Eye-catching introduction with animated typing effect
- **About Me** - Personal introduction with animated statistics
- **Experience** - Interactive timeline showing work history
- **Education** - Clean cards displaying educational background
- **Skills** - Animated progress bars categorized by skill type
- **Projects** - Showcase of your work with GitHub links and live demos
- **Certifications** - Professional certifications and achievements
- **Contact** - Contact form with validation and social media links

### Interactive Elements
- **Responsive Design** - Works perfectly on all devices
- **Smooth Scrolling** - Elegant navigation between sections
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Animated Elements** - Scroll-triggered animations throughout
- **Typing Animation** - Dynamic text in hero section
- **Skill Bar Animation** - Progress bars animate when scrolled into view
- **Form Validation** - Contact form with proper validation
- **Back to Top Button** - Convenient navigation helper

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Customization Guide

### 1. Personal Information
Update the following in `index.html`:
- Change "John Doe" to your name in the navigation and hero section
- Update the hero description and subtitle
- Add your actual profile image URL
- Update contact information (email, phone, location)
- Add your social media links

### 2. Experience Section
Edit the timeline items in the experience section:
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <span class="timeline-date">Start Date - End Date</span>
        <p>Job description...</p>
        <ul>
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

### 3. Education Section
Update the education cards:
```html
<div class="education-card">
    <h3>Your Degree</h3>
    <h4>Institution Name</h4>
    <span class="education-date">Start Year - End Year</span>
    <p>Description of your studies...</p>
</div>
```

### 4. Skills Section
Modify skill categories and percentages:
```html
<div class="skill-item">
    <span class="skill-name">Skill Name</span>
    <div class="skill-bar">
        <div class="skill-progress" data-percentage="85"></div>
    </div>
</div>
```

### 5. Projects Section
Update project cards with your actual projects:
```html
<div class="project-card">
    <div class="project-image">
        <img src="your-project-image.jpg" alt="Project Name">
    </div>
    <div class="project-content">
        <h3>Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" target="_blank">GitHub</a>
            <a href="your-live-demo-link" target="_blank">Live Demo</a>
        </div>
    </div>
</div>
```

### 6. Certifications Section
Add your certifications:
```html
<div class="certification-card">
    <div class="certification-icon">
        <i class="fab fa-certificate-icon"></i>
    </div>
    <h3>Certification Name</h3>
    <p>Issuing Organization</p>
    <span class="certification-date">Year</span>
</div>
```

## 🎨 Color Scheme

The website uses a professional color palette:
- Primary Blue: `#3498db`
- Dark Blue: `#2980b9`
- Dark Gray: `#2c3e50`
- Orange Accent: `#f39c12`
- Light Gray: `#f8f9fa`
- Text Gray: `#666`

To change colors, update the CSS variables or find and replace color codes in `styles.css`.

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: 767px and below

## 🚀 Getting Started

1. **Clone or download** the files to your computer
2. **Customize** the content with your information
3. **Replace** placeholder images with your actual photos
4. **Update** project links and contact information
5. **Test** the website in different browsers and devices
6. **Deploy** to your preferred hosting platform

## 🌐 Deployment Options

You can deploy this website on:
- **GitHub Pages** (free)
- **Netlify** (free tier available)
- **Vercel** (free tier available)
- **Traditional web hosting** services

## 📧 Contact Form

The contact form includes:
- Form validation
- Success/error notifications
- Responsive design
- Accessibility features

**Note:** The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Add a backend service (Node.js, PHP, etc.)
2. Use a service like Formspree, Netlify Forms, or EmailJS
3. Implement proper server-side validation

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with some limitations)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📞 Support

If you have any questions or need help customizing the website, feel free to reach out!

---

**Happy coding! 🎉**

*Built with ❤️ using HTML, CSS, and JavaScript*
