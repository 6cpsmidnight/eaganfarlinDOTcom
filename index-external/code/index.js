// Down Chevron - Scroll
$(".chevron-down-button").click(function () {
  window.scrollTo({
    top: $("#im-eagan-farlin").height(),
    behavior: "smooth"
  });
});

// TODO: When scrolling down after initial load automatically scroll to about me text
// window.addEventListener("scroll", function () {

//   // let yLevel = window.scrollY;

//     if (window.scrollY < $("#im-eagan-farlin").height()) {
//       window.scrollTo({
//         top: $("#im-eagan-farlin").height(),
//         behavior: "smooth"
//       });
//     }

// });

// NavBar - Attacher
navbarAttacher = () => {
  // Checking What Y Level The Page Is On
  let yLevel = window.scrollY;
  // Checking What Your Screen Width Is
  let widthOfScreen = $(window).width();

  switch (widthOfScreen) {
    case widthOfScreen >= 992:
      if (yLevel >= 430) {
        $(".navbar").css("position", "fixed").css("top", "0.5rem");
      } else {
        $(".navbar").css("position", "static");
      }
      break;
    case widthOfScreen <= 992 && widthOfScreen >= 768:
      if (yLevel >= 350) {
        $(".navbar").css("position", "fixed").css("top", "0.5rem");
      } else {
        $(".navbar").css("position", "static");
      }
      break;
    case widthOfScreen <= 768:
      if (yLevel >= 430) {
        $(".navbar").css("position", "fixed").css("top", "0.1rem");
      } else {
        $(".navbar").css("position", "static");
      }
      break;
  }
}

navbarAttacher();
window.addEventListener("scroll", navbarAttacher);

// Title - Loading
document.title = "Eagan Farlin, The Web Developer";