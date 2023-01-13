

(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });

// SLIDER
$('.owl-carousel').owlCarousel({
  animateOut: 'fadeOut',
  items:1,
  loop:true,
  autoplayHoverPause: false,
  autoplay: true,
  smartSpeed: 1000,
})


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


// SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

})(jQuery);





/////////////////////////CRENAUX HORAIRES/////////////////////////////////////////////////////////

  
let select = document.getElementById("hour");

// Boucler de 12h à 14h
for (let i = 12; i < 15; i++) {
  // Boucler toutes les 15 minutes
  for (let j = 0; j < 60; j += 15) {
    // Si l'heure actuelle est 14h, arrêter la boucle
    if (i === 14 && j === 0) {
      break;
    }

    // Formater l'heure avec un zéro devant les valeurs inférieures à 10
    let hour = ("0" + i).slice(-2) + ":" + ("0" + j).slice(-2);

    // Créer une option avec l'heure en tant que texte et valeur
    let option = document.createElement("option");
    option.text = hour;
    option.value = hour;

    // Ajouter l'option à l'élément de sélection
    select.add(option);
  }
};



/////////////////////////DISPONIBILTY///////////////////////////////////////////////////////////

function checkCouverts() {
  // Récupère la valeur sélectionnée dans le menu déroulant des couverts
  let couverts = document.getElementById("place").value;
  
  // Vérifie si le nombre de couverts dépasse 50
  if (couverts > 50) {
    // Affiche un message d'erreur
    alert("Le nombre de couverts doit être inférieur à 50");
    
    // Empêche l'envoi du formulaire
    return false;
  }
  
  // Permet l'envoi du formulaire si le nombre de couverts est inférieur à 50
  return true;
}

//////////////////////////////////LOCAL STRORAGE////////////////////////////////////////////

// Stocke les données dans le localStorage
localStorage.setItem("nom", nom);
localStorage.setItem("email", email);
localStorage.setItem("allergenes", allergenes);

// Redirige vers le formulaire de réservation
window.location = "Reservation.html";

window.onload = function() {
  // Récupère les données du localStorage
 let nom = localStorage.getItem("nom");
 let email = localStorage.getItem("email");
 let allergenes = localStorage.getItem("allergenes");

  // Remplit les champs de formulaire avec les données récupérées
  document.getElementById("first-name").value = nom;
  document.getElementById("email").value = email;
  document.querySelector('input[name="allergenes"][value="' + allergenes + '"]').checked = true;
};


