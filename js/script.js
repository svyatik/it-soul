$ (window).load (function () {

    $ ('.preloader').delay (500).animate ({
        height: 0,
        opacity: 0
    }, function () {
        $ (this).css ('display', 'none');
        $ ('body').css ('overflow-y', 'scroll');
    });


    var $win = $ (window);
    $ ('.background').each (function (){
        var scroll_speed = 3;
        var $this = $ (this);
        $ (window).scroll (function () {
            if ($ (window).width () > 770) {
                var bgScroll = -(($win.scrollTop () - $this.offset ().top) / scroll_speed);
                var bgPosition = 'center '+ bgScroll + 'px';
                $this.css ('background-position', bgPosition);
            }
        });
    });


    var $window = $ (window);
    var scrollTime = 0.4;
    var scrollDistance = 150;

    $window.on ("mousewheel DOMMouseScroll", function (event) {
        console.log ('scroll');
        event.preventDefault ();

        var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail / 3;
        var scrollTop = $window.scrollTop ();
        var finalScroll = scrollTop - parseInt (delta*scrollDistance);

        TweenMax.to ($window, scrollTime, {
            scrollTo : { y: finalScroll, autoKill:true },
                ease: Power1.easeOut,
                overwrite: 5
        });
    });

    var filterList = {
        init: function () {
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap',
            });
        }
    };
    filterList.init();

    function initialize() {
        var cord = new google.maps.LatLng(49.841725, 24.031765);
        
        var mapOptions = {
            disableDefaultUI: true,
            center: cord,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false,
            styles: [
            {
                "featureType": "landscape",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 65
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 51
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 30
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },]
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
    }


    initialize ();

    // Init the WOW animation on website
    new WOW().init();


    // chose the navbar item when scrolling website
    var start = true;
    $ (window).on ('scroll', function () {
        if ($ ('.counter').offset().top - $ (window).height () <= $ (window).scrollTop ()) {
            $ ('.counter-numb').addClass ('count');
            if (start) {
                test ();
                start = false;
            }
        }

        if ( $(window).scrollTop () > $ ('.start').position ().top) {
            $ ('.navbar-main').addClass ('navbar-show')
        } else {
            $ ('.navbar-main').removeClass ('navbar-show');
        }

        if ($ (window).scrollTop () >= $ ('section[name="home"]').offset ().top) {
            $ ('#myNavbar li').removeClass ('active');
            $ ('#myNavbar li:eq(0)').addClass ('active');
        }

        if ($ (window).scrollTop ()+50 >= $ ('div[name="feutures"]').offset ().top) {
            $ ('#myNavbar li').removeClass ('active');
            $ ('#myNavbar li:eq(1)').addClass ('active');
        }
        if ($ (window).scrollTop ()+50 >= $ ('section[name="testimonials"]').offset ().top) {
            $ ('#myNavbar li').removeClass ('active');
            $ ('#myNavbar li:eq(2)').addClass ('active');
        }
        if ($ (window).scrollTop ()+50 >= $ ('div[name="portfolio"]').offset ().top) {
            $ ('#myNavbar li').removeClass ('active');
            $ ('#myNavbar li:eq(3)').addClass ('active');
        }
        if ($ (window).scrollTop ()+50 >= $ ('form[name="contact"]').offset ().top) {
            $ ('#myNavbar li').removeClass ('active');
            $ ('#myNavbar li:eq(4)').addClass ('active');
        }
    });

    function test () {
        $ ('.count').each(function () {
            $ (this).prop ('Counter',0).animate ({
                Counter: $ (this).text ()
            }, {
                duration: 6500,
                easing: 'easeOutQuint',
                step: function (now) {
                    $ (this).text (Math.ceil (now));
                }
            });
        });
    }


    // Animated scrolling to anchor
    $('a[href*=#]:not([href=#])').click (function () {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $ (this.hash);
            target = target.length ? target : $ ('[name=' + this.hash.slice (1) +']');
            if (target.length) {
                $ ('html,body').animate ({
                    scrollTop: target.offset ().top
                }, 1000);
                return false;
            }
        }
    });


    $ ('.feedback').on ('submit', function (e) {
        $.ajax ({
            type: "Post",
            url: "mail.php",
            data: {
               name: $ ('#feedName').val (),
               email: $ ('#feedEmail').val (),
               phone: $ ('#feedPhone').val (),
               msg: $ ('#feedMsg').val ()
            },
            async: true,
            cache: false,
            success: closeFeedback ()
        });
        return false;
    });

    function closeFeedback () {
        $ ('.feedback-submit').on ('click', function (e) {
            
            $ ('.orag').css ('display', 'block');
            $ ('.orag').animate ({
                height: '100%',
                opacity: 1
            });
            $ ('.orag-msg').animate ({
                top: '50%',
                opacity: 1
            }, 500, 'easeOutCirc');
        });
    }


    $('#imageGallery').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true,
        auto: true,
        speed: 1000,
        pause: 6000
    });
});
