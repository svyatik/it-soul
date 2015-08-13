$ (window).load (function () {

    $ ('.preloader').delay (500).animate ({
        height: 0,
        opacity: 0
    }, function () {
        $ (this).css ('display', 'none');
        $ ('body').css ('overflow-y', 'scroll');
    });


    var $win = $(window);
    $ ('.background').each (function (){
        var scroll_speed = 3;
        var $this = $ (this);
        $ (window).scroll (function () {
            var bgScroll = -(($win.scrollTop () - $this.offset ().top) / scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css ('background-position', bgPosition);
        });
    });


    var $window = $ (window);
    var scrollTime = 0.4;
    var scrollDistance = 150;

    $window.on("mousewheel DOMMouseScroll", function (event){
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
            
                // MixItUp plugin
                // http://mixitup.io
                $('#portfoliolist').mixitup({
                    targetSelector: '.portfolio',
                    filterSelector: '.filter',
                    effects: ['fade'],
                    easing: 'snap',
                    // call the hover effect
                    // onMixEnd: filterList.hoverEffect()
                });             
            
            }
        };

  function initialize() {
      // var latlng = new google.maps.LatLng(43.003207, -73.610312);
      var cord = {
            lat: 49.832689,
            lng: 24.0122355
        }

    var mapOptions = {
      // center: latlng,
      disableDefaultUI: true,
      center: new google.maps.LatLng (cord.lat, cord.lng),
            zoom: 14,
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
    },
]
        
      
    };

var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);


  }
  initialize ();

        
        // Run the show!
        filterList.init();

    

    new WOW().init();
    

    var start = true;
    $ (window).on ('scroll', function () {
        // console.log ($ (window).scrollTop ());
        if ($ ('.numbers').offset().top - $ (window).height () <= $(window).scrollTop ()) {
            $ ('.number-count').addClass ('count');
            if (start) {
                test ();
                start = false;
            }
        }

        if ( $(window).scrollTop () > 300) {
            $ ('.navbar-main').addClass ('navbar-show')
        } else {
            $ ('.navbar-main').removeClass ('navbar-show');
        }

        if ($(window).scrollTop() >= $('section[name="home"]').offset().top) {
            $('#myNavbar li').removeClass('active');
            $('#myNavbar li:eq(0)').addClass('active');
        }

    if ($(window).scrollTop()+50 >= $('div[name="feutures"]').offset().top) {
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li:eq(1)').addClass('active');
    }
    if ($(window).scrollTop()+50 >= $('section[name="testimonials"]').offset().top) {
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li:eq(2)').addClass('active');
    }
    if ($(window).scrollTop()+50 >= $('div[name="portfolio"]').offset().top) {
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li:eq(3)').addClass('active');
    }
    if ($(window).scrollTop()+50 >= $('form[name="contact"]').offset().top) {
        $('#myNavbar li').removeClass('active');
        $('#myNavbar li:eq(4)').addClass('active');
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

    $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
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
        // async: true,
        // cache: false,
        success: function (data) {
            /*$ ('.orag').css ('display', 'block');
            $ ('.orag').animate ({
                height: '100%',
                opacity: 1
            });*/
        }
    });
    return false;
});


});

/*$ (document).ready (function () {

});*/
/*function initialize () {
        var cord = {
            lat: 49.832689,
            lng: 24.0122355
        }
        var mapCanvas = document.getElementById ('map-canvas');
        var mapOptions = {
            center: new google.maps.LatLng (cord.lat, cord.lng),
            zoom: 14,
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
    },
]
        };
        var map = new google.maps.Map (mapCanvas, mapOptions);
        var marker = new google.maps.Marker ({
            position: cord,
            map: map,
            title: 'This is our Office'
        });
    }*/
