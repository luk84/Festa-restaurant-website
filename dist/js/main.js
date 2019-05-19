// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 41.8972249, lng: 12.4877412 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".contact__map"), {
    zoom: 18,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

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

//reduce size and darken site-header after scrolling
window.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    siteHeader.classList.add("site-header--darker");
  } else if (siteHeader.classList.contains("site-header--darker")) {
    siteHeader.classList.remove("site-header--darker");
  }
});

//animations delay
document.body.classList.add("js-loading");

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove("js-loading");
}

//menu cards reveal
const menuMains = document.querySelector(".menu__card--mains");
const menuDesserts = document.querySelector(".menu__card--desserts");
const menuDrinks = document.querySelector(".menu__card--drinks");

const btnMains = document.getElementById("btn-mains");
const btnDesserts = document.getElementById("btn-desserts");
const btnDrinks = document.getElementById("btn-drinks");

const btnsCardClose = document.querySelectorAll(".menu__card-close");

btnMains.addEventListener("click", function(e) {
  menuMains.classList.add("is-active");
  e.preventDefault();
});

btnDesserts.addEventListener("click", function(e) {
  menuDesserts.classList.add("is-active");
  e.preventDefault();
});

btnDrinks.addEventListener("click", function(e) {
  menuDrinks.classList.add("is-active");
  e.preventDefault();
});

btnsCardClose.forEach(function(btn) {
  btn.addEventListener("click", function() {
    menuMains.classList.remove("is-active");
    menuDesserts.classList.remove("is-active");
    menuDrinks.classList.remove("is-active");
  });
});
