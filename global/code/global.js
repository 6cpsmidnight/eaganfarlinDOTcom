// Google Analytics - Global Site Tag (gtag.js)
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "UA-176695618-1");

// Loaded Popups
if (localStorage.getItem("acceptedCookies") !== "yes") {

  Swal.fire({

    html: "<span class=\"swal2-accept-cookies-text\">This site uses cookies to see how many lovely tourists there are! By continuing with your life or closing this you are agreeing to these terms.</span>",
    toast: true,
    position: "bottom",
    width: "100vw",
    padding: "1.25rem 10% 1.25rem",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "<span class=\"swal2-accept-cookies-agree-button-text swal2-accept-cookies-text\">I Agree</span>",
    denyButtonText: "<a href=\"about:blank\" class=\"swal2-accept-cookies-decline-button-text swal2-accept-cookies-text\">Decline</span>",
    cancelButtonText: "<span class=\"swal2-accept-cookies-x-button-text swal2-accept-cookies-text\">X</span>",
    confirmButtonColor: "#d9fdde",
    denyButtonColor: "#ffe3e3",
    cancelButtonColor: "var(--secondary-color)",
    customClass: {
      container: "swal2-accept-cookies",
      actions: "vertical-buttons",
      cancelButton: "vertical-buttons-top-margin",
      denyButton: "vertical-buttons-top-margin"
    }

  }).then((result) => {

    if (result.isDenied) {

    } else {

      // Sweet Alert Accepted Cookies - Remove Bottom Page Padding
      $(".sweet-alert-accept-cookies-bottom-page-padding").css("height", "0");

      $(document).scroll(function () {

        $(".sweet-alert-accept-cookies-bottom-page-padding").css("height", "0");

      });

      // Accept Cookies - Accepted
      localStorage.setItem("acceptedCookies", "yes");

    }

  })

  // Sweet Alert Accepted Cookies - Bottom Page Padding
  $(".sweet-alert-accept-cookies-bottom-page-padding").css("height", $(".swal2-accept-cookies").height());

  $(document).scroll(function () {

    $(".sweet-alert-accept-cookies-bottom-page-padding").css("height", $(".swal2-accept-cookies").height());

  });

}

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// NavBar - Dark Mode Toggle
let theme = localStorage.getItem("theme") || "light";

let applyTheme = (theme) => {

  document.documentElement.setAttribute("user-color-mode", theme);

  let themeSwitcherText = theme === "dark" ? "Let There Be Light!" : "Let Darkness Rain Supreme!";

  $(".theme-switcher-text").text(themeSwitcherText);

  navbarTogglerIconTheme();

}

function navbarTogglerIconTheme() {

  if (localStorage.getItem("theme") === "light") {

    $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-dark");

    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-light");

  } else if (localStorage.getItem("theme") === "dark") {

    $(".navbar-toggler-icon").removeClass("navbar-toggler-icon-light");

    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-dark");

  } else {

    $(".navbar-toggler-icon").addClass("navbar-toggler-icon-light");

  }

}

applyTheme(theme);

$(".theme-switch").click(function () {

  theme = theme === "light" ? "dark" : "light";

  localStorage.setItem("theme", theme);

  applyTheme(theme);

});

// Footer - Discord Tag Popup
$(".contact-link-icon-discord").click(function () {

  Swal.fire({

    title: "<img src=\"/global/images/discord-transparent-icon.svg\" class=\"contact-link-icons\">",
    html: "Midnight#1695"

  })

});

// Footer - Copy URL's URL Copier Popup
$(".contact-link-icon-copy-url").click(function () {

  Swal.fire({

    title: "<img src=\"/global/images/link-transparent-icon.svg\" class=\"contact-link-icon-copy-url\">",
    html: "https://eaganfarlin.com",
    confirmButtonText: "Done"

  })

});