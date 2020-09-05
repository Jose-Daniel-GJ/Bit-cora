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
    img.style.backgroundImage ='url(img/graduados-min.jpg)';

    // box shadow
    titulo.classList.add('abajo_d');
    titulo.classList.remove('abajo_i');
    titulo.classList.remove('arriba_d');
    titulo.classList.remove('arriba_i');
    titulo.classList.remove('todo');

});
cl_1.addEventListener('click', function(){
// Parte de los botones
    inicio.classList.remove('Active');
    cl_1.classList.add('Active');
    cl_2.classList.remove('Active');
    cl_3.classList.remove('Active');
    cl_4.classList.remove('Active');
// Parte del header
    titulo.innerHTML = '¿Qué es el poder?';
    img.style.backgroundImage ='url(img/libros-min.jpg)';
    // box shadow
    titulo.classList.remove('abajo_d');
    titulo.classList.add('abajo_i');
    titulo.classList.remove('arriba_d');
    titulo.classList.remove('arriba_i');
    titulo.classList.remove('todo');
});

cl_2.addEventListener('click', function(){
    // Parte de los botones
        inicio.classList.remove('Active');
        cl_1.classList.remove('Active');
        cl_2.classList.add('Active');
        cl_3.classList.remove('Active');
        cl_4.classList.remove('Active');
    // Parte del header
        titulo.innerHTML = 'Camino hacia la universidad ';
        img.style.backgroundImage ='url(img/personas_estudiando-min.jpg)';
        // box shadow
    titulo.classList.remove('abajo_d');
    titulo.classList.remove('abajo_i');
    titulo.classList.add('arriba_i');
    titulo.classList.remove('arriba_d');
    titulo.classList.remove('todo');
    });

cl_3.addEventListener('click', function(){
        // Parte de los botones
            inicio.classList.remove('Active');
            cl_1.classList.remove('Active');
            cl_2.classList.remove('Active');
            cl_3.classList.add('Active');
            cl_4.classList.remove('Active');
        // Parte del header
            titulo.innerHTML = 'Mi facultad';
            img.style.backgroundImage ='url(img/cern-min.jpg)';
             // box shadow
            titulo.classList.remove('abajo_d');
            titulo.classList.remove('abajo_i');
            titulo.classList.remove('arriba_i');
            titulo.classList.add('arriba_d');
            titulo.classList.remove('todo');
        });
    
        // Aqui se modifica la clase 4

cl_4.addEventListener('click', function(){
   // Parte de los botones
       inicio.classList.remove('Active');
       cl_1.classList.remove('Active');
       cl_2.classList.remove('Active');
       cl_3.classList.remove('Active');
       cl_4.classList.add('Active');
   // Parte del header
       titulo.innerHTML = 'Titulo';
   // img.style.backgroundImage ='url(img/cern-min.jpg)'
   // box shadow
   titulo.classList.remove('abajo_d');
   titulo.classList.remove('abajo_i');
   titulo.classList.remove('arriba_i');
   titulo.classList.remove('arriba_d');
   titulo.classList.add('todo');
 });