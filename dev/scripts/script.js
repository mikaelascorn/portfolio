$(function () {
  console.log('hello');
  $('.menu').click(function(){
    console.log('clicked');
    $('ul').toggleClass('active');
  })
  
  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });

});