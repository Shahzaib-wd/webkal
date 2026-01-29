// ===================================
// WEBKAL - Main JavaScript
// Pure Vanilla JavaScript (No jQuery)
// ===================================

// ===================================
// SERVICES DATA
// ===================================
const servicesData = [
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription: 'Custom websites, scalable apps, and modern UI solutions built for performance.',
    description: 'We build custom websites and web applications that are fast, scalable, and designed to convert. From landing pages to complex platforms, we deliver solutions that drive results.',
    icon: 'globe',
    features: [
      'Custom website design and development',
      'Progressive Web Applications (PWA)',
      'E-commerce solutions',
      'API development and integration',
      'Performance optimization',
      'Responsive design for all devices'
    ],
    approach: [
      'Discovery and requirements analysis',
      'UI/UX design and prototyping',
      'Agile development with regular updates',
      'Rigorous testing and QA',
      'Deployment and ongoing support'
    ],
    whyChooseUs: [
      'Modern tech stack (React, Node.js, TypeScript)',
      'Clean, maintainable code',
      'SEO-optimized from the start',
      'Fast delivery without compromising quality'
    ]
  },
  {
    id: 'telegram-bots',
    title: 'Telegram Chatbots',
    shortDescription: 'Automate customer support and business operations with intelligent bots.',
    description: 'Streamline your business operations with custom Telegram bots. From customer support to automated workflows, we build bots that work around the clock.',
    icon: 'bot',
    features: [
      'Custom bot development',
      'Customer support automation',
      'Payment integration',
      'Notification systems',
      'Data collection and analytics',
      'Multi-language support'
    ],
    approach: [
      'Understanding your business needs',
      'Bot architecture and flow design',
      'Development and testing',
      'Integration with your systems',
      'Training and documentation'
    ],
    whyChooseUs: [
      'Seamless Telegram API integration',
      'Scalable bot architecture',
      'Natural conversation flows',
      'Ongoing maintenance and updates'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Growth-focused marketing strategies that deliver measurable results.',
    description: 'Drive growth with data-driven digital marketing strategies. We help you reach your target audience and convert them into loyal customers.',
    icon: 'trending-up',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) advertising',
      'Social media marketing',
      'Content marketing strategy',
      'Email marketing campaigns',
      'Analytics and reporting'
    ],
    approach: [
      'Market research and competitor analysis',
      'Strategy development',
      'Campaign execution',
      'Performance tracking',
      'Optimization and scaling'
    ],
    whyChooseUs: [
      'Data-driven decision making',
      'Transparent reporting',
      'ROI-focused campaigns',
      'Experienced marketing team'
    ]
  },
  {
    id: 'affiliate-marketing',
    title: 'Affiliate Marketing',
    shortDescription: 'Build and scale profitable affiliate programs that drive revenue growth.',
    description: 'Expand your reach and revenue with strategic affiliate marketing programs. We help you build, manage, and optimize affiliate networks that deliver consistent results.',
    icon: 'users',
    features: [
      'Affiliate program setup and management',
      'Partner recruitment and onboarding',
      'Commission structure optimization',
      'Tracking and attribution systems',
      'Affiliate portal development',
      'Performance analytics and reporting'
    ],
    approach: [
      'Program strategy and goal setting',
      'Platform selection and setup',
      'Affiliate recruitment campaigns',
      'Relationship management',
      'Continuous optimization'
    ],
    whyChooseUs: [
      'Proven affiliate network connections',
      'Transparent tracking systems',
      'Performance-based optimization',
      'Dedicated affiliate management'
    ]
  }
];

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Get icon SVG by name
function getIconSVG(iconName) {
  const icons = {
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    'shield': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    'bot': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>',
    'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>',
    'users': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    'menu': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    'zap': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    'lightbulb': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"></line><line x1="10" y1="22" x2="14" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>',
    'target': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    'eye': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>',
    'rocket': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>',
    'mail': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    'phone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    'send': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
    'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>'
  };
  return icons[iconName] || '';
}

// Get service by ID
function getServiceById(serviceId) {
  return servicesData.find(service => service.id === serviceId);
}

// Show toast notification
function showToast(title, description = '', type = 'success') {
  const toastContainer = document.querySelector('.toast-container') || createToastContainer();
  
  const toast = document.createElement('div');
  toast.className = `toast-notification ${type}`;
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    ${description ? `<div class="toast-description">${description}</div>` : ''}
  `;
  
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(400px)';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  document.body.appendChild(container);
  return container;
}

// ===================================
// NAVIGATION
// ===================================

// Active link highlighting
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;
    if (currentPath === linkPath || (currentPath === '/' && linkPath === '/index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Navbar scroll effect
function handleNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function initScrollTopButton() {
  const scrollBtn = document.querySelector('.scroll-top-btn');
  if (!scrollBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===================================
// CONTACT FORM HANDLING
// ===================================
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.btn-submit');
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      service: document.getElementById('service').value,
      message: document.getElementById('message').value
    };
    
    // Validate
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields', '', 'error');
      return;
    }
    
    // Disable button
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending...';
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Success
    showToast('Message sent successfully!', "We'll get back to you as soon as possible.", 'success');
    contactForm.reset();
    
    // Re-enable button
    submitBtn.disabled = false;
    submitBtn.innerHTML = `Send Message ${getIconSVG('send')}`;
  });
}

// ===================================
// MOBILE MENU TOGGLE
// ===================================
function initMobileMenu() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  
  if (!navbarToggler || !navbarCollapse) return;
  
  navbarToggler.addEventListener('click', () => {
    navbarCollapse.classList.toggle('show');
  });
  
  // Close menu when clicking nav links
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 992) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}

// ===================================
// INITIALIZATION
// ===================================
document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  initScrollTopButton();
  initContactForm();
  initMobileMenu();
  
  // Navbar scroll
  window.addEventListener('scroll', handleNavbarScroll);
  
  // Fade in animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.service-card, .why-choose-card, .stat-card').forEach(el => {
    observer.observe(el);
  });
});

// ===================================
// EXPORTS FOR SERVICE PAGES
// ===================================
window.WEBKAL = {
  servicesData,
  getServiceById,
  getIconSVG,
  showToast
};
