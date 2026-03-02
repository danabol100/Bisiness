document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElement = e.target;

  if (targetElement.closest(".icon-menu")) {
    document.documentElement.toggleAttribute("data-menu-open");
  }
  if (targetElement.closest(".menu__item")) {
    document.documentElement.removeAttribute("data-menu-open");
  }
  if (targetElement.closest(".footer-column__title")) {
    const currentTitle = targetElement.closest(".footer-column__title");
    const currentList = currentTitle.nextElementSibling;

    if (window.innerWidth <= 577) {
      const activeTitle = document.querySelector(
        ".footer-column__title[data-footer-menu-open]",
      );

      // закрыть уже открытый
      if (activeTitle && activeTitle !== currentTitle) {
        activeTitle.removeAttribute("data-footer-menu-open");
        activeTitle.nextElementSibling.style.height = "0px";
      }

      // toggle текущий
      currentTitle.toggleAttribute("data-footer-menu-open");

      if (currentTitle.hasAttribute("data-footer-menu-open")) {
        currentList.style.height = "";
        const height = currentList.offsetHeight;

        currentList.style.height = "0px";
        currentList.offsetHeight;

        currentList.style.height = height + "px";
      } else {
        currentList.style.height = "0px";
      }
    }
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
function initFooterMenus() {
  const footerMenus = document.querySelectorAll(".footer-column__list");
  if (footerMenus.length) {
    const matchMedia = window.matchMedia(`(width <= 36.0625em)`);
    matchMedia.addEventListener("change", function () {
      setFooterMenus(matchMedia.matches);
    });
    function setFooterMenus() {
      footerMenus.forEach((footerMenu) => {
        if (matchMedia.matches) {
          footerMenu.style.cssText += `height: 0;`;
        } else {
          footerMenu.style.cssText = ``;
        }
      });
    }
    setFooterMenus();
  }
}
initFooterMenus();

const block = document.querySelector(".what-we-do__list");
let done = false;

window.onscroll = () => {
  if (done) return;

  const top = block.getBoundingClientRect().top;

  if (top < window.innerHeight) {
    done = true;
    block.scrollTo({
      left: 100,
      behavior: "smooth",
    });
  }
};
