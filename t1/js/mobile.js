$(function () {
    $('.openM').on('click', function () {
        $('.mobile_menu').stop().animate({
            right: 0
        })
    })
    $('.close').on('click', function () {
        $('.mobile_menu').stop().animate({
            right: '-100%'
        })
    })
})
