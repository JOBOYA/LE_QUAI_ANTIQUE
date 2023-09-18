document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('reservationForm');
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const submitBtn = document.getElementById('submitBtn');  // Sélection du bouton

    console.log("Document ready");  // Debug
    // Ajout de l'écouteur d'événements pour le bouton de fermeture de la modal
    closeModalBtn.addEventListener('click', function(e) {
        modal.style.display = "none";
        window.location.href = 'index.html';
    });
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Masquage du texte et affichage du loader
    document.getElementById("buttonText").style.display = "none";
    document.getElementById("loader").style.display = "inline-block";
        submitBtn.disabled = true;

        console.log("Loader should be visible now");
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value; 
        });

        fetch('https://laboheme-f1115e26f1e0.herokuapp.com/reservation', {
          
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {

            document.getElementById("loader").style.display = "none";
            document.getElementById("buttonText").style.display = "inline";
            submitBtn.disabled = false;
          console.log('Success:', data);
          modal.style.display = "block";
        })
        .catch((error) => {
            document.getElementById("loader").style.display = "none";
            document.getElementById("buttonText").style.display = "inline";
           submitBtn.disabled = false;
        });
    });
});