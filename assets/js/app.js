$(".slick-slider").slick({
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 2000,
  prevArrow: $(".r_arrow"),
            nextArrow: $(".l_arrow"),
})



var btn = $('#button');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});