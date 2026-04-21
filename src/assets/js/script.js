/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Hossain
Template Name: Nino - Premium Portfolio Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/


(function ($) {
    "use strict";


    /*
     * ----------------------------------------------------------------------------------------
     *  EXTRA JS
     * ----------------------------------------------------------------------------------------
     */



    /*
     * ----------------------------------------------------------------------------------------
     *  MAGNIFIC POPUP JS
     * ----------------------------------------------------------------------------------------
     */



    /*
     * ----------------------------------------------------------------------------------------
     *  SCROOL TO UP JS
     * ----------------------------------------------------------------------------------------
     */

    // var progressPath = document.querySelector('.progress-wrap path');
    // var pathLength = progressPath.getTotalLength();
    // progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    // progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    // progressPath.style.strokeDashoffset = pathLength;
    // progressPath.getBoundingClientRect();
    // progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    // var updateProgress = function() {
    //     var scroll = $(window).scrollTop();
    //     var height = $(document).height() - $(window).height();
    //     var progress = pathLength - (scroll * pathLength / height);
    //     progressPath.style.strokeDashoffset = progress;
    // }
    // updateProgress();
    //
    //
    // $(window).scroll(updateProgress);
    // var offset = 150;
    // var duration = 550;
    // jQuery(window).on('scroll', function() {
    //     if (jQuery(this).scrollTop() > offset) {
    //         jQuery('.progress-wrap').addClass('active-progress');
    //     } else {
    //         jQuery('.progress-wrap').removeClass('active-progress');
    //     }
    // });
    // jQuery('.progress-wrap').on('click', function(event) {
    //     event.preventDefault();
    //     jQuery('html, body').animate({
    //         scrollTop: 0
    //     }, duration);
    //     return false;
    // })

    /* ==========================================================================
                       SCROLLER ANIMATION
    ========================================================================== */





    /*
     * ----------------------------------------------------------------------------------------
     *  SMOTH SCROOL JS
     * ----------------------------------------------------------------------------------------
     */


    /*
     * ----------------------------------------------------------------------------------------
     *  Lenis JS
     * ----------------------------------------------------------------------------------------
     */
    const lenis = new Lenis()


    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)







    // ## Nice Select



    // ## WOW Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }




    /*
     * ----------------------------------------------------------------------------------------
     *  AJAX CONTACT JS
     * ----------------------------------------------------------------------------------------
     */



    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            if ($('.main-header').length) {
                var windowpos = $(window).scrollTop();
                var siteHeader = $('.main-header');
                var scrollLink = $('.scroll-top');
                if (windowpos >= 100) {
                    siteHeader.addClass('fixed-header');
                    scrollLink.fadeIn(300);
                } else {
                    siteHeader.removeClass('fixed-header');
                    scrollLink.fadeOut(300);
                }
            }
        }

        headerStyle();

    });



    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {


        const svg = document.getElementById("preloaderSvg");
        const tl = gsap.timeline();
        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        tl.to(".preloader-heading .load-text , .preloader-heading .cont", {
            delay: 0.1,
            y: -100,
            opacity: 0,
        });
        tl.to(svg, {
            duration: 0.3,
            attr: { d: curve },
            ease: "power2.easeIn",
        }).to(svg, {
            duration: 0.3,
            attr: { d: flat },
            ease: "power2.easeOut",
        });
        tl.to(".preloader", {
            duration: 0.3,
            y: -1500,
        });
        tl.to(".preloader", {
            zIndex: -1,
            display: "none",
        });


    });

    /*
     * ----------------------------------------------------------------------------------------
     *  CUSTOM CURSOR JS
     * ----------------------------------------------------------------------------------------
     */
    const cursorBall = document.getElementById('ball');

    const xTo = gsap.quickTo(cursorBall, "x", {duration: 0.3, ease: 'power2.out'});
    const yTo = gsap.quickTo(cursorBall, "y", {duration: 0.3, ease: 'power2.out'});

    document.addEventListener('mousemove', function (e) {
        xTo(e.clientX);
        yTo(e.clientY);
        if (cursorBall.style.opacity !== "1") {
            gsap.set(cursorBall, { opacity: 1 });
        }
    });

    // Hover effect on elements
    const hoverElements = document.querySelectorAll('a');
    hoverElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            // Animate cursorBall on mouseenter
            cursorBall.classList.add('hovered');
            gsap.to(cursorBall, {
                duration: 0.3,
                scale: 2, // Increase scale
                opacity: 0, // Set opacity to 0
                ease: 0.1
            });
        });

        element.addEventListener('mouseleave', function () {
            // Restore cursorBall on mouseleave
            cursorBall.classList.remove('hovered');
            gsap.to(cursorBall, {
                duration: 0.3,
                scale: 1, // Restore scale to normal
                opacity: 1, // Restore opacity
                ease: 'power2.out'
            });
        });
    });




})(jQuery); // End jQuery