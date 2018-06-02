$(function () {
  console.log('hello');


  $('.toggle').click(function () {
    console.log('clicked');
    $('.toggle').toggleClass('active');
    $('ul').toggleClass('active');

  })

  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });

});