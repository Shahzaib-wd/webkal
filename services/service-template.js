// Template generator for service detail pages
function generateServicePage(serviceId) {
  const service = window.WEBKAL.getServiceById(serviceId);
  if (!service) {
    window.location.href = '../services.html';
    return;
  }
  
  const getIconSVG = window.WEBKAL.getIconSVG;
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${service.title} - ${service.description}">
  <title>${service.title} - WEBKAL</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="icon" type="image/png" href="../assets/images/logo.png">
</head>
<body>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="../index.html">
        <img src="https://www.genspark.ai/api/files/s/57Lk7OlF" alt="WEBKAL Logo" style="height: 40px; width: auto;">
      </a>
      
      <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
        ${getIconSVG('menu')}
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="../about.html">About</a></li>
          <li class="nav-item"><a class="nav-link" href="../services.html">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="../contact.html">Contact</a></li>
          <li class="nav-item ms-lg-3"><a href="../contact.html" class="btn btn-primary-custom">Get Started</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <section class="service-detail-hero mt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <div class="service-detail-icon">
            ${getIconSVG(service.icon)}
          </div>
          <h1 style="font-size: clamp(2rem, 5vw, 3.125rem); font-weight: 700; margin-bottom: 1.5rem;">
            ${service.title}
          </h1>
          <p style="font-size: 1.125rem; color: var(--text-muted); line-height: 1.7;">
            ${service.description}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6">
          <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem;">What We Offer</h2>
          <ul class="feature-list">
            ${service.features.map(feature => `
              <li class="feature-item">
                <div class="feature-check">${getIconSVG('check')}</div>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="col-lg-6">
          <h2 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1.5rem;">Our Approach</h2>
          <ol class="approach-list">
            ${service.approach.map((step, index) => `
              <li class="approach-item">
                <div class="approach-number"><span>${index + 1}</span></div>
                <span>${step}</span>
              </li>
            `).join('')}
          </ol>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-bg-secondary">
    <div class="container">
      <h2 class="text-center" style="font-size: 1.875rem; font-weight: 700; margin-bottom: 2rem;">Why Choose Us</h2>
      <div class="row g-3" style="max-width: 48rem; margin: 0 auto;">
        ${service.whyChooseUs.map(reason => `
          <div class="col-md-6">
            <div class="why-choose-item">
              <div class="feature-check">${getIconSVG('check')}</div>
              <span>${reason}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container text-center">
      <h2>Ready to Get Started?</h2>
      <p>Let's discuss how our ${service.title.toLowerCase()} services can help transform your business.</p>
      <div class="d-flex flex-wrap justify-content-center gap-3">
        <a href="../contact.html" class="btn btn-secondary-custom btn-lg-custom">
          Contact Us
          ${getIconSVG('arrow-right')}
        </a>
        <a href="../services.html" class="btn btn-outline-custom btn-lg-custom" style="border-color: rgba(255,255,255,0.3); color: white;">
          View All Services
        </a>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-6">
          <a href="../index.html" class="footer-brand">WEBKAL</a>
          <p class="footer-description">
            Not just to build, but to innovate. We craft digital solutions that transform businesses and drive growth.
          </p>
        </div>
        <div class="col-md-3 col-6">
          <h4>Quick Links</h4>
          <ul class="footer-links">
            <li><a href="../index.html">Home</a></li>
            <li><a href="../about.html">About Us</a></li>
            <li><a href="../services.html">Services</a></li>
            <li><a href="../contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-md-3 col-6">
          <h4>Contact</h4>
          <div class="footer-contact-item">
            ${getIconSVG('mail')}
            <span>hello@webkal.com</span>
          </div>
          <div class="footer-contact-item">
            ${getIconSVG('phone')}
            <span>+1 (555) 123-4567</span>
          </div>
          <div class="footer-contact-item">
            ${getIconSVG('map-pin')}
            <span>Remote-First Company</span>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© <span id="currentYear"></span> WEBKAL. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <button class="scroll-top-btn" aria-label="Scroll to top">
    ${getIconSVG('chevron-up')}
  </button>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../js/main.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('currentYear').textContent = new Date().getFullYear();
    });
  </script>
</body>
</html>`;
}
