$(function () {

  $('.toggle').click( () => {
    
    // $('.toggle').toggleClass('active');

    $('ul').toggleClass('active', () => {
      if ($(this).is(':hidden')) {
        $(this).slideDown('slow');
      } else {
        $(this).fadeOut('fast');
      };
    })
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
