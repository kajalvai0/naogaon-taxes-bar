/* ============================================
   NAOGAON TAXES BAR ASSOCIATION WEBSITE
   Vanilla JavaScript - No Dependencies
   ============================================ */

// ============================================
// CONFIGURATION & CONSTANTS
// ============================================
const CONFIG = {
    scrollOffset: 100,
    animationDuration: 0.3,
    counterSpeed: 2000,
    particleCount: 20,
};

// Members Database
const MEMBERS = [
    { id: 'M001', name: 'মোহাম্মদ রফিকুল ইসলাম', category: 'senior', memberId: 'NTBA-2001' },
    { id: 'M002', name: 'ফারহানা বেগম', category: 'senior', memberId: 'NTBA-2002' },
    { id: 'M003', name: 'মাহমুদ হাসান খান', category: 'senior', memberId: 'NTBA-2003' },
    { id: 'M004', name: 'সালমা আক্তার চৌধুরী', category: 'senior', memberId: 'NTBA-2004' },
    { id: 'M005', name: 'আবদুস সালাম', category: 'senior', memberId: 'NTBA-2005' },
    { id: 'M006', name: 'জহিরুন নাহার', category: 'senior', memberId: 'NTBA-2006' },
    { id: 'M007', name: 'আনিসুর রহমান', category: 'junior', memberId: 'NTBA-2007' },
    { id: 'M008', name: 'সায়মা পারভীন', category: 'junior', memberId: 'NTBA-2008' },
    { id: 'M009', name: 'করিম আহমেদ', category: 'junior', memberId: 'NTBA-2009' },
    { id: 'M010', name: 'নাজমা সুলতানা', category: 'associate', memberId: 'NTBA-2010' },
    { id: 'M011', name: 'হাসান আলী মিয়া', category: 'associate', memberId: 'NTBA-2011' },
    { id: 'M012', name: 'রীনা ঘোষ', category: 'junior', memberId: 'NTBA-2012' },
    { id: 'M013', name: 'আব্দুল হাফিজ', category: 'senior', memberId: 'NTBA-2013' },
    { id: 'M014', name: 'মারিয়া বেগম', category: 'associate', memberId: 'NTBA-2014' },
    { id: 'M015', name: 'শরীফ আহমেদ', category: 'junior', memberId: 'NTBA-2015' },
];

// Gallery Images
const GALLERY_IMAGES = [
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23164E3E%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ১%3C/text%3E%3C/svg%3E', caption: 'আন্তর্জাতিক ট্যাক্স সেমিনার ২০২৪' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%220F3929%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ২%3C/text%3E%3C/svg%3E', caption: 'সদস্য নেটওয়ার্কিং অনুষ্ঠান' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%23164E3E%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৩%3C/text%3E%3C/svg%3E', caption: 'কর্মশালা প্রশিক্ষণ সেশন' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%220F3929%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৪%3C/text%3E%3C/svg%3E', caption: 'পুরস্কার বিতরণী অনুষ্ঠান' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%23164E3E%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৫%3C/text%3E%3C/svg%3E', caption: 'বিচারক সাক্ষাৎ কর্মসূচি' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%220F3929%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৬%3C/text%3E%3C/svg%3E', caption: 'সিএসআর প্রকল্প কার্যক্রম' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%23164E3E%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৭%3C/text%3E%3C/svg%3E', caption: 'সাংস্কৃতিক অনুষ্ঠান' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%220F3929%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৮%3C/text%3E%3C/svg%3E', caption: 'দাতব্য কর্মসূচি' },
    { src: 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%23164E3E%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2240%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22 fill=%22%23D4AF37%22%3Eইভেন্ট ছবি ৯%3C/text%3E%3C/svg%3E', caption: 'অফিস সেশন' },
];

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Naogaon Taxes Bar Association Website Loading...');
    
    // Initialize all features
    initializeNavigation();
    initializeHero();
    initializeScrollAnimations();
    initializeMembers();
    initializeGallery();
    initializeTestimonials();
    initializeParticles();
    initializeForm();
    initializeDarkMode();
    initializeScrollToTop();
    hideLoadingScreen();
    
    console.log('✅ All features initialized successfully!');
});

// ============================================
// LOADING SCREEN
// ============================================
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 2000);
}

// ============================================
// NAVIGATION
// ============================================
function initializeNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
    
    // Active link highlight
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Navbar shadow on scroll
        if (window.scrollY > CONFIG.scrollOffset) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// HERO SECTION - ANIMATED CANVAS BACKGROUND
