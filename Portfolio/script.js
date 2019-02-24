$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $(".header-text").css({
    transform: "translate(0px," + wScroll / 7 + "%)"
  });

  $(".press").css({
    transform: "translate(0px," + -wScroll / 60 + "%)"
  });
});
