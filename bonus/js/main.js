// Creo la variabile per l'hamburger menù che userò in entrambi gli eventi
const appearingMenu = document.querySelector('.hamburger-menu');

// Hamburger menu
const burgerTool = document.querySelector('.header-right .fa-bars');

burgerTool.addEventListener('click', function(){
    appearingMenu.classList.add('active');
});

// Tasto x
const closeTool = document.querySelector('.hamburger-menu .close');

closeTool.addEventListener('click', function(){ 
    appearingMenu.classList.remove('active');
});


// Sezione font

// Creo la variabile del tasto per aprire il box contenente i vari edit, dei box stessi e del tasto che li chiuderà
const appearingBoxOpenButton = document.querySelector('.box_open_button');
const appearingBox = document.querySelector('.change_box');
const appearingBoxCloseButton = document.querySelector('.box_close_button');

// Apertura box
appearingBoxOpenButton.addEventListener('click', function(){
    appearingBox.classList.remove('d-none');
    appearingBoxCloseButton.classList.remove('d-none');
    appearingBoxOpenButton.classList.add('d-none');
});

// Chiusura box
appearingBoxCloseButton.addEventListener('click', function(){
    appearingBox.classList.add('d-none');
    appearingBoxCloseButton.classList.add('d-none');
    appearingBoxOpenButton.classList.remove('d-none');    
})
