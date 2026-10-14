'use strict';

/**
 * Element toggle helper
 */
const elemToggleFunc = function (elem) {
  if (elem) elem.classList.toggle("active");
};

/**
 * Mobile Navbar Toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const navLinks = document.querySelectorAll(".navbar-link");

const navElemArr = [navCloseBtn, navOpenBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {
  if (navElemArr[i]) {
    navElemArr[i].addEventListener("click", function () {
      elemToggleFunc(navbar);
      elemToggleFunc(overlay);
    });
  }
}

// Close mobile navbar when clicking any link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (navbar && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
    }
  });
});

/**
 * Header Scroll & Sticky Effect
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (!header) return;
  if (window.scrollY >= 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Go to Top Button
 */
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (!goTopBtn) return;
  if (window.scrollY >= 600) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});

/**
 * Interactive FAQ Accordion
 */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const questionBtn = item.querySelector(".faq-question");
  if (questionBtn) {
    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      
      // Close all other FAQ items for a clean accordion experience
      faqItems.forEach(otherItem => otherItem.classList.remove("active"));
      
      // Toggle current item
      if (!isActive) {
        item.classList.add("active");
      }
    });
  }
});

/**
 * Interactive Hero Audit Form Feedback
 */
const heroForm = document.querySelector(".hero-form");
if (heroForm) {
  heroForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const submitBtn = heroForm.querySelector("button[type='submit']");
    const originalText = submitBtn.innerHTML;
    
    // Feedback state
    submitBtn.innerHTML = `
      <span style="display:inline-flex; align-items:center; gap:8px;">
        <ion-icon name="checkmark-circle-outline"></ion-icon> Permintaan Terkirim!
      </span>
    `;
    submitBtn.style.background = "var(--gradient-accent)";
    
    // Reset after 3.5s
    setTimeout(() => {
      submitBtn.innerHTML = originalText;
      submitBtn.style.background = "";
      heroForm.reset();
    }, 3500);
  });
}