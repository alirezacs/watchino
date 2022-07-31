$(document).ready(function(){
    /* Banner Movie Poster Hover Animation */
    
    $('.banner-content-movie-poster').mouseenter(() => {
        $('.banner-content-movie-poster').find('.banner-content-movie-poster-show').fadeIn('fast').css('display', 'flex');
    })

    $('.banner-content-movie-poster').mouseleave(() => {
        $('.banner-content-movie-poster').find('.banner-content-movie-poster-show').fadeOut('fast');
    });

    /* Banner Movie Poster Hover Animation */


    /* Show Movie Trailer */

    /* Show Trailer */
    const showMovieTrailer = (e) => {
        let parent = $(e.target).parents('#banner-movie-item');
        let trailerWrapper = $(parent).find('#banner-content-movie-trailer').fadeIn('fast').css('display', 'flex');
        $('body').css('overflow', 'hidden');
    }

    const closeMovieTrailer = (e) => {
        let parent = $(e.target).parents('#banner-movie-item');
        let video = $(parent).find('#banner-content-movie-trailer-video');
        video[0].pause();
        $('body').css('overflow', 'visible');
        let trailerWrapper = $(parent).find('#banner-content-movie-trailer').fadeOut();
    }

    $('.banner-content-movie-poster-show-btn').click((e) => {
        showMovieTrailer(e);
    });
    $('.banner-content-movie-trailer-close').click((e) => {
        console.log('test');
        closeMovieTrailer(e);
    });

    /* Show Movie Trailer */


    /* Banner Slider */

    (function(){
        let sliderImages = $('.banner-movie-item'),
            arrowRight = $('#banner-slider-prev-btn')
            arrowLeft = $('#banner-slider-next-btn')
            current = 0;

        /* Reseting Slider */
        function reset(){
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }

        /* Init Slider */
        function initSlider(){
            reset();
            $(sliderImages[0]).fadeIn();
            // sliderImages[0].style.display = 'block';
        }

        /* Move Prev Slider */
        function slidePrev(){
            reset();
            $(sliderImages[current -1]).fadeIn();
            // sliderImages[current -1].style.display = 'block';
            current--;
        }

        /* Move Next Slide */
        function slideNext(){
            reset();
            $(sliderImages[current +1]).fadeIn();
            // sliderImages[current +1].style.display = 'block';
            current++;
        }

        /* Prev Button Event */
        $(arrowRight).on('click', () => {
            current === sliderImages.length -1 ? current = -1 : slideNext();
        });
        
        /* Next Button Event */
        $(arrowLeft).on('click', () => {
            current === 0 ? current = sliderImages.length : slidePrev();
        })

        /* Initing Slider */
        initSlider();

    })()

    /* Banner Slider */


    /* Responsive Menu Show */
    
    $('#header-menu-responsive-btn').on({
        click : () => {
            let responsiveMenu = $('#header-menu-responsive');
            responsiveMenu.slideDown();
            $('body').css('overflow', 'hidden');
        },
    });
    $('#header-menu-responsive-close-btn').on({
        click : () => {
            let responsiveMenu = $('#header-menu-responsive');
            responsiveMenu.slideUp();
            $('body').css('overflow', 'visible');
        }
    });

    /* Responsive Menu Show */

    /* Comments Slider */

    (function(){
        let sliderComments = $('.comment-item'),
            arrowRight = $('#comments-slider-btn-next'),
            arrowLeft = $('#comments-slider-btn-prev'),
            current = 0;

        /* Reseting Slider */
        function reset(){
            for(let i = 0; i < sliderComments.length; i++){
                sliderComments[i].style.display = 'none';
            }
        }

        /* Init Slider */
        function initSlider(){
            reset();
            $(sliderComments[0]).fadeIn();
            // sliderImages[0].style.display = 'block';
        }

        /* Move Prev Slider */
        function slidePrev(){
            reset();
            $(sliderComments[current -1]).fadeIn();
            // sliderImages[current -1].style.display = 'block';
            current--;
        }

        /* Move Next Slide */
        function slideNext(){
            reset();
            $(sliderComments[current +1]).fadeIn();
            // sliderImages[current +1].style.display = 'block';
            current++;
        }

        /* Prev Button Event */
        $(arrowRight).on('click', () => {
            current === sliderComments.length -1 ? current = -1 : slideNext();
        });
        
        /* Next Button Event */
        $(arrowLeft).on('click', () => {
            current === 0 ? current = sliderComments.length : slidePrev();
        })

        /* Initing Slider */
        initSlider();

    })();

    /* Comments Slider */


    /* Stop Sponsers Slider On Hover */

    let sponsersSliderItem = document.querySelectorAll('.sponsers-slider .sponsers-slider-item').forEach(element => {
        $(element).mouseenter((e) => {
            $('#sponsers-slider').css('animation-play-state', 'paused');
            e.target.classList.add('sponsers-slider-item-active');
        });
        $(element).mouseleave((e) => {
            $('#sponsers-slider').css('animation-play-state', 'running');
            e.target.classList.remove('sponsers-slider-item-active');
            console.log('oke');

        });
    });;

    $('#sponsers-slider').mouseleave(() => {
        $('#sponsers-slider .sponsers-slider-item').removeClass('sponsers-slider-item-active');
    });
    

    // sponsersSliderItem.forEach(element => {
    //     element.addEventListener('mouseenter', () => {
    //         console.log('Hello ');
    //     });
    // });



    /* Stop Sponsers Slider On Hover */


});
