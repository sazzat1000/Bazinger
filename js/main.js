$(document).ready(function () {

  $(window).on("load", function () {
    $("#preloader").fadeOut(1500);
  })

  // Back to Top Buttton

  $(window).scroll(function () {
    if ($(this).scrollTop() > 350) {
      $(".up").fadeIn();
    } else {
      $(".up").fadeOut();
    }
  });

  $(".up").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });

  new WOW().init();

  $(".gallery-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: "<i class='fas fa-chevron-left  gallery-prev'></i>",
    nextArrow: "<i class='fas fa-chevron-right gallery-next'></i>",
    draggable: false,
    nfinite: true,
    speed: 500,
  });
  var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
  });
});
