// Notes
alert("Note: This Beta Is Heavily Under Development, And Is Not Ready For Mobile.");

// Code For Website
$("body").ready(function() {

  var i = 0;

  while (i < 10) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);
    i++;

  }

});


$("body").hover(function() {

  var i = 0;

  while (i < 10) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);
    i++;

  }

});

$(window).scroll(function() {

  var yLevel = window.scrollY;
  console.log(yLevel);

  if (yLevel > 624){

    $(".navbar").css("position", "fixed").css("top", "1px");

  } else {

    $(".navbar").css("position", "static");

  }

});
