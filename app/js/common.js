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

// Modal
const buttonModalOpen = document.querySelectorAll('[data-modal]'),
      overlay = document.querySelector('.overlay'),
      buttonModalClose = document.querySelectorAll('.modal .modal__close'),
      modalOpenSetTimeout = document.querySelectorAll('[data-timer]');

// Вешаем обработчик события на каждую кнопку, которая вызывает открытие модального окна
buttonModalOpen.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const dataModalAttribute = event.target.getAttribute('data-modal'),
              idModal = '#' + dataModalAttribute,
              modal = document.querySelector(idModal);

        openModal(modal);

    });
});

// Вешаем обработчик события на каждую кнопку, которая вызывает функцию закрытия модального окна
buttonModalClose.forEach((button) => {
    button.addEventListener('click', (event) => {
        const modal = event.target.parentNode;
        closeModal(modal);
    });
});

// Вызываем функцию закрытие модального окна если клик был по .overlay
overlay.addEventListener('click', (event) => {

    if (event.target.classList.contains('overlay')) {
        const modal = document.querySelector('.modal.modal_active');
        closeModal(modal);
    }

});

// Вызываем функцию закрытие модального окна если нажата клавиша Esc
document.addEventListener('keydown', (event) => {
    if (event.code == 'Escape') {
        if (overlay.classList.contains('overlay_active')) {
            const modal = document.querySelector('.modal.modal_active');
            closeModal(modal);
        }
    }

});

// Функция открытия модального окна
function openModal(modal) {
    overlay.classList.add('overlay_active');
    overlay.classList.add('overlay_show');
    modal.classList.add('modal_active');
}

// Функция закрытия модального окна
function closeModal(modal) {
    overlay.classList.remove('overlay_show');
    overlay.classList.remove('overlay_active');
    modal.classList.remove('modal_active');
}

// Menu

const burger = document.querySelector('.burger'),
      menuList = document.querySelector('.menu__list');

      console.log(burger, menuList);

burger.addEventListener('click', () => {
    menuList.classList.toggle('menu__list_active');
});