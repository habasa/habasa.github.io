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

// 네비바 메뉴 눌렀을때 거기로 이동 페이지상에서 ㅇㅇ
const navbarMenu = document.querySelector('.navbar_menu')
navbarMenu.addEventListener('click', (e) => {
    // console.log(navbarMenu);
    const target = e.target
    const link = target.dataset.link
    if(link == null) {
        return
    }
    console.log(e.target.dataset.link);
    const scrollV = document.querySelector(link);
    scrollV.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})