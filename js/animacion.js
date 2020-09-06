let animar = document.querySelectorAll('.animado');

function animacion() {
    let alturaScroll = document.documentElement.scrollTop;
    for (let i = 0; i < animar.length; i++) {
        let altura = animar[i].offsetTop;
        if (altura -450 < alturaScroll) {
            animar[i].style.opacity = 1;
            animar[i].classList.add('arriba');
        }
    }
}
window.addEventListener('scroll', animacion);