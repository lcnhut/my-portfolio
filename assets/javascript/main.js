const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const openBtn = document.querySelector(".navbar__button--open");
const closeBtn = document.querySelector(".navbar__button--close");
const overlay = document.querySelector(".navbar__overlay");
const items = document.querySelectorAll(".navbar__item a");

openBtn.onclick = () => {
  menu.classList.add("active");
  openBtn.classList.add("hide");
  overlay.classList.add("active");
};

closeBtn.onclick = () => {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
  overlay.classList.remove("active");
};

items.forEach((item) => {
  item.onclick = () => {
    menu.classList.remove("active");
    openBtn.classList.remove("hide");
    overlay.classList.remove("active");
  };
});

overlay.onclick = (e) => {
  if (e.target == menu) {
    console.log("Clicked inside");
  } else {
    menu.classList.remove("active");
    openBtn.classList.remove("hide");
    overlay.classList.remove("active");
  }
};

// Swiper - Works section
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
