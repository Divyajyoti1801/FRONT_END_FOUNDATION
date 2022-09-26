//VARIABLES
const header = document.querySelector(".header");
const mainNav = document.querySelector(".main-nav");
const menuBtn = document.querySelector(`.icon-mobile-nav[name="menu-outline"]`);
const closeBtn = document.querySelector(
  `.icon-mobile-nav[name="close-outline"]`
);
const yearEl = document.querySelector(".year");

/*******************************************************************************/
//Functionality

//Mobile Navigation Code
menuBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});
closeBtn.addEventListener("click", function () {
  header.classList.remove("nav-open");
});

//Footer: Current Year Code
const date = new Date(); //Creating instance to use browser Date API
yearEl.textContent = date.getFullYear();

//Smooth Scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    //scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //scroll to other section
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    //Closing mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

//Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, //In the viewport
    threshold: 0, //The percentage present in viewport
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
