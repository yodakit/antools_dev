window.addEventListener('DOMContentLoaded', () => {
    //spoiler
    const arrowSpoiler = document.querySelector('.arrow__min'),
          spoiler = document.querySelector('.menu__spoiler-item');


    function showSpoiler() {
        arrowSpoiler.addEventListener('click', () => {
            arrowSpoiler.classList.toggle('arrow__min_active');
            spoiler.classList.toggle('menu__spoiler-item_active');
        });
    }
    
    showSpoiler();

    //burger
    const menu = document.querySelector('.menu__body'),
          burger = document.querySelector('.burger');

    function showBurgerMenu() {
        burger.addEventListener('click', () => {
            document.body.classList.toggle('_lock');
            menu.classList.toggle('menu__body_active');
            burger.classList.toggle('_active');
        });
    }

    showBurgerMenu();
});