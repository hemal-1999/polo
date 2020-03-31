$(document).ready(function () {

    /*
    ========================================================================
                                    Type JS
    ========================================================================
    */
    // header
    var typed = new Typed('.header-content-movement', {
        loop: true,
        typeSpeed: 60,
        backSpeed: 60,
        strings: ['a professional', 'a businessman', 'arcitecture speciallist', 'Toffazzal islam akhand']
    });
    /*
    ========================================================================
                            Mixit Up
    ========================================================================
    */
    // work section
    var mixer = mixitup('.work-items');
    /*
    ========================================================================
                            Progress bar
    ========================================================================
    */
    // customar review section

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-36251023-1']);
    _gaq.push(['_setDomainName', 'jqueryscript.net']);
    _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();

    /*
    ========================================================================
                                Owl Carousel
    ========================================================================
    */
    //client review
    $(document).ready(function () {
        $('.client-review-parent').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplayTimeout:6000,
            smartSpeed:1000,
        });
    });

    //blog owl carousel
    $(document).ready(function () {
        $('.blog-owl-carousel').owlCarousel({
            autoplay: true,
            loop: true,
            autoplayTimeout:8000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:false,
                    loop:true
                }
            }
        });
    });
    //vanobox video gellary
    $(document).ready(function(){
        $('.venobox').venobox(); 
    });
})