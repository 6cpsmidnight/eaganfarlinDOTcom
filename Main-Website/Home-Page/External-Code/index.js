var yLevel = window.scrollY;

var i = 0;

while (i < 10) {

  $(".arrow-down").fadeToggle(1000).fadeToggle(1000);
  i++;

}


$("body").hover(function() {

  var i = 0;

  while (i < 10) {

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
