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
sections.forEach((section) => {
  section.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"))
      document.querySelector(".style-switcher").classList.remove("open");
  });
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
//theme light and dark mode
const dayNight = document.querySelector(".day-night");
window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});
//detect user prefers
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.body.classList.add("dark");
}
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    if (event.matches) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
