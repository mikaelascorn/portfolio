'use strict';

$(function () {
  console.log('hello');
  $('.menu').click(function () {
    console.log('clicked');
    $('ul').toggleClass('active');
  });

  $('a').smoothScroll();
});