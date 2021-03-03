$(function() {
    $('.owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        margin: 30,
        navText: ["<img src='./img/prev.svg'>","<img src='./img/next.svg'>"]
    });
    let isNavOpen = false;
    $('.burger__btn').on('click', function(){
        $(this).toggleClass('opened');
        $('.nav').toggleClass('_open');
        if(!isNavOpen) {
            $('body').css('overflow', 'hidden');
            isNavOpen = true;
        } else {
            $('body').css('overflow', 'visible');
            isNavOpen = false;
        }
    });

    $('a[href^="#"]').on('click', function(e){
        let anchor = $(this)
        $('html,body').stop().animate({ scrollTop: $(anchor.attr('href')).offset().top }, 1000);
        $('.burger__btn').removeClass('opened');
        $('.nav').removeClass('_open');
        $('body').css('overflow', 'visible');
        e.preventDefault();
    });
    
    let aboutOffset = $('.about').offset().top,
        isScrollPos = false;
    $(window).on('load scroll', function(e){
        let $windowScrollTop = $(window).scrollTop();

        if($windowScrollTop > aboutOffset - 100 && !isScrollPos) {
            $('.scrolltop').addClass('_show');
            isScrollPos = true;
        } else if($windowScrollTop < aboutOffset - 100 && isScrollPos) {
            $('.scrolltop').removeClass('_show');
            isScrollPos = false;
        }
    })
});