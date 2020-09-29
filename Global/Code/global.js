// Notes
Swal.fire(
  "In Beta!",
  "Only the home page is properly styled, the rest is in heavy development.",
  "warning"
)

// Loading Screen - Fades Out
$("#loading-screen").fadeOut(1000);

// Footer - Copy URL's URL Copier
$(".footer-icon-copy-url").click(function () {

  Swal.fire(
    "Copy Me",
    "https://eaganfarlin.com"
  )

});