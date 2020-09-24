// Arrow Flashes
function arrowFlash() {

  arrowCounter = 0;

  while (arrowCounter < 5) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);

    arrowCounter++;

  }

}

// When The Page Starts, The Arrow Flashes For 5 Times
arrowFlash();

// When The Page Is Hovered On, The Arrow Flashes For 5 Times
$(window).hover(arrowFlash);

// When The Page Is Touched On, The Arrow Flashes For 5 Times
$(window).click(arrowFlash);

// When The Page Is Scrolled On, The Arrow Flashes For 5 Times
$(window).scroll(arrowFlash);

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

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  } else if (widthOfScreen < 768) {

    if (yLevel > 420) {

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  }

});