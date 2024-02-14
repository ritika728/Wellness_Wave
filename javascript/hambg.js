let hamburger = document.querySelector('.ham');

hamburger.addEventListener('click', () => {
    let navi = document.querySelector('.navLinks');
    navi.classList.toggle("active");
})