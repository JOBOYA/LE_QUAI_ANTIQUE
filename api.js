document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('reservationForm');
    const modal = document.getElementById("myModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    // Ajout de l'écouteur d'événements pour le bouton de fermeture de la modal
    closeModalBtn.addEventListener('click', function(e) {
        modal.style.display = "none";
        window.location.href = 'index.html';
    });
  
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(form);
        const data = {};

        formData.forEach((value, key) => {
            data[key] = value; 
        });

        fetch('https://laboheme.onrender.com/reservation', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
          console.log('Success:', data);
          modal.style.display = "block";
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});