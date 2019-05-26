//scroller-top behaviour
class ScrollerTop {
  static scrollerTopApear() {
    const scrollerTop = document.querySelector(".scroller-top"),
      scrollerTopPosition =
        window.innerHeight - scrollerTop.getBoundingClientRect().top;

    if (window.scrollY > scrollerTopPosition) {
      scrollerTop.classList.add("scroller-top--is-active");
    } else {
      scrollerTop.classList.remove("scroller-top--is-active");
    }
  }
  static scrollerTopFixed() {
    const scrollerTop = document.querySelector(".scroller-top");
    const siteFooter = document.querySelector(".site-footer");
    const maxScroll = document.body.offsetHeight - window.innerHeight;

    if (window.scrollY > maxScroll - siteFooter.offsetHeight + 50) {
      scrollerTop.classList.add("scroller-top--reached-bottom");
    } else {
      scrollerTop.classList.remove("scroller-top--reached-bottom");
    }
  }
}

window.addEventListener("scroll", ScrollerTop.scrollerTopApear);
window.addEventListener("scroll", ScrollerTop.scrollerTopFixed);
