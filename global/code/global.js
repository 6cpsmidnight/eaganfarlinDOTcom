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

      $(".sweet-alert-accept-cookies-page-padding").css("height", $(".swal2-accept-cookies").height());

      $("nav").css("bottom", parseInt($(".swal2-accept-cookies").height(), 10) + 10);

    }, 200);

  });

}

// Loading Screen - Fades Out
$(document).ready(function () {

  $("#loading-screen").remove();

});

// NavBar - Width
let themeSwitchButtonWidth = $(".theme-switch").width();

function navBarWidthChanger() {

  if ($(window).width() <= 768) {

    if (themeSwitchButtonWidth < $(window).width() / 2) {

      $("nav").css("width", themeSwitchButtonWidth);

    } else {

      $("nav").css("width", $(window).width() / 2);

    }

  } else if ($(window).width() <= 993) {

    if (themeSwitchButtonWidth < $(window).width() * 0.7) {

      $("nav").css("width", themeSwitchButtonWidth);

    } else {

      $("nav").css("width", $(window).width() * 0.7);

    }

  } else {

    if (themeSwitchButtonWidth < $(window).width() * 0.3) {

      $("nav").css("width", themeSwitchButtonWidth);

    } else {

      $("nav").css("width", $(window).width() * 0.3);

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

  let themeSwitcherText = theme === "dark" ? "Let There Be Light!" : "Let Darkness Rain Supreme!";

  $(".theme-switcher-text").text(themeSwitcherText);

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