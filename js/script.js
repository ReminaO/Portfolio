console.log('connecté'); 

//Mise en place du menu burger 
//Icone burger
const icone = document.querySelector('.navbar-mobile i');
//Div modal
const modal = document.querySelector('.modal')

icone.addEventListener('click', function () {
    console.log('icone cliquée');
    modal.classList.toggle('change-modal')//Affichage de la fenêtre modal
    icone.classList.toggle('fa-times')//Affichage de l'iconer 'fermer'
})

