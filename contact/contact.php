<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $nom = $_POST['nom'];
  $prenom = $_POST['prenom'];
  $telephone = $_POST['telephone'];
  $email = $_POST['email'];
  $objet = $_POST['objet'];
  $message = $_POST['message'];

  $destinataire = 'contact@websiteisfy.fr';

  $corps_message = "Nom: $nom\n";
  $corps_message .= "Prénom: $prenom\n";
  $corps_message .= "Téléphone: $telephone\n";
  $corps_message .= "Email: $email\n\n";
  $corps_message .= "Message:\n$message";

  $headers = "From: $nom <$email>\r\n";
  $headers .= "Reply-To: $email\r\n";

  if (mail($destinataire, $objet, $corps_message, $headers)) {
    header('Location: ../contact/index.html?status=success');
    exit();
  } else {
    echo '<script>alert("Une erreur s\'est produite lors de l\'envoi de l\'e-mail.");</script>';
  }
}
?>
