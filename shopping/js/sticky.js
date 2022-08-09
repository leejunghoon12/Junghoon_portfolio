
    $(function () {
        var navTop = $(".nav-wrap").offset().top;
        $(window).scroll(function () {
            if ($(window).scrollTop() > navTop) {
                $(".nav-wrap").css({
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    padding:"0px 0px 0px 150px"
                });
            } else {
                $(".nav-wrap").css({
                    /*원래 있던 자리 */
                    top: "0px",
                    left: "0px",
                    padding:"0px 0px 0px 0px",
                    position: "static"
                });
            }
        });
    });
