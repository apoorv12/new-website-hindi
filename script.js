const hamburger = document.querySelector(".burger");
const navlistResp = document.querySelector('.nav-list-resp')


hamburger.addEventListener('click', () => {
    navlistResp.classList.toggle('nav-display');
});
