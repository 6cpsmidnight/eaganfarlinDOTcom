// Notes
alert("This site is under heavy development and is not ready for mobile.");

var yLevel = window.scrollY;

var i = 0;

while (i < 5) {

  $(".arrow-down").fadeToggle(1000).fadeToggle(1000);

  i++;

}


$("body").hover(function() {

  var i = 0;

  while (i < 5) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);

    i++;

  }

});

$(window).scroll(function() {

  yLevel = window.scrollY;
  console.log(yLevel);

  if (yLevel > 629) {

    $(".navbar").css("position", "fixed").css("top", "0.5rem");

  } else {

    $(".navbar").css("position", "static");

  }

});

// $(".a-navbar-github-icon").click(function () {
//
//   alert("Thanks to Picture Perfect on Flaticon for this Icon!");
//   window.open("https://github.com/Cyber1012");
//
// });
//
// $(".footer-icons").click(function () {
//
//   alert("Thanks to Picture Perfect on Flaticon for this Icon!");
//
// });
//
// $(".footer-icon-github").click(function () {
//
//   window.open("https://github.com/Cyber1012");
//
// });
//
// $(".footer-icon-gmail").click(function () {
//
//   window.open("mailto:farlineagan@gmail.com");
//
// });
//
// $(".footer-site-info-icons").click(function () {
//
//   alert("Thanks to Picture Perfect on Flaticon for this Icon!");
//
// });
//
// $(".footer-site-info-icons-youtube").click(function () {
//
//   window.open("https://www.youtube.com/channel/UCn8p9E5e_yQO24g1Z3F7mYg");
//
// });
//
// $(".footer-site-info-icons-pintrest").click(function () {
//
//   window.open("https://www.pintrest.com/thislittleshadow");
//
// });
