// header
const img = document.getElementById('header_box');
const titulo = document.getElementById('titulo');
// botones
const inicio =document.getElementById('inicio');
const cl_1 =document.getElementById('clase_1');
const cl_2 =document.getElementById('clase_2');
const cl_3 =document.getElementById('clase_3');
const cl_4 =document.getElementById('clase_4');

inicio.addEventListener('click', function(){
// Parte de los botones
    inicio.classList.add('Active');
    cl_2.classList.remove('Active');
    cl_3.classList.remove('Active');
    cl_4.classList.remove('Active');
    cl_1.classList.remove('Active');
// Parte del header
    titulo.innerHTML = 'Bitácora <br> Aprender a aprender';
    img.style.backgroundImage ='url(img/graduados.jpg)'

});
cl_1.addEventListener('click', function(){
// Parte de los botones
    inicio.classList.remove('Active');
    cl_1.classList.add('Active');
    cl_2.classList.remove('Active');
    cl_3.classList.remove('Active');
    cl_4.classList.remove('Active');
// Parte del header
    titulo.innerHTML = '¿Qué es el poder?'
    img.style.backgroundImage ='url(img/libros.jpg)'
});