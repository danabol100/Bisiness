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
