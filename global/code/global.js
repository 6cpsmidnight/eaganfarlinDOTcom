// Loaded Popups
if (localStorage.getItem("acceptedCookies") === "yes") {

  // Google Analytics - Global site tag (gtag.js)
  (function (i, s, o, g, r, a, m) {

    i["GoogleAnalyticsObject"] = r;

    i[r] = i[r] || function () {

      (i[r].q = i[r].q || []).push(arguments)

    }, i[r].l = 1 * new Date();

    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];

    a.async = 1;

    a.src = g;

    m.parentNode.insertBefore(a, m);

  })(window, document, "script", "https://www.googletagmanager.com/gtag/js?id=UA-176695618-1", "ga");

  ga("create", "UA-XXXXX-Y", "auto");

  ga("send", "pageview");

  window.dataLayer = window.dataLayer || [];

  function gtag() {

    dataLayer.push(arguments);

  }

  gtag("js", new Date());

  gtag("config", "UA-176695618-1");

  // Google Analytics - Global site tag (gtag.js)
  (function (i, s, o, g, r, a, m) {

    i["GoogleAnalyticsObject"] = r;

    i[r] = i[r] || function () {

      (i[r].q = i[r].q || []).push(arguments)

    }, i[r].l = 1 * new Date();

    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];

    a.async = 1;

    a.src = g;

    m.parentNode.insertBefore(a, m);

  })(window, document, "script", "https://www.googletagmanager.com/gtag/js?id=UA-176695618-1", "ga");

  ga("create", "UA-XXXXX-Y", "auto");

  ga("send", "pageview");

  window.dataLayer = window.dataLayer || [];

  function gtag() {

    dataLayer.push(arguments);

  }

  gtag("js", new Date());

  gtag("config", "UA-176695618-1");

} else {

  Swal.fire({

    html: "This site uses cookies for analytic purposes, if you accept or close this you are agreeing to these terms.",
    toast: true,
    position: "bottom",
    width: "100vw",
    padding: "1.25rem 10% 1.25rem",
    showDenyButton: true,
    confirmButtonText: "<span class=\"swal2-accept-cookies-agree-button-text\">I Agree</span>",
    denyButtonText: "<a href=\"about:blank\" class=\"swal2-accept-cookies-decline-button-text\">Decline</span>",
    confirmButtonColor: "#d9fdde",
    denyButtonColor: "#ffe3e3",
    customClass: {
      container: "swal-2-accept-cookies-background-opacity"
    }

  }).then((result) => {

    if (result.isDenied) {

    } else {

      // Google Analytics - Import
      importGoogleAnalytics();

      // Accept Cookies - Accepted
      localStorage.setItem("acceptedCookies", "yes");

    }

  })

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

// Footer - Copy URL's URL Copier Popout
$(".footer-icon-copy-url").click(function () {

  Swal.fire({

    title: "<img src=\"/global/images/link-transparent-icon.svg\" class=\"footer-icon-link-copy-me\"> Copy Me",
    html: "https://eaganfarlin.com",
    showConfirmButton: true,
    confirmButtonText: "Done"

  })

});