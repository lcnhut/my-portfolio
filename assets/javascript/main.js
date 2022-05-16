const menu = document.querySelector(".navbar__menu");
const openBtn = document.querySelector(".navbar__button--open");
const closeBtn = document.querySelector(".navbar__button--close");
const overlay = document.querySelector(".overlay");
const items = document.querySelectorAll(".navbar__item a");

openBtn.onclick = () => {
  menu.classList.add("active");
  openBtn.classList.add("hide");
  overplay.classList.add("active");
};

closeBtn.onclick = () => {
  menu.classList.remove("active");
  openBtn.classList.remove("hide");
  overplay.classList.remove("active");
};

items.forEach((item) => {
  item.onclick = () => {
    menu.classList.remove("active");
    openBtn.classList.remove("hide");
    overlay.classList.remove("active");
  };
});
