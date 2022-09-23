const header = document.querySelector(".header");

const mainNav = document.querySelector(".main-nav");

const menuBtn = document.querySelector(`.icon-mobile-nav[name="menu-outline"]`);

const closeBtn = document.querySelector(
  `.icon-mobile-nav[name="close-outline"]`
);

menuBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});

closeBtn.addEventListener("click", function () {
  header.classList.remove("nav-open");
});
