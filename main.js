
/*parallax scroller*/
$(window).scroll(function() {
    var y = $(this).scrollTop();
    $('.parallax').css('top', y * 0.5);
}
);

