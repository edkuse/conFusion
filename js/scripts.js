$(document).ready(function(){
    $("#carouselButton").click(function(){
          if ($("#carouselButton").children("span").hasClass('fa-pause')) {
              $("#mycarousel").carousel('pause');
              $("#carouselButton").children("span").removeClass('fa-pause');
              $("#carouselButton").children("span").addClass('fa-play');
          }
          else if ($("#carouselButton").children("span").hasClass('fa-play')){
              $("#mycarousel").carousel('cycle');
              $("#carouselButton").children("span").removeClass('fa-play');
              $("#carouselButton").children("span").addClass('fa-pause');
          }
      return;
    });

    $("#login-button").click(function(){
      $("#loginmodal").modal('toggle');
    });

    $("#reservetbl-button").click(function(){
      $("#reserve-modal").modal('toggle');
    });

  });
  