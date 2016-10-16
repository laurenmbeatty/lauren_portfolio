$(document).ready(function() {
    $(".hamburger").on("click", function() {

        if ($(".slidedown-menu").is(":visible")) {
            $(this).toggleClass("is-active");
            $(".slidedown-menu").fadeOut();
            $(".site-header").animate({
                height: "0px"
            }, {
                duration: 500,
                queue: false
            });
        } else {
            $(this).toggleClass("is-active");
            $(".site-header").animate({
                height: "2000px"
            }, {
                duration: 500,
                queue: false
            });

            $(".slidedown-menu").fadeIn();
        }
    });

    $("#typed").typed({
        stringsElement: $('#typed-strings')
    });


});
