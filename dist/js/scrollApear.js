// scrollApear animation
function scrollApear() {
  const pageSectionTexts = document.querySelectorAll(".page-section__text");
  const screenPosition = window.innerHeight / 1.3;

  pageSectionTexts.forEach(function(text) {
    let textPosition = text.getBoundingClientRect().top;

    if (textPosition < screenPosition) {
      text.classList.add("page-section__text--is-visible");
    }
  });
}

window.addEventListener("scroll", scrollApear);
