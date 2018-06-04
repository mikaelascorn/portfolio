$(function () {

  $('.toggle').click( () => {
    
    $('.toggle').toggleClass('active');

    $('.hamburger').toggleClass('active')
  })


  $('form').on('submit', function () {
    $('.submit').hide();
    $('.thanks').show();
  });

  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });

  AOS.init({
    duration: 1200,
  });


});
