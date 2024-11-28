<?php

use PHPMailer\PHPMailer\PHPMailer;
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Check if data is sent via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Create PHPMailer instance
    $mail = new PHPMailer(true);

    // Check which form is submitted
    if (isset($_POST['phone_second'])) {
        // Handle first form
        $phone = $_POST['phone_second'];
        $subject = 'Name Form Submission';
        $body = "phone: $phone";
    } elseif (isset($_POST['secondname']) && isset($_POST['phone'])) {
        // Handle second form
        $secondname = $_POST['secondname'];
        $phone = $_POST['phone'];
        $subject = 'Secondname and Phone Form Submission';
        $body = "Second Name: $secondname<br>Phone: $phone";
    } else {
        echo 'No data received';
        exit;
    }

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.yandex.ru';
        $mail->SMTPAuth = true;
        $mail->Username = 'otpravitelpisem2021@yandex.ru';
        $mail->Password = 'poyiekzchaulqohz';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;
        $mail->CharSet = "UTF-8";

        $mail->setFrom('otpravitelpisem2021@yandex.ru', 'Mailer');
        $mail->addAddress('asadbekqulboyev@gmail.com', 'Recipient 1');

        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        echo 'Message has been sent.';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo 'Method Not Allowed';
}

