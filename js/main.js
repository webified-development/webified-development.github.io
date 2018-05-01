$( document ).ready(function() {
    $(function() {
        $(".rslides").responsiveSlides();
      });
   
    $('.hamburger').on('click', function () {
       $(this).toggleClass('open');
       $('main nav ul').toggleClass('open')
    })


});