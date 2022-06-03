$(function() {
    // $('.card').each(function () {
    //     let ths = $(this);
    //     ths.find('.card').not(':first').hide();
    //     ths.find('.tab').click(function () {
    //         ths.find('.tab').removeClass('active').eq($(this).index()).addClass('active');
    //         ths.find('.card_tab').hide().eq($(this).index()).fadeIn()
    //     }).eq(0).addClass('active');
    // });
    
    // мені допомогла Марія з табами
    $(".game-rating").starRating({
    starSize: 25
    });
    $('.pie_chart').pieChart();
})