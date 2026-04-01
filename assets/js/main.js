// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function () {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIconOpen.classList.remove('hidden');
        menuIconClose.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
        menuIconOpen.classList.add('hidden');
        menuIconClose.classList.remove('hidden');
      }
    });
  }

  // Navbar scroll effect
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-lg', 'shadow-[#0a1f44]/5');
        navbar.classList.remove('backdrop-blur-md');
      } else {
        navbar.classList.remove('shadow-lg', 'shadow-[#0a1f44]/5');
        navbar.classList.add('backdrop-blur-md');
      }
    });
  }

  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // WhatsApp button toggle
  const waBtn = document.getElementById('wa-btn');
  const waTooltip = document.getElementById('wa-tooltip');
  const waClose = document.getElementById('wa-close');
  const waPulse = document.getElementById('wa-pulse');

  if (waBtn && waTooltip) {
    waBtn.addEventListener('click', function () {
      const isVisible = !waTooltip.classList.contains('hidden');
      if (isVisible) {
        waTooltip.classList.add('hidden');
        if (waPulse) waPulse.classList.remove('hidden');
      } else {
        waTooltip.classList.remove('hidden');
        if (waPulse) waPulse.classList.add('hidden');
      }
    });
  }
  if (waClose) {
    waClose.addEventListener('click', function () {
      waTooltip.classList.add('hidden');
      if (waPulse) waPulse.classList.remove('hidden');
    });
  }

  // Hero Slider
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach(function (s, i) {
      s.classList.toggle('hidden', i !== index);
    });
    dots.forEach(function (d, i) {
      if (i === index) {
        d.classList.add('w-8', 'bg-[#00c4ba]');
        d.classList.remove('w-2', 'bg-white/30');
      } else {
        d.classList.remove('w-8', 'bg-[#00c4ba]');
        d.classList.add('w-2', 'bg-white/30');
      }
    });
    currentSlide = index;
  }

  function nextSlide() {
    if (slides.length === 0) return;
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    if (slides.length === 0) return;
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  if (slides.length > 0) {
    showSlide(0);
    slideInterval = setInterval(nextSlide, 5000);
  }

  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  if (prevBtn) prevBtn.addEventListener('click', function () { clearInterval(slideInterval); prevSlide(); slideInterval = setInterval(nextSlide, 5000); });
  if (nextBtn) nextBtn.addEventListener('click', function () { clearInterval(slideInterval); nextSlide(); slideInterval = setInterval(nextSlide, 5000); });

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () {
      clearInterval(slideInterval);
      showSlide(i);
      slideInterval = setInterval(nextSlide, 5000);
    });
  });

  // Review carousel scroll
  const reviewScroll = document.getElementById('review-scroll');
  const reviewLeft = document.getElementById('review-scroll-left');
  const reviewRight = document.getElementById('review-scroll-right');

  if (reviewScroll && reviewLeft) {
    reviewLeft.addEventListener('click', function () {
      reviewScroll.scrollBy({ left: -296, behavior: 'smooth' });
    });
  }
  if (reviewScroll && reviewRight) {
    reviewRight.addEventListener('click', function () {
      reviewScroll.scrollBy({ left: 296, behavior: 'smooth' });
    });
  }

  // Doctor Modal
  const doctorCards = document.querySelectorAll('[data-doctor-modal]');
  const doctorModalOverlay = document.getElementById('doctor-modal-overlay');
  const doctorModalContent = document.getElementById('doctor-modal-content');
  const doctorModalClose = document.querySelectorAll('.doctor-modal-close');

  doctorCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const modalId = card.getAttribute('data-doctor-modal');
      const modal = document.getElementById(modalId);
      if (modal && doctorModalOverlay) {
        doctorModalContent.innerHTML = modal.innerHTML;
        doctorModalOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (doctorModalOverlay) {
    doctorModalOverlay.addEventListener('click', function (e) {
      if (e.target === doctorModalOverlay || e.target.closest('.doctor-modal-close')) {
        doctorModalOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }

  // Gallery category filter
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const cat = btn.getAttribute('data-category');
      filterBtns.forEach(function (b) {
        b.classList.remove('gradient-navy', 'text-white', 'shadow-lg', 'shadow-[#0a1f44]/20');
        b.classList.add('bg-[#f8f9fc]', 'text-[#1a1a2e]/60', 'hover:bg-[#00c4ba]/10', 'hover:text-[#00c4ba]');
      });
      btn.classList.add('gradient-navy', 'text-white', 'shadow-lg', 'shadow-[#0a1f44]/20');
      btn.classList.remove('bg-[#f8f9fc]', 'text-[#1a1a2e]/60', 'hover:bg-[#00c4ba]/10', 'hover:text-[#00c4ba]');

      galleryItems.forEach(function (item) {
        if (cat === 'All' || item.getAttribute('data-category') === cat) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // Lightbox
  const lightboxOverlay = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');
  const lightboxCounter = document.getElementById('lightbox-counter');
  let lightboxItems = [];
  let lightboxIndex = 0;

  function openLightbox(items, index) {
    lightboxItems = items;
    lightboxIndex = index;
    updateLightbox();
    lightboxOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function updateLightbox() {
    if (!lightboxItems.length) return;
    var item = lightboxItems[lightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.title;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCounter) lightboxCounter.textContent = (lightboxIndex + 1) + ' / ' + lightboxItems.length;
    if (lightboxPrev) lightboxPrev.classList.toggle('hidden', lightboxIndex === 0);
    if (lightboxNext) lightboxNext.classList.toggle('hidden', lightboxIndex === lightboxItems.length - 1);
  }

  function closeLightbox() {
    if (lightboxOverlay) {
      lightboxOverlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxOverlay) lightboxOverlay.addEventListener('click', function (e) { if (e.target === lightboxOverlay) closeLightbox(); });
  if (lightboxPrev) lightboxPrev.addEventListener('click', function (e) { e.stopPropagation(); if (lightboxIndex > 0) { lightboxIndex--; updateLightbox(); } });
  if (lightboxNext) lightboxNext.addEventListener('click', function (e) { e.stopPropagation(); if (lightboxIndex < lightboxItems.length - 1) { lightboxIndex++; updateLightbox(); } });

  document.addEventListener('keydown', function (e) {
    if (lightboxOverlay && !lightboxOverlay.classList.contains('hidden')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft' && lightboxIndex > 0) { lightboxIndex--; updateLightbox(); }
      if (e.key === 'ArrowRight' && lightboxIndex < lightboxItems.length - 1) { lightboxIndex++; updateLightbox(); }
    }
  });

  // Attach lightbox to gallery images
  document.querySelectorAll('.lightbox-trigger').forEach(function (el) {
    el.addEventListener('click', function () {
      var group = el.getAttribute('data-lightbox-group') || 'default';
      var triggers = Array.from(document.querySelectorAll('.lightbox-trigger[data-lightbox-group="' + group + '"]'));
      var items = triggers.map(function (t) {
        return { src: t.getAttribute('data-lightbox-src'), title: t.getAttribute('data-lightbox-title') || '' };
      });
      var idx = triggers.indexOf(el);
      openLightbox(items, idx);
    });
  });

  // Star rating interactive (review form)
  const starBtns = document.querySelectorAll('.star-rating-btn');
  const ratingInput = document.getElementById('rating-input');
  starBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var val = parseInt(btn.getAttribute('data-value'));
      if (ratingInput) ratingInput.value = val;
      starBtns.forEach(function (b) {
        var bVal = parseInt(b.getAttribute('data-value'));
        var star = b.querySelector('svg');
        if (bVal <= val) {
          star.setAttribute('fill', '#d4a843');
          star.setAttribute('stroke', '#d4a843');
        } else {
          star.setAttribute('fill', 'none');
          star.setAttribute('stroke', '#e2e8f0');
        }
      });
    });
  });
});
