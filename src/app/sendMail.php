<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $params = json_decode($json);

    if (!isset($params->email) || !isset($params->name) || !isset($params->message)) {
        echo json_encode(['success' => false, 'error' => 'Missing required fields']);
        exit;
    }

    $email = filter_var($params->email, FILTER_SANITIZE_EMAIL);
    $name = htmlspecialchars($params->name);
    $messageContent = htmlspecialchars($params->message);

    $recipient = 'contact@andino-eichberger.com';
    $subject = "Kontaktformular: Nachricht von $name <$email>";
    $message = "Name: $name<br>Email: $email<br>Nachricht:<br><br>$messageContent";

    $headers   = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = "From: 'Mein Portfolio - Kontaktierung' <contact@andino-eichberger.com>";
    $headers[] = "Reply-To: $email";
    $headers[] = "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $subject, $message, implode("\r\n", $headers))) {
        echo json_encode(['success' => true, 'message' => 'Mail sent successfully']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Mail function failed']);
    }
    exit;
} else {
    echo json_encode(['success' => false, 'error' => 'Only POST requests are allowed']);
    exit;
}
