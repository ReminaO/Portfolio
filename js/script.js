console.log('connecté'); 
//Icone burger
const icone = document.querySelector('.navbar-mobile i');
//Div modal
const modal = document.querySelector('.modal')

icone.addEventListener('click', function () {
    console.log('icone cliquée');
    modal.classList.toggle('change-modal')//Affichage de la fenêtre modal
    icone.classList.toggle('fa-times')//Affichage de l'iconer 'fermer'
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}