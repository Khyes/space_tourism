const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// when someone clicks the hamburger button
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  // if the nav is closed, open it
  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("data-expended", true);
    navToggle.style.backgroundImage = "url('./assets/shared/icon-close.svg')";
  } else {
    // if the nav is open, close it
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("data-expended", false);

    navToggle.style.backgroundImage = "url('./assets/shared/icon-hamburger.svg')";

  }
});

