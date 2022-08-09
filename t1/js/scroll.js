$(function () {
    let winHeight = $(window).height();
    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap section').on('mousewheel', function (e, d) {
        if (d > 0) { //스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) {//스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    })
})