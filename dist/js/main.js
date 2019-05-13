//Mobile menu
const siteHeader = document.querySelector(".site-header"),
  menuIcon = document.querySelector(".site-header__menu-icon"),
  menuContent = document.querySelector(".site-header__menu-content");

menuIcon.addEventListener("click", function() {
  siteHeader.classList.toggle("site-header--is-expanded");
  menuContent.classList.toggle("site-header__menu-content--is-visible");
  menuIcon.classList.toggle("site-header__menu-icon--x-close");
});

//gallery images overlay
const galleryItems = document.querySelectorAll(".gallery__item");

galleryItems.forEach(function(item) {
  item.addEventListener("mouseover", function() {
    item.classList.add("is-active");
  });
  item.addEventListener("mouseout", function() {
    item.classList.remove("is-active");
  });
});

//reduce site-header size ofter scrolling
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    siteHeader.classList.add("site-header--darker");
  } else if (siteHeader.classList.contains("site-header--darker")) {
    siteHeader.classList.remove("site-header--darker");
  }
});
