// Notes
alert("Only the home page is properly styled, the rest is in heavy development.");

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// Footer - Copy URL's URL Copier
$(".footer-icon-copy-url").click(function () {

  prompt("Copy Me", "https://www.eaganfarlin.com/");

});

// Navigation Bar - About Me Link
$(".navbar-about-link").click(function () {

  // Checking What You Screen Width Is
  let widthOfScreen = $(window).width();

  if (widthOfScreen > 992) {

    window.scrollTo({
      top: 650,
      left: 0,
      behavior: "smooth"
    });

  } else if (widthOfScreen < 992 && widthOfScreen > 767) {

    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth"
    });

  } else if (widthOfScreen < 768) {

    window.scrollTo({
      top: 590,
      left: 0,
      behavior: "smooth"
    });

  }

})