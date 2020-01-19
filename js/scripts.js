$(document).ready(function(){
  $("#mycarousel").carousel( { interval: 2000 } );

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
  });

  // Open modal based on button clicked
  $('.openmodal').click(function(e) {
      e.preventDefault();

      var id = this.id,
           m = $('#' + id + '-modal');

      // Toggles modal, should always open it
      m.modal('toggle');
  });
});