/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Hossain
Template Name: Nino - Premium Portfolio Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/


/*
* ----------------------------------------------------------------------------------------
Author       : Tanvir Hossain
Template Name: Nino - Premium Portfolio Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/


(function () {
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
    if (document.querySelector('.wow')) {
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

    window.addEventListener('scroll', function () {

        // ## Header Style and Scroll to Top
        function headerStyle() {
            const siteHeader = document.querySelector('.main-header');
            const scrollLink = document.querySelector('.scroll-top');
            if (siteHeader) {
                const windowpos = window.scrollY;
                if (windowpos >= 100) {
                    siteHeader.classList.add('fixed-header');
                    if (scrollLink) {
                        gsap.to(scrollLink, { duration: 0.3, opacity: 1, display: 'block' });
                    }
                } else {
                    siteHeader.classList.remove('fixed-header');
                    if (scrollLink) {
                        gsap.to(scrollLink, { duration: 0.3, opacity: 0, display: 'none' });
                    }
                }
            }
        }

        headerStyle();

    });



    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    window.addEventListener('load', function () {


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

    document.addEventListener('mousemove', function (e) {
        // Update cursor position and opacity on mousemove
        gsap.to(cursorBall, {
            duration: 0.3,
            x: e.clientX,
            y: e.clientY,
            opacity: 1, // Ensure cursor is visible
            ease: 'power2.out'
        });
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




})(); // End IIFE