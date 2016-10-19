$(document).ready(function() {
    //site menu
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


    //typing
    $("#typed").typed({
        stringsElement: $('#typed-strings')
    });

    //click events for envelopes---mobile
    //on-click is slow and requires two taps to fire
    $(".envelope").on("touchstart", function() {
        $(this).children(".card").toggleClass("active");
    });


    //hover events for envelopes
    $(".envelope").on("mouseenter", function() {
        $(this).children(".card").addClass("active");
    });
    $(".envelope").on("mouseleave", function() {
        $(this).children(".card").removeClass("active");
    });



});
