// Notes
alert("Note: This Beta Is Heavily Under Development, And Is Not Ready For Mobile.");
alert("Note: The Decorations/Styling Has Not Been Done Yet, And That Is Why It Looks Ugly.");

// Code For Website
$("body").ready(function() {

  var i = 0;

  while (i < 10) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);
    i++;

  }

});


$("body").hover(function () {

  var i = 0;

  while (i < 10) {

    $(".arrow-down").fadeToggle(1000).fadeToggle(1000);
    i++;

  }

});

$(window).scroll(function () {

  $("#navbar").addClass("navbar-position-fixed");
  
});
