// Down Arrow - Scroll
$(".arrow-down-1-button").click(function () {

  let widthOfScreen = $(window).width();

  if (widthOfScreen > 992) {

    window.scrollTo(0, 450)

  } else if (widthOfScreen < 992 && widthOfScreen > 767) {

    window.scrollTo(0, 360)

  } else if (widthOfScreen < 768) {

    window.scrollTo(0, 400)

  }

});

// NavBar - Attacher
navbarAttacher();

$(window).scroll(navbarAttacher);

function navbarAttacher() {

  // Checking What Y Level The Page Is On
  let yLevel = window.scrollY;

  // Checking What You Screen Width Is
  let widthOfScreen = $(window).width();

  if (widthOfScreen >= 992) {

    if (yLevel >= 430) {

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  } else if (widthOfScreen <= 992 && widthOfScreen >= 768) {

    if (yLevel >= 350) {

      $(".navbar").css("position", "fixed").css("top", "0.5rem");

    } else {

      $(".navbar").css("position", "static");

    }

  } else if (widthOfScreen <= 768) {

    if (yLevel >= 430) {

      $(".navbar").css("position", "fixed").css("top", "0.1rem");

    } else {

      $(".navbar").css("position", "static");

    }

  }

}

// Title - Loading
document.title = "Eagan Farlin, The Web Developer";