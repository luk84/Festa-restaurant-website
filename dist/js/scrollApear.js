const items = document.querySelectorAll(
  "#home-events .page-section__text, #home-about .page-section__text, #page-about .features__item, #page-contact .features__item"
);

//initial hide
document.addEventListener("DOMContentLoaded", function() {
  items.forEach(function(item) {
    item.classList.add("scroll-apear");
  });
});

//revealing items
function scrollApear() {
  const screenPosition = window.innerHeight / 1.3;

  items.forEach(function(item, index) {
    let itemPosition = item.getBoundingClientRect().top;

    if (itemPosition < screenPosition) {
      setTimeout(function() {
        item.classList.add("scroll-apear--is-visible");
      }, index * 300);
    }
  });
}

window.addEventListener("scroll", scrollApear);
