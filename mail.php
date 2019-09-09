<?php 
$name = $_POST['name'];
$title =$_POST['title'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Title: $title \n Message: $message";
$recipient = "oyerooluwatosin@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You for submitting,we promise to attend to you as soon as possible!";
?>