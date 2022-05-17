const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".navbar__menu");
const openBtn = document.querySelector(".navbar__button--open");
const closeBtn = document.querySelector(".navbar__button--close");
const overlay = document.querySelector(".navbar__overlay");
const items = document.querySelectorAll(".navbar__item a");
const sections = document.querySelectorAll("section");

// Active navbar menu when scroll
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset > sectionTop - 50 - sectionHeight / 3) {
      currentSection = section.getAttribute("class");
    }
  });

  items.forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("href").slice(1) == currentSection.slice(8)) {
      item.classList.add("active");
    }
  });
});

// Navbar mobile
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

    // active menu item
    const current = document.querySelectorAll("a.active");
    current[0].classList.remove("active");
    item.classList.add("active");
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

  autoplay: {
    delay: 2500,
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
