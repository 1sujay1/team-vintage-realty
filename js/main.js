/*

Page: main JS
Author: Surjith S M
URI: http://surjithctly.in/
Version: 1.0

*/

(function($) {
    "use strict";


    /* ============= Preloader Close on Click ============= */

    if ($('.loader-wrapper').length) {
        $('.loader-wrapper').on('click', function() {
            $(this).fadeOut();
        });
    }

    /* ============= Homepage Slider ============= */
    if ($('.flexslider').length) {
        $('.flexslider').flexslider({
            animation: "fade"
        });
    }
    /* ============= Partner Logo Carousel ============= */
    if ($('.logo-slides').length) {
        $(".logo-slides").owlCarousel({
            autoplay: true,
            autoplayTimeout: 3000,
            loop: true,
            margin: 10,
            nav: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                767: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }

        });
    }

    /* ============= Percentage Slider ============= */

    if ($('#skills').length) {

        var skillsDiv = $('#skills');

        $(window).on('scroll', function() {
            var winT = $(window).scrollTop(),
                winH = $(window).height(),
                skillsT = skillsDiv.offset().top;
            if (winT + winH > skillsT) {
                $('.skillbar').each(function() {
                    $(this).find('.skillbar-bar').animate({
                        width: $(this).attr('data-percent')
                    }, 2000);
                });
            }
        });

    }

    /* ============= Service Slider ============= */

    if ($('.service-slider').length) {
        $('.service-slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: true,
            touch: true
        });
    }
    /* ============= Blog Slider ============= */
    if ($('.blog-slide').length) {
        $('.blog-slide').flexslider({
            controlNav: false,
            animation: "slide"
        });
    }

    /* ============= Stats Counter ============= */
    if ($('.counter').length) {
        $('.counter').counterUp({
            delay: 10,
            time: 1500
        });
    }


    $(window).load(function() {

        /* ============= Preloader ============= */

        if ($('.loader-wrapper').length) {
            $('.loader-wrapper').fadeOut();
        }


    }); // End Window.Load

})(jQuery);

const whatsappLink = document.createElement('a');
whatsappLink.href = 'https://wa.me/916364840379'; // Replace with your WhatsApp number
whatsappLink.target = '_blank';
whatsappLink.style.position = 'fixed';
whatsappLink.style.bottom = '20px';
whatsappLink.style.right = '20px';
whatsappLink.style.zIndex = '9999';
whatsappLink.style.width = '60px';
whatsappLink.style.height = '60px';
whatsappLink.style.borderRadius = '50%';
whatsappLink.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
whatsappLink.style.backgroundColor = '#25D366';
whatsappLink.style.display = 'flex';
whatsappLink.style.justifyContent = 'center';
whatsappLink.style.alignItems = 'center';
whatsappLink.style.textDecoration = 'none';

// ✅ Create icon image
const icon = document.createElement('img');
icon.src = '/images/WhatsAppSVG.svg';
icon.alt = 'WhatsApp Chat';
icon.style.width = '30px';
icon.style.height = '30px';

whatsappLink.appendChild(icon);
document.body.appendChild(whatsappLink);