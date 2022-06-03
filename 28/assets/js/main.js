$(function (){
    $('.main_slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    $('.new_arrivals_slider').slick({
        slidesToShow: 5,
    })
})