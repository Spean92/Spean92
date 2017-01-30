<?php

		$txtname = trim($_POST['text_name']);

		$txtphone = trim($_POST['text_phone']);

		// от кого
		$fromMail = 'apkareal@ukr.net';
		$fromName = 'MyLanding';

		// Сюда введите Ваш email
		$emailTo = 'Elektronik91@yandex.ua';

		$subject = 'Заказ звонка';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта MyLanding\n\nИмя: $text_name\nТелефон: $text_phone";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
?>