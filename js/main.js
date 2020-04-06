$(document).ready(function () {

    /* ======= Scrollspy ======= */
    $('body').scrollspy({target: '#page-nav-wrapper', offset: 100});

    /* ======= ScrollTo ======= */
    $('.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {offset: -60, 'axis': 'y'});

    });

    /* ======= Fixed page nav when scrolled ======= */
    $(window).on('scroll resize load', function () {

        var pageWrapper = $('#page-nav-wrapper');
        pageWrapper.removeClass('fixed');

        var scrollTop = $(this).scrollTop();
        var topDistance = pageWrapper.offset().top;

        if ((topDistance) > scrollTop) {
            pageWrapper.removeClass('fixed');
            $('body').removeClass('sticky-page-nav');
        } else {
            pageWrapper.addClass('fixed');
            $('body').addClass('sticky-page-nav');
        }

    });

    /* ======= Chart ========= */

    $(window).scroll(function () {
        /* Check the location of each desired element */
        $('.chart').each(function () {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if (bottom_of_window > bottom_of_object) {

                $('.chart').easyPieChart({
                    barColor: '#0747A6',//Pie chart colour
                    trackColor: '#e8e8e8',
                    scaleColor: false,
                    lineWidth: 5,
                    easing: 'easeOutBounce',
                    animate: 2000,
                    onStep: function (from, to, percent) {
                        $(this.el).find('span').text(Math.round(percent));
                    }
                });
            }
        });
    });

    $(document).ready(function () {
        /* Check the location of each desired element */
        var chart = $('.chart');
        var bottom_of_object = chart.offset().top + chart.outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it in */
        if (bottom_of_window >= bottom_of_object) {

            $('.chart').easyPieChart({
                barColor: '#0747A6',//Pie chart colour
                trackColor: '#e8e8e8',
                scaleColor: false,
                lineWidth: 5,
                easing: 'easeOutBounce',
                animate: 2000,
                onStep: function (from, to, percent) {
                    $(this.el).find('span').text(Math.round(percent));
                }
            });
        }
    });


    /* ======= Isotope plugin ======= */
    /* Ref: http://isotope.metafizzy.co/ */
    // init Isotope
    var $container = $('.isotope');

    $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
    });

    // filter items on click
    $('#filters').on('click', '.type', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({filter: filterValue});
    });

    // change is-checked class on buttons
    $('.filters').each(function (i, typeGroup) {
        var $typeGroup = $(typeGroup);
        $typeGroup.on('click', '.type', function () {
            $typeGroup.find('.active').removeClass('active');
            $(this).addClass('active');
        });
    });


});
