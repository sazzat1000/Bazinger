$(document).ready(function () {

    // Back to Top Buttton

    $(window).scroll(function() {
        if($(this).scrollTop() > 350) {
          $(".up").fadeIn();
        }else {
          $(".up").fadeOut();
        }
      });
    
      $(".up").click(function() {
        $("html, body").animate({scrollTop: 0},1000);
      });



});