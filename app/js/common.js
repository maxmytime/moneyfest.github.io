$('.owl-carousel.slider').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    autoplay:true,
    autoplayTimeout:10000,
    nav:true,
    pagination: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});