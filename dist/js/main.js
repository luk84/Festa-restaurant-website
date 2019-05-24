// removing loader
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader__hidden");
});

//animations delay
document.body.classList.add("js-loading");

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove("js-loading");
}

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
  const zoomBtn = document.createElement("a");
  zoomBtn.className = "gallery__zoom-btn";
  zoomBtn.appendChild(document.createTextNode("Zoom"));

  const textOverlay = document.createElement("span");
  textOverlay.className = "gallery__text-overlay";

  item.addEventListener("mouseenter", function(e) {
    item.classList.add("is-active");
    if (e.target.parentElement.parentElement.id === "page-gallery") {
      item.appendChild(zoomBtn);
    } else {
      if (e.target.classList.contains("gallery__item--2")) {
        textOverlay.textContent = "Fresh";
        textOverlay.style.color = "#62d62c";
      } else if (e.target.classList.contains("gallery__item--3")) {
        textOverlay.textContent = "Handmade";
      } else if (e.target.classList.contains("gallery__item--4")) {
        textOverlay.textContent = "Delicious";
        textOverlay.style.color = "#ff4242";
      }
      item.appendChild(textOverlay);
    }
  });

  item.addEventListener("mouseleave", function(e) {
    item.classList.remove("is-active");
    if (e.target.parentElement.parentElement.id === "page-gallery") {
      item.removeChild(zoomBtn);
    } else {
      item.removeChild(textOverlay);
    }
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

//modal reveal
const modalWrapper = document.querySelector(".modal__wrapper"),
  reservationBtns = document.querySelectorAll(
    "#reservation-btn1, #reservation-btn2"
  ),
  modalCloseBtn = document.querySelector(".modal__close-x");

reservationBtns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    modalWrapper.classList.add("modal__wrapper--is-visible");
    e.preventDefault();
  });
});

modalCloseBtn.addEventListener("click", function() {
  modalWrapper.classList.remove("modal__wrapper--is-visible");
});

//scroller-top static after reaching bottom
const scrollerTop = document.querySelector(".scroller-top"),
  siteFooter = document.querySelector(".site-footer");

scrollerTop.style.display = "none";

window.addEventListener("scroll", function() {
  const maxScroll = document.body.offsetHeight - window.innerHeight;

  if (window.scrollY > window.innerHeight / 5) {
    scrollerTop.style.display = "block";
  } else {
    scrollerTop.style.display = "none";
  }

  if (window.scrollY - 50 > maxScroll - siteFooter.offsetHeight) {
    scrollerTop.classList.add("scroller-top--reached-bottom");
  } else {
    scrollerTop.classList.remove("scroller-top--reached-bottom");
  }
});
