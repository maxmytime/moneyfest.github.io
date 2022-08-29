$('.owl-carousel.slider').owlCarousel({
    loop:true,
    items:1,
    margin:10,
    autoplay:true,
    autoplayTimeout:10000,
    nav:true,
    navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
    pagination: true,
    dots: true,
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


// Оффер

const btnClose = document.querySelector('.offer__btn'),
      offer = document.querySelector('.offer');

btnClose.addEventListener('click', () => {
    offer.classList.add('hidden');
});