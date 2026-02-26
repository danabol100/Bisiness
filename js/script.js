document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.documentElement.toggleAttribute("data-menu-open");
  }
  if (targetElement.closest(".menu__item")) {
    document.documentElement.removeAttribute("data-menu-open");
  }
}

const header = document.querySelector(".header");
const headerWrapper = document.querySelector(".header__wrapper");
const navMenu = document.querySelector("header__menu");
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("header--scroll-state");
  } else {
    header.classList.remove("header--scroll-state");
  }
});

const buttons = document.querySelectorAll(".what-we-do__item");
const items = document.querySelectorAll(".tabs__item");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;

    buttons.forEach((b) => b.classList.remove("active"));
    items.forEach((i) => i.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});
// Подгоняем высоту wrapper под контент на iOS
if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
  const wrapper = document.querySelector(".what-we-do__wrapper");
  const body = document.querySelector(".what-we-do__body");
  if (wrapper && body) {
    wrapper.style.height = body.offsetHeight + "px";
  }
}
