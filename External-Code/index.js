// Notes
alert("This site is under heavy development and is not ready for mobile.");

var yLevel = window.scrollY;

console.log("For testing purposes: your Y Level is " + yLevel + ".");

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

  console.log("For testing purposes: your Y Level is " + yLevel + ".");

  if (yLevel > 629) {

    $(".navbar").css("position", "fixed").css("top", "0.5rem");

  } else {

    $(".navbar").css("position", "static");

  }

});

$(".footer-icon-copy-url").click(function() {

  prompt("Copy Me", "https://www.eaganfarlin.com");

});
