(function() {

    var carousel = {

        props:{
            currentSlide: null,
            allSlides: null,
            totalSlides: null,
            selector: null
        },

        init: function(){
            carousel.props.allSlides = $("div.carousel-slide-container article");
            carousel.props.totalSlides = carousel.props.allSlides.length;
            carousel.props.currentSlide = 1;
            carousel.props.selector = $("div.carousel-slide-container article:nth-child("+carousel.props.currentSlide+")");

            carousel.props.allSlides.addClass("hideSlide"); //onpageload hide all slides
            carousel.props.selector.removeClass("hideSlide"); //remove class for the first child to show 1st slide

            carousel.eventClick(); //start the onclick events
            carousel.eventKey();
        },

        eventClick: function(){
            $(".carousel-next").on("click",function(){
                carousel.next();
            });

            $(".carousel-prev").on("click",function(){
                carousel.prev();
            });
        },
        
        //On keyup events
        eventKey: function(){
            $(window).keyup(function (event) {
                if(event.keyCode == 39){
                    carousel.next();
                }
            });
            
            $(window).keyup(function (event) {
                if(event.keyCode == 37){
                    carousel.prev();
                }
            });            
        },

        next: function(){
            carousel.update(1);
            carousel.animate();
        },    

        prev: function(){
            carousel.update(-1); 
            carousel.animate();
        },

        update: function(direction){
            carousel.props.selector = $("div.carousel-slide-container article:nth-child("+carousel.props.currentSlide+")");
            carousel.props.selector.addClass("hideSlide"); //remove class for the first child to show 1st slide

            carousel.props.currentSlide = carousel.props.currentSlide + direction;

            //If triggers to catch currentSlide # going < 1 or > totalSlides
            if(carousel.props.currentSlide < 1){
                carousel.props.currentSlide = carousel.props.totalSlides;
            }
            if(carousel.props.currentSlide > carousel.props.totalSlides){
                 carousel.props.currentSlide = 1;
            }

            carousel.props.selector = $("div.carousel-slide-container article:nth-child("+carousel.props.currentSlide+")");
            carousel.props.selector.removeClass("hideSlide");
        },

        animate: function(){
            carousel.props.selector = $("div.carousel-slide-container article:nth-child("+carousel.props.currentSlide+")");
            
        }

    };

    $(function(){
		carousel.init();
    });
 })();