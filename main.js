const burgerIcon = document.querySelector('.burger__icon');

burgerIcon.addEventListener('click', function() {
    this.classList.toggle('burger--opened');
    
    // Блокируем или разрешаем прокрутку страницы в зависимости от наличия класса
    if (this.classList.contains('burger--opened')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

document.querySelector('.burger__icon').addEventListener('click', function() {
    const nav = document.querySelector('.header__navigation');
    nav.classList.toggle('nav--burger');
});

//

