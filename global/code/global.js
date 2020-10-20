// Loaded Popups
if (localStorage.getItem("acceptedCookies") === "yes") {

  if (sessionStorage.getItem("infoPopup") === "ok") {

  } else {

    Swal.fire({

      title: "<span class=\"bold\">In Beta!</span>",
      icon: "info",
      html: "Only the home page is properly styled, the rest is in heavy development.",

    }).then((result) => {

      if (result.isConfirmed) {

        sessionStorage.setItem("infoPopup", "ok");

      }

    })

  }

} else {

  Swal.fire({

    html: "This site uses Google Analytics (which uses cookies) to improve your experience, if you continue you are agreeing to these terms.",
    showDenyButton: true,
    confirmButtonText: "<span class=\"swal2-beta-popup-agree-button-text\">I Agree</span>",
    denyButtonText: "<span class=\"swal2-beta-popup-decline-button-text\">Decline</span>",
    confirmButtonColor: "#82c21f",
    denyButtonColor: "#e83e8c"

  }).then((result) => {

    if (result.isConfirmed) {

      Swal.fire({

        title: "<span class=\"bold\">In Beta!</span>",
        icon: "info",
        html: "Only the home page is properly styled, the rest is in heavy development.",

      }).then((result) => {

        if (result.isConfirmed) {

          sessionStorage.setItem("infoPopup", "ok");

        }

      })

      localStorage.setItem("acceptedCookies", "yes");

    } else if (result.isDenied) {

      location.replace("about:newtab");

    }

  })

}

// Google Analytics - Global site tag (gtag.js)
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-176695618-1');

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// Footer - Copy URL's URL Copier Popout
$(".footer-icon-copy-url").click(function () {

  Swal.fire({

    title: "<img src=\"/Global/Images/Link-Transparent.png\" class=\"footer-icon-link-copy-me\"> Copy Me",
    html: "https://eaganfarlin.com",
    showConfirmButton: true,
    confirmButtonText: "Done"

  })

});

// Dark Mode - Toggle
let mode = localStorage.getItem("mode") || "light";

let applyMode = (mode) => {

  document.documentElement.setAttribute("user-color-mode", mode);

  let themeSwitcherText = mode === "dark" ? "Let There Be Light!" : "Let Darkness Rain Supreme!";

  $(".theme-switcher-text").text(themeSwitcherText);

  navbarTogglerIconTheme();

}

function navbarTogglerIconTheme() {

  if (localStorage.getItem("mode") === "light") {

    $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-dark");

    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-light");

  } else if (localStorage.getItem("mode") === "dark") {

    $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-light");

    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-dark");

  }

}

applyMode(mode);

$(".theme-switch").click(function () {

  mode = mode === "light" ? "dark" : "light";

  localStorage.setItem("mode", mode);

  applyMode(mode);

});

// Website Blocker For Dad
if (localStorage.getItem("websiteBlockerForDad" === "yes")) {

  location.reload("about:newtab");

}