// ============================================
function initializeHero() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const particles = [];
    const particleCount = 50;
    
    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 2;
            this.vy = (Math.random() - 0.5) * 2;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.3;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
            ctx.fill();
        }
    }
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw lines between particles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 100)})`;
                    ctx.lineWidth = 1;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Resize canvas on window resize
    window.addEventListener('resize', function() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });
    
    // Typing animation for hero title
    typeWriterEffect('heroTitle', 'ন‌ওগাঁ ট্যাক্সেস বার এসোসিয়েশন', 100);
}

function typeWriterEffect(elementId, text, speed) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    let index = 0;
    
    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeScrollAnimations() {
    // Intersection Observer for scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections
    document.querySelectorAll('.committee-card, .event-card, .notice-item, .stat-card, .about-highlights .highlight').forEach(el => {
        observer.observe(el);
    });
    
    // Animate statistics counters on scroll
    const statSection = document.querySelector('.statistics');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounters();
                entry.target.classList.add('counted');
                statsObserver.unobserve(entry.target);
            }
        });
    });
    
    if (statSection) statsObserver.observe(statSection);
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / (CONFIG.counterSpeed / 16);
        let current = 0;
        
        const updateCounter = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(updateCounter);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ============================================
// MEMBERS SEARCH & FILTER
// ============================================
function initializeMembers() {
    const searchInput = document.getElementById('memberSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const memberList = document.getElementById('memberList');
    
    let currentFilter = 'all';
    let searchTerm = '';
    
    // Render members
    function renderMembers() {
        memberList.innerHTML = '';
        
        MEMBERS.filter(member => {
            const matchesFilter = currentFilter === 'all' || member.category === currentFilter;
            const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        }).forEach(member => {
            const memberItem = document.createElement('div');
            memberItem.className = 'member-item';
            memberItem.innerHTML = `
                <div class="member-name">${member.name}</div>
                <div class="member-category">${getCategoryLabel(member.category)}</div>
                <div class="member-id">${member.memberId}</div>
            `;
            memberList.appendChild(memberItem);
        });
    }
    
    // Category labels
    function getCategoryLabel(category) {
        const labels = {
            'senior': 'সিনিয়র সদস্য',
            'junior': 'জুনিয়র সদস্য',
            'associate': 'সহযোগী সদস্য'
        };
        return labels[category] || category;
    }
    
    // Search functionality
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value;
        renderMembers();
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.getAttribute('data-filter');
            renderMembers();
        });
    });
    
    // Initial render
    renderMembers();
}

// ============================================
// GALLERY & LIGHTBOX
// ============================================
function initializeGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    
    let currentImageIndex = 0;
    
    // Render gallery
    GALLERY_IMAGES.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" loading="lazy">
            <div class="gallery-overlay">
                <div class="gallery-icon">
                    <i class="fas fa-search-plus"></i>
                </div>
            </div>
        `;
        
        galleryItem.addEventListener('click', () => {
            openLightbox(index);
        });
        
        galleryGrid.appendChild(galleryItem);
    });
    
    // Lightbox functions
    function openLightbox(index) {
        currentImageIndex = index;
        updateLightbox();
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function updateLightbox() {
        const image = GALLERY_IMAGES[currentImageIndex];
        lightboxImage.src = image.src;
        lightboxCaption.textContent = image.caption;
    }
    
    function closeLightbox() {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % GALLERY_IMAGES.length;
        updateLightbox();
    }
    
    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
        updateLightbox();
    }
    
    // Event listeners
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxNext.addEventListener('click', nextImage);
    lightboxPrev.addEventListener('click', prevImage);
    
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightboxModal.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        }
    });
}

// ============================================
// TESTIMONIALS CAROUSEL
// ============================================
function initializeTestimonials() {
    const slider = document.getElementById('testimonialsSlider');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    
    let currentSlide = 0;
    
    function showSlide(index) {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        showSlide(currentSlide);
    }
    
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    
    // Auto-rotate testimonials
    setInterval(nextSlide, 8000);
    
    // Initial slide
    if (cards.length > 0) showSlide(0);
}

// ============================================
// FLOATING PARTICLES
// ============================================
function initializeParticles() {
    const particleContainer = document.getElementById('particleContainer');
    
    for (let i = 0; i < CONFIG.particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 100 + 50 + 'px';
        particle.style.height = particle.style.width;
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = Math.random() * 15 + 20 + 's';
        
        particleContainer.appendChild(particle);
    }
}

// ============================================
// CONTACT FORM
// ============================================
function initializeForm() {
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
                timestamp: new Date().toLocaleString('bn-BD')
            };
            
            // Save to localStorage (since we have no backend)
            const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
            submissions.push(formData);
            localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
            
            // Show success message
            showNotification('বার্তা সফলভাবে পাঠানো হয়েছে!', 'success');
            contactForm.reset();
            
            console.log('📨 Contact Form Submission:', formData);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            const subscription = {
                email: email,
                timestamp: new Date().toLocaleString('bn-BD')
            };
            
            const subscriptions = JSON.parse(localStorage.getItem('newsletters') || '[]');
            if (!subscriptions.find(s => s.email === email)) {
                subscriptions.push(subscription);
                localStorage.setItem('newsletters', JSON.stringify(subscriptions));
                showNotification('নিউজলেটারে সফলভাবে যোগ হয়েছেন!', 'success');
                this.reset();
            } else {
                showNotification('এই ইমেইল ইতিমধ্যে সংযুক্ত আছে', 'warning');
            }
        });
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#164E3E' : '#0F3929'};
        color: #D4AF37;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// DARK MODE
// ============================================
function initializeDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set initial dark mode
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const darkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', darkModeEnabled);
        
        // Update icon
        darkModeToggle.innerHTML = darkModeEnabled ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    });
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
    
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Lazy load images
const images = document.querySelectorAll('img[loading="lazy"]');
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Add active class to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > CONFIG.scrollOffset) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Print debug info
console.log(`
╔════════════════════════════════════════════════════╗
║  ন‌ওগাঁ ট্যাক্সেস বার এসোসিয়েশন                    ║
║  Naogaon Taxes Bar Association                     ║
║  Website Version 1.0                               ║
║  © 2024 All Rights Reserved                        ║
╚════════════════════════════════════════════════════╝
`);

// Export functions for console access
window.DEBUG = {
    viewSubmissions: () => {
        console.table(JSON.parse(localStorage.getItem('contactSubmissions') || '[]'));
    },
    viewNewsletterSubscribers: () => {
        console.table(JSON.parse(localStorage.getItem('newsletters') || '[]'));
    },
    clearData: () => {
        localStorage.removeItem('contactSubmissions');
        localStorage.removeItem('newsletters');
        console.log('✅ All data cleared');
    }
};

console.log('💾 Debug commands available: DEBUG.viewSubmissions(), DEBUG.viewNewsletterSubscribers(), DEBUG.clearData()');
