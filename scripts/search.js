window.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.header__search-button').addEventListener('click', function() {
        document.querySelector('.header__search-bar').classList.toggle('header__search-bar--active');
    });
})
