// Google Analytics
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

      // NavBar
      $("nav").css("bottom", "0");

      // Accept Cookies Popup
      $(".sweet-alert-accept-cookies-page-padding").css("height", "0");

      // Accept Cookies
      localStorage.setItem("acceptedCookies", "yes");

    }

  });

  // NavBar
  $("nav").css("bottom", parseInt($(".swal2-accept-cookies").height(), 10) + 10);

  // Accept Cookies Popup
  $(".sweet-alert-accept-cookies-page-padding").css("height", $(".swal2-accept-cookies").height());

  window.addEventListener("resize", function () {

    setTimeout(() => {

      $("nav").css("bottom", parseInt($(".swal2-accept-cookies").height(), 10) + 10);

      $(".sweet-alert-accept-cookies-page-padding").css("height", $(".swal2-accept-cookies").height());

    }, 200);

  });

}

// Loading Screen
$(document).ready(function () {

  $("#loading-screen").remove();

});

// NavBar
let themeSwitchButtonTextWidth;

let windowWidth;

let navbarToggle = document.getElementsByClassName("navbar-toggle")[0];

let navbarToggleNum = 0;

let navbarToggleImg = document.getElementsByClassName("navbar-toggle-img")[0];

function navBarWidthChanger() {

  themeSwitchButtonTextWidth = $(".theme-switch").text().length;

  windowWidth = $(window).width();

    if (navbarToggleNum === 0 && windowWidth <= 768) {

      $("nav").css("width", navbarToggleImg.offsetWidth * 1.8);

    } else if (navbarToggleNum !== 0 && windowWidth <= 768 && themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width() < windowWidth / 2) {

      $("nav").css("width", themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width());

    } else if (navbarToggleNum === 0 && windowWidth <= 768 && themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width() > windowWidth / 2) {

      $("nav").css("width", navbarToggleImg.offsetWidth * 1.5);

    } else if (navbarToggleNum !== 0 && windowWidth <= 768 && themeSwitchButtonTextWidth * 18 + $(".theme-switcher-img").width() > windowWidth / 2) {

      $("nav").css("width", windowWidth / 2);

    } else if (navbarToggleNum === 0 && windowWidth <= 992) {

      $("nav").css("width", navbarToggleImg.offsetWidth * 1.75);

    } else if (navbarToggleNum !== 0 && windowWidth <= 992 && themeSwitchButtonTextWidth * 18.6 + $(".theme-switcher-img").width() < windowWidth * 0.7) {

      $("nav").css("width", themeSwitchButtonTextWidth * 18.6 + $(".theme-switcher-img").width());

    } else if (navbarToggleNum !== 0 && windowWidth <= 992 && themeSwitchButtonTextWidth * 18.6 + $(".theme-switcher-img").width() > windowWidth * 0.7) {

      $("nav").css("width", windowWidth * 0.7);

    } else if (navbarToggleNum === 0 && windowWidth > 992) {

      $("nav").css("width", navbarToggleImg.offsetWidth * 1.7);

    } else if (navbarToggleNum !== 0 && windowWidth <= themeSwitchButtonTextWidth * 16.8 + $(".theme-switcher-img").width() < windowWidth * 0.3) {

      $("nav").css("width", themeSwitchButtonTextWidth * 16.8 + $(".theme-switcher-img").width());

    } else if (navbarToggleNum !== 0 && windowWidth <= themeSwitchButtonTextWidth * 16.8 + $(".theme-switcher-img").width() > windowWidth * 0.3) {

      $("nav").css("width", windowWidth * 0.3);

    }

}

navBarWidthChanger();

window.addEventListener("resize", function () {

  setTimeout(() => {

    navBarWidthChanger();

  }, 200);

});

navbarToggle.addEventListener("click", function () {
  
  if (navbarToggleNum === 0){
  
    navbarToggleImg.classList.remove("navbar-toggle-rotate-0")
    
    navbarToggleImg.classList.add("navbar-toggle-rotate-180");

    navbarToggleNum++;
  
  } else {
  
    navbarToggleImg.classList.remove("navbar-toggle-rotate-180")

    navbarToggleImg.classList.add("navbar-toggle-rotate-0");

    navbarToggleNum--;
  
  }

  navBarWidthChanger();
  
});

const nav = document.querySelector("nav");

const navDropdownMenu = document.querySelectorAll(".nav-dropdown-menu");

navDropdownMenu.forEach((navDropdownMenu) => {

  document.addEventListener("click", (e) => {

    if (!nav.contains(e.target)) {

      navDropdownMenu.removeAttribute("open");

    }

  });

});

navDropdownMenu.forEach((targetNavbarDropdownMenu) => {

  targetNavbarDropdownMenu.addEventListener("click", () => {

    navDropdownMenu.forEach((navbarDropdownMenu) => {

      navbarDropdownMenu !== targetNavbarDropdownMenu && navbarDropdownMenu.removeAttribute("open");

    });

  });

});

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

// Footer
$(".contact-link-icon-discord").click(function () {

  Swal.fire({

    title: "<img src=\"/global/images/discord-transparent-icon.svg\" class=\"contact-link-icons\">",
    html: "Midnight#1695"

  })

});

$(".contact-link-icon-copy-url").click(function () {

  Swal.fire({

    title: "<img src=\"/global/images/link-transparent-icon.svg\" class=\"contact-link-icon-copy-url\">",
    html: "https://eaganfarlin.com",
    confirmButtonText: "Done"

  })

});