$ (document).ready (function () {
    // $ ('.ellipse-left').addClass ('ellipse-left-active');
    // $ ('.ellipse-right').addClass ('ellipse-right-active');

  $('header[data-type="background"]').each(function(){
        var bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            bgobj.css({ backgroundPosition: coords });
        }); 
    });


    
    /*var filterList = {
    
        init: function () {
        
            // MixItUp plugin
            // http://mixitup.io
            $('#portfoliolist').mixitup({
                targetSelector: '.portfolio',
                filterSelector: '.filter',
                effects: ['fade'],
                easing: 'snap'
            });                
        
        }
    }

    filterList.init();*/

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



        
        // Run the show!
        filterList.init();
        
});
