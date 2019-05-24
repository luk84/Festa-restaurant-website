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
