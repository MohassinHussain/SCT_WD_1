const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-item');

let currentSection = 'home';

window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 50) { 
            currentSection = sec.id;
        }
    });

    navItems.forEach((item) => {
        if (item.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            item.classList.add('active');
        }
    });
});

const hamBtn = document.getElementById('ham-btn');
const navBar = document.querySelector('.nav-bar');

hamBtn.addEventListener('click', () => {
    navBar.classList.toggle('nav-bar-visible');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navBar.classList.add('nav-bar-visible');
    } else {
        navBar.classList.remove('nav-bar-visible');
    }
});
