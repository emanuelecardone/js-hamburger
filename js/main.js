// Hamburger menu
const burgerTool = document.querySelector('.header-right .fa-bars');

burgerTool.addEventListener('click', function(){
    const appearingMenu = document.querySelector('.hamburger-menu');
    appearingMenu.style.display = 'block';
});

// Tasto x
const closeTool = document.querySelector('.hamburger-menu .close');

closeTool.addEventListener('click', function(){
    const disappearingMenu = document.querySelector('.hamburger-menu');
    disappearingMenu.style.display = 'none';
});