<?php
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;

    // Настройки почты
    $mail->Host = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username = 'YOURLOGIN'; // Логин на почте
    $mail->Password = 'YOURPASSWORD'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('youremail@gmail.com', 'YOUR NAME'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('youremail@yandex.ru');
    $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму
    if (!empty($_FILES['avatar']['name'][0])) {
        for ($ct = 0; $ct < count($_FILES['avatar']['tmp_name']); $ct++) {
            $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['avatar']['name'][$ct]));
            $filename = $_FILES['avatar']['name'][$ct];
            if (move_uploaded_file($_FILES['avatar']['tmp_name'][$ct], $uploadfile)) {
                $mail->addAttachment($uploadfile, $filename);
            } else {
                $msg .= 'Неудалось прикрепить файл ' . $uploadfile;
            }
        }
    }

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Новое обращение с сайта';
    $mail->Body = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone<br><br>
        <b>Сообщение:</b><br>$message";


// Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }

} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}