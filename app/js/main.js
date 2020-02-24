$(function() {
    $('.search__date input').datepicker({
        inline: false,
        position: "bottom right"
    });

    $('select, input[type="checkbox"]').styler();

    $('.events__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-next.svg" alt=""></button>'
    });
});