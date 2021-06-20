'use strict';

// navbar in and out
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    // console.log(window.scrollY); // 스크롤바 y축 확인
    // console.log('navbarheight',navbarHeight);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar-dark')
    } else {
        navbar.classList.remove('navbar-dark')
    }
})