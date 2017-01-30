<?php

$post = (!empty($_POST)) ? true : false;
if($post) {
    $phone = htmlspecialchars(trim($_POST['phone']));
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $error = '';
    if(!$first_name)
    {
        exit('Пожалуйста введите ваше имя.<br />');
    }
    if(!$phone)
    {
        exit('Пожалуйста введите номер вашего телефона.<br />');
    }
    if($first_name && $phone){
        require 'PHPMailerAutoload.php';

        $mail = new PHPMailer;

        //$mail->SMTPDebug = 3;                               // Enable verbose debug output

        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.yandex.ru';                       // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'travel@eve.ua';            // SMTP username
        $mail->Password = '1234567890';                     // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->setFrom('travel@eve.ua', 'Mailer');
        $mail->addAddress('travel@eve.ua');           // Name is optional
//        $mail->addAddress('');
        $mail->isHTML(true);                                  // Set email format to HTML
        
        $mail->Subject = 'email from travel.eve.ua';
        $mail->Body    = "<h2>Информация:</h2>\n
			<h3>Имя: <b>$first_name</b></h3>\n
			<h3>Фамилия: <b>$last_name</b></h3>\n
			<h3>Телефон: <b>$phone</b></h3>\n
			<h3>Email: <b>$email</b></h3>\n
            <h3>Сообщение: <b>$message</b></h3>\n\n";
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Ваше сообщение было отправлено!';
        }
    }
}
