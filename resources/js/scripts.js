$(document).ready(function(){


    /* Sticky Navigation*/
    $('.js--section-about-me').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });

    /* Scroll on buttons */
    $('.js--scroll-to-about-me').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-about-me').offset().top}, 1000);
    });

    $('.js--scroll-to-books').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-books').offset().top}, 1000);
    });


    /* NAVIGATION SCROLLING */

// Select all links with hashes
    $(function() {
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="##"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });
    });


    /* ANIMATIONS ON SCROLL */

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');

    }, {
        offset:'50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');

    }, {
        offset:'50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');

    }, {
        offset:'50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');

    }, {
        offset:'50%'
    });


    /* Mobile nav */

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);
        if (icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });


});