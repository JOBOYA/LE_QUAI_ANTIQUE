<?php

// Connecting to the database
$servername = getenv('DB_SERVERNAME');
$username = getenv('DB_USERNAME');
$password = getenv('DB_PASSWORD');
$dbname = getenv('DB_NAME');




if (isset($_POST['submit'])) {
  // Retrieving form data
  $nom = $_POST['nom'];
  $email = $_POST['email'];
  $tel = $_POST['tel'];
  $allergenes = isset($_POST['allergenes']) ? $_POST['allergenes'] : '';
  $details_allergenes = isset($_POST['details_allergenes']) ? $_POST['details_allergenes'] : '';
  $date = isset($_POST['date']) ? $_POST['date'] : '';
  $heure = isset($_POST['heure']) ? $_POST['heure'] : '';
  $couverts = isset($_POST['couverts']) ? $_POST['couverts'] : '';
  $message = isset($_POST['message']) ? $_POST['message'] : '';

 
  $conn = mysqli_connect($servername, $username, $password, $dbname);

  // Preparing the insert request
  $sql = "INSERT INTO reservations (nom, email, tel, allergenes, details_allergenes, date, heure, couverts, message)
 VALUES ('$nom', '$email', '$tel', '$allergenes', '$details_allergenes', '$date', '$heure', '$couverts', '$message')";

  if ($conn->query($sql) === TRUE) {
    // Insert query executed successfully
  } else {
    // Error executing query
    echo "Error: " . $sql . "<br>" . $conn->error;
  }


  // Request to retrieve the total number of cutlery reserved for the selected date
  $query = "SELECT SUM(couverts) AS total_couverts FROM reservations WHERE date='$date'";
  $result = mysqli_query($conn, $query);
  $row = mysqli_fetch_assoc($result);
  $total_couverts = $row['total_couverts'];

//SENDMAIL
  $to = "$email";
  $subject = "RESTAURANT 👨‍🍳LE QUAI ANTIQUE";
  $message = "Cher $nom,
              
  Nous avons le plaisir de vous confirmer votre réservation au Quai Antique pour le $date à $heure.
              
  Nous vous attendons avec impatience pour vous offrir une expérience culinaire inoubliable dans notre établissement. Pour toute modification de votre réservation, veuillez nous contacter au 04 79 60 20 20 ou par courriel à Quai_Antique@gmail.com.
  
  Nous vous remercions de votre confiance et espérons vous accueillir bientôt au Quai Antique.
  
  Cordialement,
  👨‍🍳LE QUAI ANTIQUE";

  $headers = "Content-Type: text/plain; charset=utf-8\r\n";
  $headers .= "From: lena.boya26@gmail.com\r\n";





  //Maximum capacity of the establishment
  $max_capacity = 50;

  // Checks if the desired number of covers exceeds the available capacity
  if ($couverts + $total_couverts > $max_capacity) {
    // Displays an error message
    echo "<script>alert('Malheureusement nous sommes complet, merci de selectionner une autre date.');location.href = 'Reservation.html'</script>";
  } else { // Enregistre la réservation et affiche un message de confirmation


    if (mail($to, $subject, $message, $headers)) {
      // Successful submission
      echo "<script>alert('Votre Réservation a bien été prise en Compte ! Vous allez recevoir un mail de confirmation.');location.href = 'index.html'</script>";


  }

// Closing the connection
$conn->close();
  
  }
}




    ?>


