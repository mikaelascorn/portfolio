$(function () {
  console.log('hello');

  $('.toggle').click(function () {
    console.log('clicked');
    $('.toggle').toggleClass('active');
    $('ul').toggleClass('active');

    const ul = $('ul');
    if (ul.hasClass('active')) {
      ul
        .fadeIn('ul')
        // .addClass('fa-times');
    } else {
      ul
        .fadeOut('ul')
        // .addClass('fa-bars');
    }

  })

  $('a').smoothScroll({
    offset: -40,
    speed: 600
  });

});