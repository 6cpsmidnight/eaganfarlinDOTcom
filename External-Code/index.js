// Notes
alert("This site is under heavy development and is not ready for mobile.");

// Arrow Flashes
// When The Page Starts, Arrow Flashes For 5 Times
let arrowCounter = 0;

while (arrowCounter < 5) {

  $(".arrow-down").fadeToggle(1000).fadeToggle(1000);

  arrowCounter++;

}

// When The Page Is Hovered On, Arrow Flashes For 5 Times
$("body").hover(function () {

  arrowCounter = 0;

  while (arrowCounter < 5) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);

    arrowCounter++;

  }

});

// Responsive Navigation Bar Attacher
$(window).scroll(function () {

  // Checking What Y Level The Page Is On
  let yLevel = window.scrollY;

  let widthOfScreen = $(window).width();

  if (widthOfScreen > 992) {

    if (yLevel > 629) {

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  } else if (widthOfScreen < 992 && widthOfScreen > 767) {

    if (yLevel > 810) {

      $(".navbar").css("position", "fixed").css("top", "0rem");

    } else {

      $(".navbar").css("position", "static");

    }

  } else if (widthOfScreen < 768) {

    if (yLevel > 580) {

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  }

});

// Copy URL's URL Copier
$(".footer-icon-copy-url").click(function () {

  prompt("Copy Me", "https://www.eaganfarlin.com");

});