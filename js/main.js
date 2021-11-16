// Creo la variabile per l'hamburger menù che userò in entrambi gli eventi
const appearingMenu = document.querySelector('.hamburger-menu');

// Hamburger menu
const burgerTool = document.querySelector('.header-right .open');

burgerTool.addEventListener('click', function(){
    appearingMenu.classList.add('active');
});

// Tasto x
const closeTool = document.querySelector('.hamburger-menu .close');

closeTool.addEventListener('click', function(){ 
    appearingMenu.classList.remove('active');
});