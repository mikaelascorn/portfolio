'use strict';

$(function () {

  $('.toggle').click(function () {

    $('.toggle').toggleClass('active');
    $('ul').toggleClass('active');

    // if ('active' === true ) {
    //   console.log('true');
    //   $('.toggle').toggleClass('active');
    //   $('ul').fadeOut('active');    
    //   // $('ul').fadeOut('active')
    // } else {
    //   console.log('fallse');
    //   $('.toggle').toggleClass('active');
    //   $('ul').fadeIn('active');
    // }
  });

  $('form').on('submit', function () {
    $('.submit').hide();
    $('.thanks').show();
  });

  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });
});