$(function() {


    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop(),
        nav = $("#nav"),
        navA = $("#nav a"),
        navToggle = $("#nav_toggle"),
        dataScroll = $("[data-scroll]"),
        dataCollapse = $("[data-collapse]"),
        dataSlider = $("[data-slider]");


    /* Fixed Header */ 
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });


    function checkScroll() {

        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */ 
    dataScroll.on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

            navA.removeClass ("active");
            nav.removeClass ("active");
            $this.addClass("active");
            navToggle.removeClass ("active");

        $("html, bode").animate({
            scrollTop: blockOffset -70
        }, 900);
    });


    /* Menu nav toggle */ 
    navToggle.on("click", function(event) {
        event.preventDefault();

        var $this = $(this);

        $this.toggleClass("active");
        nav.toggleClass("active");
    });


    /* Collapse */ 
    dataCollapse.on("click", function(event) {
        event.preventDefault();

        var $this = $(this);

        $this.toggleClass("active");
    });


    /* Slider
    https://kenwheeler.github.io/slick/ */ 
    dataSlider.slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });








});