const navbar = document.querySelector('.navbar');
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link');
const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [95, 78, 55, 10, 90 ];



window.addEventListener('scroll', () => {
    if(window.scrollY >= navbarOffsetTop){
        navbar.classList.add('sticky') }
        else{
            navbar.classList.remove('sticky')
        }
    }
);


