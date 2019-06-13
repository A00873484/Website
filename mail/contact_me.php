<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$mail = new PHPMailer;
// $mail->isSMTP();  
// $mail->Host = '';  // Specify main and backup SMTP servers
// $mail->SMTPAuth = true;                               // Enable SMTP authentication
// $mail->Username = '';                 // SMTP username
// $mail->Password = '';// Set mailer to use SMTP
//$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
//$mail->Port = 587;     

$mail->From = $_POST['email'];

$mail->FromName = $_POST["fname"]." ".$_POST["lname"];

$mail->addAddress('danny.engelhard@gmail.com');  // Add a recipient

$mail->WordWrap = 50;                                 // Set word wrap to 50 characters

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Contact from Portfolio Site';

$mail->Body = '

Name : '.$name.' <br/>

Email : '.$email.' <br/>

Phone : '.$phone.' <br/>

Date : '.date("F j Y g:ia").' <br/>

Message : <br/>'.$message;

if(!$mail->send()) {

  // echo 'Message could not be sent.';

  // echo 'Mailer Error: ' . $mail->ErrorInfo;

  http_response_code(500);

  exit;

}


?>
