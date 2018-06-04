'use strict';

$(function () {
  var _this = this;

  $('.toggle').click(function () {

    // $('.toggle').toggleClass('active');

    $('ul').toggleClass('active', function () {
      if ($(_this).is(':hidden')) {
        $(_this).slideDown('fast');
      } else {
        $(_this).fadeOut('fast');
      };
    });
  });

  $('form').on('submit', function () {
    $('.submit').hide();
    $('.thanks').show();
  });

  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });

  AOS.init({
    duration: 1200
  });
});