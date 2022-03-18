const hamburger = document.querySelector(".burger");
const navbar = document.querySelector('.navbar');
const navlist = document.querySelector('.nav-list');


hamburger.addEventListener('click', () => {
    navlist.classList.toggle('v-class-resp');
});
