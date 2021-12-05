window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.header__menu-btn').addEventListener('click', function() {

        document.querySelector('.header__dropdown-menu').classList.toggle('header__dropdown-menu--active');

        document.querySelector('.header__menu-btn').classList.toggle('header__menu-btn--active');

        document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon--inactive');

        document.querySelector('.header__menu-icon').classList.toggle('header__menu-icon--active');

        document.querySelector('.header__menu-nav').classList.toggle('header__menu-nav--active');

    });
})
