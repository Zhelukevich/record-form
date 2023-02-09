<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail=new PHPMailer(true);
$mail->Char='UTF-8';
$mail->setLanguage('ru','PHPMailer-6.7.1/language/');
$mail->IsHTML(true);


$mail->setFrom('pashazhelukevich1@gmail.com', 'Желукевич Павел');
$mail->addAddress('pashazhelukevich1@yandex.by');    
$mail->Subject = 'Запись на семинар';               



$body = '<h1>Запись на семинар!</h1>';

if(trim(!empty($_POST['name']))){
  $body = '<p><strong>Имя:</strong> '$_POST['name'].' </p>';
}

if(trim(!empty($_POST['email']))){
  $body = '<p><strong>Email:</strong> '$_POST['email'].' </p>';
}

if(trim(!empty($_POST['seminar']))){
  $body = '<p><strong>Семинар:</strong> '$_POST['seminar'].' </p>';
}

$mail->Body = $body;

  if(!$mail->send()){
  $message='Ошибка';
  }else{
  $message='Ваша заявка успешно отправлена и находиться в обработке. Ожидайте email с подтверждением бронирования';
  }

$response=['message' => $message];

  header('Content-type: application/json');
  echo json_encode($response);
?>