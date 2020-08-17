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
