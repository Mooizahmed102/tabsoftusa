$(document).ready(function () {
    $(".get-btn").click(function () {
        localStorage.clear();
        var loc = $(this).attr("href")
        var d = $(this).parent().parent().parent();
        window.location.href = loc;
    });

    $('.popup-btn, .popup_btn').on('click', function () {
        $('.popupform-main-new-popup').addClass('active');
        $('body').addClass('o-hidden');
        $('.overlay-bg-new-popup').fadeIn(500);
        $('.close-btn').on('click', function () {
            $('.popupform-main-new-popup').removeClass('active');
            $('body').removeClass('o-hidden');
            $('.overlay-bg-new-popup').fadeOut(500);
        });
        $('.overlay-bg-new-popup').click(function () {
            $('.popupform-main-new-popup').removeClass('active');
            $('body').removeClass('o-hidden');
            $('.overlay-bg-new-popup').fadeOut(500);
        });
    });
    $(function () {
        var hash = window.location.hash;
        hash && $('ul.nav a[href="' + hash + '"]').tab('show');
        $('.nav-tabs a').click(function (e) {
            $(this).tab('show');
            var scrollmem = $('body').scrollTop() || $('html').scrollTop();
            window.location.hash = this.hash;
            $('html,body').scrollTop(scrollmem);
        });
    });
    $(document).ready(function () {
        if (location.hash) {
            $("a[href='" + location.hash + "']").tab("show");
        }
        $(document.body).on("click", "a[data-toggle='tab']", function (event) {
            location.hash = this.getAttribute("href");
        });
    });
    $(window).on("popstate", function () {
        var anchor = location.hash || $("a[data-toggle='tab']").first().attr("href");
        $("a[href='" + anchor + "']").tab("show");
    });

    function order_now_value(objButton) {
        x = objButton.name;
        document.getElementById('lead_area_popup').value = x;
        document.getElementById('lead_text').innerHTML = x;
    }
    $(document).ready(function () {
        //var currentIP;
        var key = '5XpThOAEkfgOvEJ';
        var currentIP = $("meta[name=ip2loc]").attr('content');
        var pgurl = $("meta[name=page_url]").attr('content');
        $.ajax({
            method: 'get',
            url: '//pro.ip-api.com/json/' + currentIP,
            data: {
                key: key
            },
            success: function (data) {
                if (data) {
                    $('input[name=ip2loc_ip]').val(data.query);
                    $('input[name=ip2loc_isp]').val(data.isp);
                    $('input[name=ip2loc_org]').val(data.org);
                    $('input[name=ip2loc_country]').val(data.country);
                    $('input[name=ip2loc_region]').val(data.regionName);
                    $('input[name=ip2loc_city]').val(data.city);
                    $('input[name=pageurl]').val(pgurl);
                    $('input[name=fullpageurl]').val(pgurl);
                }
            }
        });
    });
    $('.type_of_seo_boxes ul li a').on('click', function () {
        $('.type_of_seo_boxes ul li').removeClass('active');
        $(this).addClass('active');
    });
    $(document).ready(function () {
        $(".moreBox").slice(0, 3).show();
        if ($(".blogBox:hidden").length != 0) {
            $("#loadMore_port").show();
        }
        $("#loadMore_port").on('click', function (e) {
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 6).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                $("#loadMore_port").fadeOut('slow');
            }
        });
    });
    $(document).ready(function () {
        $(".drop-new").click(function () {
            $(".drop-new").removeClass("active");
            // $(".tab").addClass("active"); // instead of this do the below
            $(this).addClass("active");
        });
    });
    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
        if (scroll >= 500) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    $(window).scroll(function () {
        var sticky = $('.header_main_sec'),
            scroll = $(window).scrollTop();
        if (scroll >= 500) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });
    $('.seo-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.seo-nav'
    });
    $('.seo-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.seo-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                vertical: false,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                vertical: false,
                dots: true,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.bnr-hd-txt-slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        cssEase: 'linear'
    });
    $('.port-slider-industry').slick({
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $("img").attr("alt", "Tab Soft USA");

    $('.video-slider-industry').slick({
        arrows: true,
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1500,
            settings: {

                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.video-slider-industry').slick('setPosition');
    })

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        $('.port-slider-industry').slick('setPosition');
    })

    if ($(window).width() < 767) {
        $('.h_service_boxes').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'linear',
            Swiping: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
        });
        $('.process_boxes').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'linear',
            Swiping: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
        });
        $('.portfolio_sec .tab-pane .row').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'linear',
            Swiping: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
        });
        // $('.type_of_seo_boxes ul').slick({
        // dots: true,
        // infinite: true,
        // autoplay:true,
        // arrows: false,
        // autoplaySpeed:3000,
        // speed:2000,
        // cssEase: 'linear',
        // Swiping: true,
        // slidesToShow: 1,
        // pauseOnHover:false,
        // slidesToScroll: 1,
        // });
        $('.seo_services_box_slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'linear',
            Swiping: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
        });
        $('.orm_sec_boxes').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 3000,
            speed: 2000,
            cssEase: 'linear',
            Swiping: true,
            slidesToShow: 1,
            pauseOnHover: false,
            slidesToScroll: 1,
        });
    }
    $("#loc_dro_t").click(function () {
        $("#footer_drop_t").slideToggle("slow");
    });
    $(document).ready(function () {
        $('[data-targetit]').on('click', function (e) {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var target = $(this).data('targetit');
            $('.' + target).siblings('[class^="box-"]').hide();
            $('.' + target).fadeIn();
            $('.seo_services_box_slider ').slick('setPosition');
        });
    });
    // industry-page-slider
    $('.industry-bnr-slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        Swiping: true,
        slidesToShow: 1,
        pauseOnHover: false,
        slidesToScroll: 1,
    });

});