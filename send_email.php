<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$response = ["success" => false, "message" => ""];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP sozlamalari
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP serveri
        $mail->SMTPAuth = true;
        $mail->Username = 'sizning_emailingiz@gmail.com'; // Emailingiz
        $mail->Password = 'email_parolingiz'; // Parol
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Emailni sozlash
        $mail->setFrom('sizning_emailingiz@gmail.com', 'Sayt Xabari');
        $mail->addAddress('qabul_qiluvchi_email@gmail.com'); // Qabul qiluvchi

        $mail->Subject = "Saytdan xabar: $name";
        $mail->Body = "Ism: $name\nEmail: $email\nXabar:\n$message";

        $mail->send();
        $response["success"] = true;
        $response["message"] = "Xabar muvaffaqiyatli yuborildi!";
    } catch (Exception $e) {
        $response["message"] = "Xatolik yuz berdi: {$mail->ErrorInfo}";
    }
}

header('Content-Type: application/json');
echo json_encode($response);
?>
