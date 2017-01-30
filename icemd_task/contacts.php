<?php
		$bot_name = trim($_POST['bot_name']);

		$bot_email = trim($_POST['bot_email']);

		$bot_message = trim($_POST['bot_message']);

		// от кого
		$fromMail = 'apkareal@ukr.net';
		$fromName = 'MyLanding';

		// Сюда введите Ваш email
		$emailTo = 'Elektronik91@yandex.ua';

		$subject = 'Форма обратной связи';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта MyLanding\n\nИмя: $bot_name\ne-mail: $bot_email\nСообщение: $bot_message";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
?>