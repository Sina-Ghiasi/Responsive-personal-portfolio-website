//typing animation
let typed = new Typed("#typing", {
  strings: [
    "",
    "برنامه نویس",
    "توسعه دهنده وب",
    "دانشجوی کامپیوتر",
    "توسعه دهنده وردپرس",
  ],
  typeSpeed: 120,
  BackSpeed: 70,
  loop: true,
});

// aside
const nav = document.querySelector(".nav");
const navLists = nav.querySelectorAll("li");
const sections = document.querySelectorAll(".section");

for (let i = 0; i < navLists.length; i++) {
  const link = navLists[i].querySelector("a");

  link.addEventListener("click", function () {
    removeBackSection();

    for (let j = 0; j < navLists.length; j++) {
      if (navLists[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navLists[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
    asideSectionToggle();
  });
}

function removeBackSection() {
  sections.forEach((section) => {
    section.classList.remove("back-section");
  });
}
function addBackSection(num) {
  sections[num].classList.add("back-section");
}
function showSection(element) {
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  const target = element.getAttribute("href").slice(1);
  document.querySelector("#" + target).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < navLists.length; i++) {
    const link = navLists[i].querySelector("a");
    const target = element.getAttribute("href").slice(1);

    link.classList.remove("active");
    if (target === link.getAttribute("href").slice(1)) {
      link.classList.add("active");
    }
  }
}

const contactMeBtns = document.querySelectorAll(".contact-me");
contactMeBtns.forEach((contactMeBtn) => {
  contactMeBtn.addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
  });
});

const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionToggle();
});

function asideSectionToggle() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  sections.forEach((section) => {
    section.classList.toggle("open");
  });
}
