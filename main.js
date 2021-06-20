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
    scrollIntoView(link)
})

// contact me! click
const contact = document.querySelector('.home_contact')
contact.addEventListener('click', () => {
    scrollIntoView('#contact')
})

// make home slowly 투며하게~
const home = document.querySelector('.home_container')
const homeHeight = home.getBoundingClientRect().height//home 높이
document.addEventListener('scroll', () => {
    home.style.opacity = (1 - window.scrollY/homeHeight)
})

// 아래에서 쭉 올라오는 버튼
const arrowUp = document.querySelector('#myBtn')
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight/2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
})
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home')
})

// projects
const workBtnContainer = document.querySelector('.work_category')
const projectContainer = document.querySelector('.work_projects')
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    // 후.... 찾기 빡셈... count가 계속 undefined로 나옴..
    if(filter == null) {
        return;
    }

    projectContainer.classList.add('anim-out')    
    setTimeout(() => {
        projects.forEach((project) => {
            if(filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible')
            } else {
                project.classList.add('invisible')
            }
        })
        projectContainer.classList.remove('anim-out')
    }, 300);

    console.log(filter);
})

function scrollIntoView(scroll) {
    const scrollV = document.querySelector(scroll);
    scrollV.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
}