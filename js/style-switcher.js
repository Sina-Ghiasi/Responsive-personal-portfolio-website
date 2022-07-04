//toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});
//hide style switcher on scroll
window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open"))
    document.querySelector(".style-switcher").classList.remove("open");
});
//change theme colors
const alternateStyles = document.querySelectorAll(".alternate-style");
const setActiveColor = function (color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
    document.querySelectorAll(".colors>span").forEach((color) => {
      color.classList.remove("color-selected");
    });
    document.querySelector(`.${color}`).classList.add("color-selected");
  });
};
