$(function () {
    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
    console.log(url, activePage);
    $('.nav-make-active li a').each(function () { //looks in each link item within the primary-nav list
        var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
        var newActivePage = activePage + ".php";
        if (newActivePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
            $(this).parent().addClass('active-nav'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
        }
    });
})
// $(function(){
//   $('.a-elem').click(function(){
//     alert($(this).text());
//     console.log($(this).text());
//   });
// });
$(document).ready(function () {
    $(".moreBox").slice(0, 9).show();
    if ($(".blogBox:hidden").length != 0) {
        $("#loadMore").show();
    }
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".moreBox:hidden").slice(0, 9).slideDown();
        if ($(".moreBox:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
    });
});

$('.tech-slider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 7,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    arrows: false,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.seo_services_slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nav: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
});
$('.service-slider-new').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nav: false,
    arrows: false,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1
        }
    }]
});

$('.types-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.types-nav'
});
$('.types-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.types-for',
    dots: true,
    vertical: true,
    centerMode: false,
    focusOnSelect: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false
        }
    }]
});




$('.testiminial_slider').slick({
    dots: false,
    infinite: true,
    vertical: true,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            vertical: false,
            dots: true
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            vertical: false,
            dots: true
        }
    }]
});
var owl = $('#our_product .owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    slideSpeed: 2000,
    dots: false,
    dotsSpeed: 2000,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 800,
    margin: 30,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
$('.testi-slider').slick({
    dots: false,
    fade: true,
    cssEase: 'linear'
});
$(document).ready(function () {
    $(".uniq-logo-div-li").hover(function () {
        $(".uniq-logo-div-li").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below
        $(this).addClass("active");
    });
});
$('.popup_btn').on('click', function () {
    $('.popupform-main').addClass('active');
    $('body').addClass('o-hidden');
    $('.overlay-bg').fadeIn(500);
    $('.close-btn').on('click', function () {
        $('.popupform-main').removeClass('active');
        $('body').removeClass('o-hidden');
        $('.overlay-bg').fadeOut(500);
    });
    $('.overlay-bg').click(function () {
        $('popupform-main').removeClass('active');
        $('body').removeClass('o-hidden');
        $('.overlay-bg').fadeOut(500);

    });
});
$(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none"
});
//   $.fn.extend({
//     animateCss: function (animationName) {
//         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
//         $(this).addClass('animated ' + animationName).one(animationEnd, function() {
//             $(this).removeClass('animated ' + animationName);
//         });
//     }
// });

wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function (box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();