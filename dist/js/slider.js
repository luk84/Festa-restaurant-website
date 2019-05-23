//Opening and closing slider
const pageGallery = document.getElementById("page-gallery"),
  sliderWrapper = document.querySelector(".slider__wrapper"),
  closeSliderBtn = document.getElementById("close-btn");

pageGallery.addEventListener("click", function(e) {
  if (e.target.className === "gallery__zoom-btn") {
    currentImage.src = e.target.previousElementSibling.src;
    sliderWrapper.classList.add("slider__wrapper--is-active");
  }
});

closeSliderBtn.addEventListener("click", function() {
  sliderWrapper.classList.remove("slider__wrapper--is-active");
});

// Switching images
const currentImage = document.querySelector(".slider__current-img"),
  imgs = document.querySelectorAll(".gallery__img"),
  prevBtn = document.getElementById("prev-btn"),
  nextBtn = document.getElementById("next-btn");

let current;
imgs.forEach(function(img, index) {
  if (img.src === currentImage.src) {
    current = index;
  }
});

nextBtn.addEventListener("click", function() {
  if (current === imgs.length - 1) {
    current = 0;
    currentImage.src = imgs[current].src;
  } else {
    current++;
    currentImage.src = imgs[current].src;
  }
});

prevBtn.addEventListener("click", function() {
  if (current === 0) {
    current = imgs.length - 1;
    currentImage.src = imgs[current].src;
  } else {
    current--;
    currentImage.src = imgs[current].src;
  }
});
