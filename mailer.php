<?php
// define variables and set to empty values
$firstname = $lastname = $email = $reason = $message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $firstname = test_input($_POST["firstname"]);
  $lastname = test_input($_POST["lastname"]);
  $email = test_input($_POST["email"]);
  $reason = test_input($_POST["reason"]);
  $message = test_input($_POST["message"]);
  $header = "From: contact@brett-haymaker.com". "\r\nReply-to: " . $email . "";

  $headers = "From: $from\r\nReply-to: $email";
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
// the message
// $msg = "First line of text\nSecond line of text";

// // use wordwrap() if lines are longer than 70 characters
// $message = wordwrap($msg,70);
$intro = $message;
// send email
mail("brett.haymaker@gmail.com",$reason,$intro,$header);
?>