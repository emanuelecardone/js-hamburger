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


// SEZIONE EDIT

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
});


// Sezione font

// Creo la variabile per ogni font marker (usato una variabile per ognuno dato che non riesco a usare il multi-select con class name)
const editedText1 = document.querySelector('.edited_text_1');
const editedText2 = document.querySelector('.edited_text_2');
const editedText3 = document.querySelector('.edited_text_3');
const editedText4 = document.querySelector('.edited_text_4');
const arial = document.querySelector('.arial');
const arialBlack = document.querySelector('.arial-black');
const verdana = document.querySelector('.verdana');
const tahoma = document.querySelector('.tahoma');
const trebuchetMs = document.querySelector('.trebuchet-ms');
const impact = document.querySelector('.impact');
const timesNewRoman = document.querySelector('.times-new-roman');
const didot = document.querySelector('.didot');
const georgia = document.querySelector('.georgia');

// Cambio font
arial.addEventListener('click', function(){
    editedText1.classList.add('arial');
    editedText2.classList.add('arial');
    editedText3.classList.add('arial');
    editedText4.classList.add('arial');
    editedText1.classList.remove('arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
});
arialBlack.addEventListener('click', function(){
    editedText1.classList.add('arial-black');
    editedText2.classList.add('arial-black');
    editedText3.classList.add('arial-black');
    editedText4.classList.add('arial-black');
    editedText1.classList.remove('arial','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
});
verdana.addEventListener('click', function(){
    editedText1.classList.add('verdana');
    editedText2.classList.add('verdana');
    editedText3.classList.add('verdana');
    editedText4.classList.add('verdana');
    editedText1.classList.remove('arial','arial-black','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial','arial-black','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial','arial-black','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial','arial-black','tahoma','trebuchet-ms','impact','times-new-roman','didot','georgia');
});
tahoma.addEventListener('click', function(){
    editedText1.classList.add('tahoma');
    editedText2.classList.add('tahoma');
    editedText3.classList.add('tahoma');
    editedText4.classList.add('tahoma');
    editedText1.classList.remove('arial','arial-black','verdana','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial','arial-black','verdana','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial','arial-black','verdana','trebuchet-ms','impact','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial','arial-black','verdana','trebuchet-ms','impact','times-new-roman','didot','georgia');
});
trebuchetMs.addEventListener('click', function(){
    editedText1.classList.add('trebuchet-ms');
    editedText2.classList.add('trebuchet-ms');
    editedText3.classList.add('trebuchet-ms');
    editedText4.classList.add('trebuchet-ms');
    editedText1.classList.remove('arial','arial-black','verdana','tahoma','impact','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial','arial-black','verdana','tahoma','impact','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial','arial-black','verdana','tahoma','impact','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial','arial-black','verdana','tahoma','impact','times-new-roman','didot','georgia');
});
impact.addEventListener('click', function(){
    editedText1.classList.add('impact');
    editedText2.classList.add('impact');
    editedText3.classList.add('impact');
    editedText4.classList.add('impact');
    editedText1.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','times-new-roman','didot','georgia');
    editedText2.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','times-new-roman','didot','georgia');
    editedText3.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','times-new-roman','didot','georgia');
    editedText4.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','times-new-roman','didot','georgia');
});
timesNewRoman.addEventListener('click', function(){
    editedText1.classList.add('times-new-roman');
    editedText2.classList.add('times-new-roman');
    editedText3.classList.add('times-new-roman');
    editedText4.classList.add('times-new-roman');
    editedText1.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','didot','georgia');
    editedText2.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','didot','georgia');
    editedText3.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','didot','georgia');
    editedText4.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','didot','georgia');
});
didot.addEventListener('click', function(){
    editedText1.classList.add('didot');
    editedText2.classList.add('didot');
    editedText3.classList.add('didot');
    editedText4.classList.add('didot');
    editedText1.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','georgia');
    editedText2.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','georgia');
    editedText3.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','georgia');
    editedText4.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','georgia');
});
georgia.addEventListener('click', function(){
    editedText1.classList.add('georgia');
    editedText2.classList.add('georgia');
    editedText3.classList.add('georgia');
    editedText4.classList.add('georgia');
    editedText1.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot');
    editedText2.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot');
    editedText3.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot');
    editedText4.classList.remove('arial','arial-black','verdana','tahoma','trebuchet-ms','impact','times-new-roman','didot');
});