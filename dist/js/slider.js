//Opening and closing slider
const pageGallery = document.getElementById("page-gallery"),
  sliderWrapper = document.querySelector(".slider__wrapper"),
  currentImage = document.querySelector(".slider__current-img"),
  sliderCloseBtn = document.getElementById("slider-close-btn");

pageGallery.addEventListener("click", function(e) {
  if (e.target.className === "gallery__zoom-btn") {
    currentImage.src = e.target.previousElementSibling.src;
    sliderWrapper.classList.add("slider__wrapper--is-active");
  }
});

sliderCloseBtn.addEventListener("click", function() {
  sliderWrapper.classList.remove("slider__wrapper--is-active");
});

// Switching images
const imgs = document.querySelectorAll(".gallery__img"),
  prevBtn = document.getElementById("slider-prev-btn"),
  nextBtn = document.getElementById("slider-next-btn");

function switchImage(direction) {
  let current;
  imgs.forEach(function(img, index) {
    if (img.src === currentImage.src) {
      current = index;
    }
  });

  if (direction === "right") {
    if (current === imgs.length - 1) {
      current = 0;
      currentImage.src = imgs[current].src;
    } else {
      current++;
      currentImage.src = imgs[current].src;
    }
  } else if (direction === "left") {
    if (current === 0) {
      current = imgs.length - 1;
      currentImage.src = imgs[current].src;
    } else {
      current--;
      currentImage.src = imgs[current].src;
    }
  }
}

nextBtn.addEventListener("click", function() {
  switchImage("right");
});
prevBtn.addEventListener("click", function() {
  switchImage("left");
});
document.addEventListener("keydown", function(e) {
  if (sliderWrapper.classList.contains("slider__wrapper--is-active") && e.keyCode === 37) {
    switchImage("left");
  } else if (sliderWrapper.classList.contains("slider__wrapper--is-active") && e.keyCode === 39) {
    switchImage("right");
  }
});
