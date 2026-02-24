const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

// Open menu when clicking the hamburger icon
menuOpenButton.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

// Close menu when clicking the close (X) icon
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Optional: close menu when clicking a nav link (for smoother UX)
document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  }),
);

// Installing Swipper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerview: 1,
    },
    768: {
      slidesPerview: 2,
    },
    1024: {
      slidesPerview: 3,
    },
  },
});
