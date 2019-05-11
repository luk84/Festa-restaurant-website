//Mobile menu
const siteHeader = document.querySelector(".site-header"),
  menuIcon = document.querySelector(".site-header__menu-icon"),
  menuContent = document.querySelector(".site-header__menu-content");

menuIcon.addEventListener("click", function() {
  siteHeader.classList.toggle("site-header--is-expanded");
  menuContent.classList.toggle("site-header__menu-content--is-visible");
  menuIcon.classList.toggle("site-header__menu-icon--x-close");
});
