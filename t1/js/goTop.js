$(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 2000) {
            $(".goTop").fadeIn(500);
        } else {
            $(".goTop").fadeOut(500);
        }
    });


    $(".goTop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
    });
});