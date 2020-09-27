// Notes
alert("Only the home page is properly styled, the rest is in heavy development.");

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// Footer - Copy URL's URL Copier
$(".footer-icon-copy-url").click(function () {

  prompt("Copy Me", "https://www.eaganfarlin.com/");

});