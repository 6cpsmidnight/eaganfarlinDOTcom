// Google Analytics - Global Site Tag (gtag.js)
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "UA-176695618-1");

// Accept Cookies Popup
if (localStorage.getItem("acceptedCookies") !== "yes") {

  Swal.fire({

    html: "This site uses cookies to see how many ♥ly tourists there are! By continuing with your life or closing this you are agreeing to these terms.",
    toast: true,
    position: "bottom",
    width: "100vw",
    padding: "1.25rem 10% 1.25rem",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "<span class=\"swal2-accept-cookies-agree-button-text\">I Agree</span>",
    denyButtonText: "<a href=\"about:blank\" class=\"swal2-accept-cookies-decline-button-text\">Decline</span>",
    cancelButtonText: "<span class=\"swal2-accept-cookies-x-button-text\">X</span>",
    confirmButtonColor: "#d9fdde",
    denyButtonColor: "#ffe3e3",
    cancelButtonColor: "var(--secondary-color)",
    customClass: {
      container: "swal2-accept-cookies",
      actions: "vertical-buttons",
      denyButton: "vertical-buttons-top-margin",
      cancelButton: "vertical-buttons-top-margin"
    }

  }).then((result) => {

    if (result.isDenied) {

    } else {

      // NavBar - Remove Bottom Fixed Page Padding
      $("nav").css("bottom", "0");

      // Accept Cookies Popup - Remove Bottom Page Padding
      $(".sweet-alert-accept-cookies-page-padding").css("height", "0");

      // Accept Cookies - Accepted
      localStorage.setItem("acceptedCookies", "yes");

    }

  });

  // NavBar - Bottom Padding

  $("nav").css("bottom", parseInt($(".swal2-accept-cookies").height(), 10) + 10);

  // Accept Cookies Popup - Bottom Page Padding
  $(".sweet-alert-accept-cookies-page-padding").css("height", $(".swal2-accept-cookies").height());

  window.addEventListener("resize", function () {

    setTimeout(() => {

      $("nav").css("bottom", parseInt($(".swal2-accept-cookies").height(), 10) + 10);

      $(".sweet-alert-accept-cookies-page-padding").css("height", $(".swal2-accept-cookies").height());

    }, 200);

  });

}

// Loading Screen - Fades Out
$(document).ready(function () {

  $("#loading-screen").remove();

});

// NavBar - Width
let themeSwitchButtonTextWidth;

let windowWidth;

function navBarWidthChanger() {

  themeSwitchButtonTextWidth = $(".theme-switch").text().length;

  windowWidth = $(window).width();

  if (windowWidth <= 768) {

    if (themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width() < windowWidth / 2) {

      $("nav").css("width", themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width());

    } else {

      $("nav").css("width", windowWidth / 2);

    }

  } else if (windowWidth <= 993) {

    if (themeSwitchButtonTextWidth * 18.6 + $(".theme-switcher-img").width() < windowWidth * 0.7) {

      $("nav").css("width", themeSwitchButtonTextWidth * 18.6 + $(".theme-switcher-img").width());

    } else {

      $("nav").css("width", windowWidth * 0.7);

    }

  } else {

    if (themeSwitchButtonTextWidth * 16.8 + $(".theme-switcher-img").width() < windowWidth * 0.3) {

      $("nav").css("width", themeSwitchButtonTextWidth * 16.8 + $(".theme-switcher-img").width());

    } else {

      $("nav").css("width", windowWidth * 0.3);

    }

  }

}

navBarWidthChanger();

window.addEventListener("resize", function () {

  setTimeout(() => {

    navBarWidthChanger();

  }, 200);

});

// NavBar - Close Dropdown Menus When Out Of Focus
const nav = document.querySelector("nav");

const navDropdownMenu = document.querySelectorAll(".nav-dropdown-menu");

navDropdownMenu.forEach((navDropdownMenu) => {

  document.addEventListener("click", (e) => {

    if (!nav.contains(e.target)) {

      navDropdownMenu.removeAttribute("open");

    }

  });

});

// NavBar - Open Only Dropdown Menu 1 Menu At A Time
navDropdownMenu.forEach((targetNavbarDropdownMenu) => {

  targetNavbarDropdownMenu.addEventListener("click", () => {

    navDropdownMenu.forEach((navbarDropdownMenu) => {

      navbarDropdownMenu !== targetNavbarDropdownMenu && navbarDropdownMenu.removeAttribute("open");

    });

  });

});

// NavBar - Dark Mode Toggle
let theme = localStorage.getItem("theme") || "light";

let applyTheme = (theme) => {

  document.documentElement.setAttribute("user-color-mode", theme);

  let themeSwitcherText = theme === "dark" ? "Let There Be Light!" : "The Light, It Burns!";

  $(".theme-switcher-text").text(themeSwitcherText);

  navBarWidthChanger();

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