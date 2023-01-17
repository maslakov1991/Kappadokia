$(function () {
    $('.fairy-tale__slider, .trip__slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev">​<img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next">​<img src="images/arrow-right.svg" alt=""></button>',
        autoplay: true,
        fade: true,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    arrows: false
                }
            },
        ]
    });
});