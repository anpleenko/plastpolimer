'use strict';

var istouch = !!('ontouchstart' in window) ? 'touchstart' : 'click';
var mobileWidth = 992;

$(function () {
    if ($('.our-partners-slider').length) {
        $('.our-partners-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            centerMode: false,
            variableWidth: true,
            autoplay: true,
            prevArrow: '<div class="our-partners-arrow-right"><span class="icon-chevron-right"></span></div>',
            nextArrow: '<div class="our-partners-arrow-left"><span class="icon-chevron-left"></span></div>',
            responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    centerMode: false,
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    slidesToShow: 1
                }
            }]
        });
    }

    if ($(".sertificate-slider").length) {
        $('.sertificate-slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: "<span class='sertificate-slider-right-arrow cur'></span>",
            nextArrow: "<span class='sertificate-slider-left-arrow cur'></span>",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $(".sertificate-slider").magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function titleSrc(item) {}
            }
        });
    }

    if ($('#controll-slider').length) {
        var $controllSlider = $("#controll-slider");
        var $sliderControll = $(".section-page-header__slider-controll");

        $controllSlider.slick({
            dots: false,
            infinite: true,
            autoplaySpeed: 300,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: "<span class='sertificate-slider-right-arrow cur'></span>",
            nextArrow: "<span class='sertificate-slider-left-arrow cur'></span>",
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        $sliderControll.on("click", function () {
            if ($sliderControll.hasClass("pause")) {
                $sliderControll.removeClass("pause");
                $controllSlider.slick('slickPlay');
                $controllSlider.slick('slickNext');
            } else {
                $sliderControll.addClass("pause");
                $controllSlider.slick('slickPause');
            }
        });
    }

    if ($(".header-jimbotron__slider").length) {
        var $headerSlider = $('.header-jimbotron__slider');


        $headerSlider.slick({
            dots: false,
            infinite: true,
            speed: 600,
            autoplaySpeed: 4000,
            pauseOnHover: false,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        });
    }

    if ($(".our-achievements__image").length) {
        $(".our-achievements").on(istouch, function (e) {
            $(e.target).parent().find(".animated").addClass("zoomIn");
        });
    };
});

$(function () {
    var clearMobileClasses = function clearMobileClasses() {
        $(".off-canvas-wrapper-inner").removeClass("is-off-canvas-open").removeClass("is-open-right").removeClass("is-open-left");

        $(".off-canvas.position-left").removeClass("is-open");

        $(".off-canvas.position-right").removeClass("is-open");
    };

    $('.open-menu__button').on(istouch, function () {
        clearMobileClasses();
        var targetAction = $(this).data('show');
        var offCanvasWrapperInner = $(".off-canvas-wrapper-inner");

        if (targetAction === 'left-menu') {
            offCanvasWrapperInner.addClass("is-off-canvas-open").addClass("is-open-left");
            $(".off-canvas.position-left").addClass('is-open');
        } else {
            offCanvasWrapperInner.addClass("is-off-canvas-open").addClass("is-open-right");
            $(".off-canvas.position-right").addClass('is-open');
        }
    });

    $(".js-off-canvas-exit").on(istouch, function () {
        clearMobileClasses();
    });

    $(window).resize(function () {
        if ($(window).width() > 768) {
            clearMobileClasses();
        }
    });
});

$(function () {
    var targetAppend = $(".off-canvas.position-left");

    if ($("#product-copy-target").length) {
        var productAppendTarget = $("#product-copy-target");
        $(".main-aside__inner").clone().appendTo(productAppendTarget);
    }
});

$(function () {

    $('.modal').on('hidden.bs.modal', function (e) {
        if ($(document).width() > mobileWidth) {
            $(".affix").css({ "margin-left": "0" });
        }
    });

    $('.modal').on('show.bs.modal', function (e) {
        if ($(document).width() > mobileWidth) {
            $(".affix").css({ "margin-left": "-8px" });
        }
    });
});

$(function () {
    var target = $('.nav-affix');
    var startPosition = target.offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= startPosition) {
            if (!target.hasClass()) {
                target.addClass('affix');
            }
        } else {
            target.removeClass('affix');
        }
    });
});

$(function () {
    window.initMap = function () {
        var latLng = { lat: 59.968304, lng: 30.388565 };

        var map = new google.maps.Map(document.getElementById('map'), {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true
        });

        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: 'ООО "Пластполимер"'
        });
    };
});

$(function () {
    var s = skrollr.init();
});