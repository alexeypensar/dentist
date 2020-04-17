
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    focusOnSelect: true,
    cssEase: 'linear',
    touchMove: true,
    prevArrow:'<button class="slick-prev"></button>',
    nextArrow:'<button class="slick-next"></button>',
    speed: 100,
    // centerPadding: '0px',




    //         responsive: [
    //             {
    //               breakpoint: 576,
    //               settings: {
    //                 centerMode: false,
    //                 variableWidth: false,
    //               }
    //             },
    //         ]
});


let imgs = $('.slider img');
imgs.each(function(){
    let item = $(this).closest('.item');
    item.css({
        'background-image': 'url(' + $(this).attr('src') + ')',
        'background-position': 'center',
        '-webkit-background-size': 'cover',
        'background-size': 'cover'
    });
    $(this).hide();
});

// feedback show-more block script
$(document).ready(function() {
    $('#feedbackShowMore').on('click', function() {
        $('.feedback__list_hided').css('display', 'flex');
        $(this).css('display', 'none');
    })
});
