document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.main-nav');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Intersection Observer for section highlighting
    const sections = document.querySelectorAll('section');
    const navLinksList = document.querySelectorAll('.nav-links a');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Create timeline items for each section
    const timeline = document.querySelector('.timeline');
    if (timeline) {
        sections.forEach((section, index) => {
            if (section.id && section.id !== 'intro') {
                const sectionId = section.id;
                const sectionTitle = section.id.split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                
                const timelineItem = document.createElement('a');
                timelineItem.href = `#${sectionId}`;
                timelineItem.className = 'timeline-item';
                timelineItem.setAttribute('data-section', sectionId);
                
                timelineItem.innerHTML = `
                    <div class="timeline-dot"></div>
                    <span class="timeline-label">${sectionTitle}</span>
                `;
                
                timeline.appendChild(timelineItem);
                
                // Add click event for smooth scrolling
                timelineItem.addEventListener('click', function(e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            }
        });
        
        // Update the timeline items after they've been created
        const allTimelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const sectionId = entry.target.getAttribute('id');
                const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
                const timelineItem = document.querySelector(`.timeline-item[data-section="${sectionId}"]`);
                
                if (entry.isIntersecting) {
                    // Update active nav link
                    navLinksList.forEach(link => link.classList.remove('active'));
                    if (navLink) navLink.classList.add('active');
                    
                    // Update active timeline item
                    allTimelineItems.forEach(item => item.classList.remove('active'));
                    if (timelineItem) timelineItem.classList.add('active');
                    
                    // Update timeline progress
                    const activeIndex = Array.from(sections).findIndex(section => section === entry.target);
                    if (activeIndex >= 0) {
                        const progress = (activeIndex / (sections.length - 1)) * 100;
                        document.documentElement.style.setProperty('--progress', `${progress}%`);
                        document.querySelector('.timeline-progress').style.transform = `scaleY(${progress / 100})`;
                    }
                    
                    // Add active class to section
                    sections.forEach(section => section.classList.remove('active'));
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50% 0px'
        });

        // Observe all sections
        sections.forEach(section => {
            observer.observe(section);
        });
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, h2, .concept-step, .stakeholder-card, .role-card, .metric-card, .market-card, .positioning-card, .logistics-item, .flow-item, .international-item, .qa-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial styles for animation
    document.querySelectorAll('.card, h2, .concept-step, .stakeholder-card, .role-card, .metric-card, .market-card, .positioning-card, .logistics-item, .flow-item, .international-item, .qa-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Initialize first section as active
    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
    
    // Initialize first nav link as active
    if (navLinksList.length > 0) {
        navLinksList[0].classList.add('active');
    }
    
    // Initialize first timeline item as active
    if (timelineItems.length > 0) {
        timelineItems[0].classList.add('active');
    }
});