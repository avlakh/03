$(function (){
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.new_arrivals_slider').slick({
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 702,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
        ]
    })
    $('.our_partners_slider').slick({
        slidesToShow: 9,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                slidesToShow: 6,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                }
            },
            {
                breakpoint: 880,
                settings: {
                slidesToShow: 4,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 690,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    })
})