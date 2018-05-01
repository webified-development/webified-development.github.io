$( document ).ready(function() {
   
    $('.hamburger').on('click', function () {
       $(this).toggleClass('open');
       $('main nav ul').toggleClass('open')
    })


});