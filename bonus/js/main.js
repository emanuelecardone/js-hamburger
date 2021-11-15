// Creo la variabile per l'hamburger menù che userò in entrambi gli eventi
const appearingMenu = document.querySelector('.hamburger-menu');

// Hamburger menu
const burgerTool = document.querySelector('.header-right .fa-bars');

// Variabile per sezione Discover Class
const discoverPage = document.querySelector('.discover_class_wrapper');

burgerTool.addEventListener('click', function(){
    appearingMenu.classList.add('active');   
    
    // DISCOVER CLASS
    discoverPage.classList.add('d-none');

    // Variabile per la comparsa pagina pulsante
    const discoverPageButton = document.querySelector('.discover_button');

    // Comparsa pagina 
    discoverPageButton.addEventListener('click', function(){
        discoverPage.classList.remove('d-none');
        appearingMenu.classList.remove('active');
    });


    // SEZIONE EDIT

    // Creo la variabile del tasto per aprire il box contenente i vari edit, dei box stessi e del tasto che li chiuderà
    const appearingBoxOpenButton = document.querySelector('.box_open_button_1');
    const appearingBox = document.querySelector('.change_box_1');
    const appearingBoxCloseButton = document.querySelector('.box_close_button_1');

    const appearingBoxOpenButton2 = document.querySelector('.box_open_button_2');
    const appearingBox2 = document.querySelector('.change_box_2');
    const appearingBoxCloseButton2 = document.querySelector('.box_close_button_2');

    const appearingBoxOpenButton3 = document.querySelector('.box_open_button_3');
    const appearingBox3 = document.querySelector('.change_box_3');
    const appearingBoxCloseButton3 = document.querySelector('.box_close_button_3');


    // Apertura box
    appearingBoxOpenButton.addEventListener('click', function(){
        appearingBox.classList.remove('d-none');
        appearingBox2.classList.add('d-none');
        appearingBox3.classList.add('d-none');

        appearingBoxCloseButton.classList.remove('d-none');
        appearingBoxCloseButton2.classList.add('d-none');
        appearingBoxCloseButton3.classList.add('d-none');

        appearingBoxOpenButton.classList.add('d-none');
        appearingBoxOpenButton2.classList.remove('d-none');
        appearingBoxOpenButton3.classList.remove('d-none');
    });

    appearingBoxOpenButton2.addEventListener('click', function(){
        appearingBox.classList.add('d-none');
        appearingBox2.classList.remove('d-none');
        appearingBox3.classList.add('d-none');

        appearingBoxCloseButton.classList.add('d-none');
        appearingBoxCloseButton2.classList.remove('d-none');
        appearingBoxCloseButton3.classList.add('d-none');

        appearingBoxOpenButton.classList.remove('d-none');
        appearingBoxOpenButton2.classList.add('d-none');
        appearingBoxOpenButton3.classList.remove('d-none');
    });

    appearingBoxOpenButton3.addEventListener('click', function(){
        appearingBox.classList.add('d-none');
        appearingBox2.classList.add('d-none');
        appearingBox3.classList.remove('d-none');

        appearingBoxCloseButton.classList.add('d-none');
        appearingBoxCloseButton2.classList.add('d-none');
        appearingBoxCloseButton3.classList.remove('d-none');

        appearingBoxOpenButton.classList.remove('d-none');
        appearingBoxOpenButton2.classList.remove('d-none');
        appearingBoxOpenButton3.classList.add('d-none');
    });

    // Chiusura box
    appearingBoxCloseButton.addEventListener('click', function(){
        appearingBox.classList.add('d-none');
        appearingBoxCloseButton.classList.add('d-none');
        appearingBoxOpenButton.classList.remove('d-none');    
    });

    appearingBoxCloseButton2.addEventListener('click', function(){
        appearingBox2.classList.add('d-none');
        appearingBoxCloseButton2.classList.add('d-none');
        appearingBoxOpenButton2.classList.remove('d-none');    
    });

    appearingBoxCloseButton3.addEventListener('click', function(){
        appearingBox3.classList.add('d-none');
        appearingBoxCloseButton3.classList.add('d-none');
        appearingBoxOpenButton3.classList.remove('d-none');    
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



    // Sezione cambio colore font

    // Creo la variabile per ogni font color marker
    const primaryText = document.querySelector('.border-primary');
    const secondaryText = document.querySelector('.border-secondary');
    const successText = document.querySelector('.border-success');
    const dangerText = document.querySelector('.border-danger');
    const warningText = document.querySelector('.border-warning');
    const infoText = document.querySelector('.b_info');
    const lightText = document.querySelector('.border-light');
    const darkText = document.querySelector('.border-dark');
    const purpleText = document.querySelector('.purple_icon');


    // Cambio colore font
    primaryText.addEventListener('click', function(){
        editedText1.classList.add('text-primary','border-primary');
        editedText2.classList.add('text-primary','border-primary');
        editedText3.classList.add('text-primary','border-primary');
        editedText4.classList.add('text-primary','border-primary');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
    });
    secondaryText.addEventListener('click', function(){
        editedText1.classList.add('text-secondary','border-secondary');
        editedText2.classList.add('text-secondary','border-secondary');
        editedText3.classList.add('text-secondary','border-secondary');
        editedText4.classList.add('text-secondary','border-secondary');
        editedText1.classList.remove('text-primary','border-primary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-primary','border-primary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-primary','border-primary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-primary','border-primary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
    });
    successText.addEventListener('click', function(){
        editedText1.classList.add('text-success','border-success');
        editedText2.classList.add('text-success','border-success');
        editedText3.classList.add('text-success','border-success');
        editedText4.classList.add('text-success','border-success');
        editedText1.classList.remove('text-secondary','border-secondary','text-primary','border-primary','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-primary','border-primary','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-primary','border-primary','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-primary','border-primary','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
    });
    dangerText.addEventListener('click', function(){
        editedText1.classList.add('text-danger','border-danger');
        editedText2.classList.add('text-danger','border-danger');
        editedText3.classList.add('text-danger','border-danger');
        editedText4.classList.add('text-danger','border-danger');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-primary','border-primary','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-primary','border-primary','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-primary','border-primary','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-primary','border-primary','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark');
    });
    warningText.addEventListener('click', function(){
        editedText1.classList.add('text-warning','border-warning');
        editedText2.classList.add('text-warning','border-warning');
        editedText3.classList.add('text-warning','border-warning');
        editedText4.classList.add('text-warning','border-warning');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-info','border-info','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-info','border-info','text-light','border-light','text-dark','border-dark');
    });
    infoText.addEventListener('click', function(){
        editedText1.classList.add('text-info','border-info');
        editedText2.classList.add('text-info','border-info');
        editedText3.classList.add('text-info','border-info');
        editedText4.classList.add('text-info','border-info');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-warning','border-warning','text-light','border-light','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-warning','border-warning','text-light','border-light','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-warning','border-warning','text-light','border-light','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-primary','border-primary','text-warning','border-warning','text-light','border-light','text-dark','border-dark');
    });
    lightText.addEventListener('click', function(){
        editedText1.classList.add('text-light','border-light');
        editedText2.classList.add('text-light','border-light');
        editedText3.classList.add('text-light','border-light');
        editedText4.classList.add('text-light','border-light');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-primary','border-primary','text-dark','border-dark');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-primary','border-primary','text-dark','border-dark');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-primary','border-primary','text-dark','border-dark');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-primary','border-primary','text-dark','border-dark');
    });
    darkText.addEventListener('click', function(){
        editedText1.classList.add('text-dark','border-dark');
        editedText2.classList.add('text-dark','border-dark');
        editedText3.classList.add('text-dark','border-dark');
        editedText4.classList.add('text-dark','border-dark');
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-primary','border-primary');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-primary','border-primary');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-primary','border-primary');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-primary','border-primary');
    });
    purpleText.addEventListener('click', function(){
        editedText1.style.color = '#6f42c1';
        editedText2.style.color = '#6f42c1';
        editedText3.style.color = '#6f42c1';
        editedText4.style.color = '#6f42c1';
        editedText1.style.borderColor = '#6f42c1';
        editedText2.style.borderColor = '#6f42c1';
        editedText3.style.borderColor = '#6f42c1';
        editedText4.style.borderColor = '#6f42c1';
        editedText1.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark','text-primary','border-primary');
        editedText2.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark','text-primary','border-primary');
        editedText3.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark','text-primary','border-primary');
        editedText4.classList.remove('text-secondary','border-secondary','text-success','border-success','text-danger','border-danger','text-warning','border-warning','text-info','border-info','text-light','border-light','text-dark','border-dark','text-primary','border-primary');
    });



    // Sezione cambio colore sfondo

    // Creo la variabile per ogni bg color marker (più una per il debug del pulsante close se lo sfondo è bianco e 4 per il debug del bordo se lo sfondo è "info")
    const primaryBg = document.querySelector('.border-primary.rounded-circle');
    const secondaryBg = document.querySelector('.border-secondary.rounded-circle');
    const successBg = document.querySelector('.border-success.rounded-circle');
    const dangerBg = document.querySelector('.border-danger.rounded-circle');
    const warningBg = document.querySelector('.border-warning.rounded-circle');
    const infoBg = document.querySelector('.b_info.rounded-circle');
    const lightBg = document.querySelector('.border-light.rounded-circle');
    const darkBg = document.querySelector('.border-dark.rounded-circle');
    const purpleBg = document.querySelector('.purple_icon.rounded-circle');
    const closeMarker = document.querySelector('.fa-times');
    const editedBorder1 = document.querySelector('.link_box_1');
    const editedBorder2 = document.querySelector('.link_box_2');
    const editedBorder3 = document.querySelector('.link_box_3');
    const editedBorder4 = document.querySelector('.link_box_4');


    // Cambio colore sfondo
    primaryBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-primary');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-dark');
    });
    secondaryBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-secondary');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-primary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-dark');
    });
    successBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-success');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-primary','bg-danger','bg-warning','bg-info','bg-light','bg-dark'); 
    });
    dangerBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-danger');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-primary','bg-warning','bg-info','bg-light','bg-dark'); 
    });
    warningBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-warning');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-danger','bg-primary','bg-info','bg-light','bg-dark');   
    });
    infoBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-info');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-light');
        editedBorder2.classList.add('border-light');
        editedBorder3.classList.add('border-light');
        editedBorder4.classList.add('border-light');
        appearingBox.classList.add('border-light');
        appearingBox2.classList.add('border-light');
        appearingBox3.classList.add('border-light');
        appearingBoxOpenButton.classList.add('border-light');
        appearingBoxOpenButton2.classList.add('border-light');
        appearingBoxOpenButton3.classList.add('border-light');
        appearingBoxCloseButton.classList.add('border-light');
        appearingBoxCloseButton2.classList.add('border-light');
        appearingBoxCloseButton3.classList.add('border-light');
        editedBorder1.classList.remove('border-info');
        editedBorder2.classList.remove('border-info');
        editedBorder3.classList.remove('border-info');
        editedBorder4.classList.remove('border-info');
        appearingBox.classList.remove('border-info');
        appearingBox2.classList.remove('border-info');
        appearingBox3.classList.remove('border-info');
        appearingBoxOpenButton.classList.remove('border-info');
        appearingBoxOpenButton2.classList.remove('border-info');
        appearingBoxOpenButton3.classList.remove('border-info');
        appearingBoxCloseButton.classList.remove('border-info');
        appearingBoxCloseButton2.classList.remove('border-info');
        appearingBoxCloseButton3.classList.remove('border-info');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-danger','bg-warning','bg-primary','bg-light','bg-dark');  
    });
    lightBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-light');
        closeMarker.classList.add('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-primary','bg-dark'); 
    });
    darkBg.addEventListener('click', function(){
        appearingMenu.classList.add('bg-dark');
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-primary');
    });
    purpleBg.addEventListener('click', function(){
        appearingMenu.style.backgroundColor = '#6f42c1';
        closeMarker.classList.remove('text-dark');
        editedBorder1.classList.add('border-info');
        editedBorder2.classList.add('border-info');
        editedBorder3.classList.add('border-info');
        editedBorder4.classList.add('border-info');
        appearingBox.classList.add('border-info');
        appearingBox2.classList.add('border-info');
        appearingBox3.classList.add('border-info');
        appearingBoxOpenButton.classList.add('border-info');
        appearingBoxOpenButton2.classList.add('border-info');
        appearingBoxOpenButton3.classList.add('border-info');
        appearingBoxCloseButton.classList.add('border-info');
        appearingBoxCloseButton2.classList.add('border-info');
        appearingBoxCloseButton3.classList.add('border-info');
        editedBorder1.classList.remove('border-light');
        editedBorder2.classList.remove('border-light');
        editedBorder3.classList.remove('border-light');
        editedBorder4.classList.remove('border-light');
        appearingBox.classList.remove('border-light');
        appearingBox2.classList.remove('border-light');
        appearingBox3.classList.remove('border-light');
        appearingBoxOpenButton.classList.remove('border-light');
        appearingBoxOpenButton2.classList.remove('border-light');
        appearingBoxOpenButton3.classList.remove('border-light');
        appearingBoxCloseButton.classList.remove('border-light');
        appearingBoxCloseButton2.classList.remove('border-light');
        appearingBoxCloseButton3.classList.remove('border-light');
        appearingMenu.classList.remove('bg-primary','bg-secondary','bg-success','bg-danger','bg-warning','bg-info','bg-light','bg-dark');
    });
});

// Tasto sezione Discover Class per lg +
const discoverPageButton2 = document.querySelector('.discover_button_2');
discoverPageButton2.addEventListener('click', function(){
    discoverPage.classList.remove('d-none');
});

// Tasto x
const closeTool = document.querySelector('.hamburger-menu .close');

closeTool.addEventListener('click', function(){ 
    appearingMenu.classList.remove('active');
});


