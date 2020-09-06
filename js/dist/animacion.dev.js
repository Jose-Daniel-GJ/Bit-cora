"use strict";

var animar = document.querySelectorAll('.animado');

function animacion() {
  var alturaScroll = document.documentElement.scrollTop;

  for (var i = 0; i < animar.length; i++) {
    var altura = animar[i].offsetTop;

    if (altura - 450 < alturaScroll) {
      animar[i].style.opacity = 1;
      animar[i].classList.add('arriba');
    }
  }
}

window.addEventListener('scroll', animacion);