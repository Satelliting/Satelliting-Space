<?php
// xsmtpsib-d4d90a8de7ae57718676110a68b629d5ecb83d395af75c1d961535f4b4e8cdcf-hDCLbK9SFz1wqmIp
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$to = 'satelliting.official@gmail.com';
$subject = 'New Contact Form Submission';

$firstName = htmlspecialchars($_POST['firstName']);
$lastName = htmlspecialchars($_POST['lastName']);
$email = htmlspecialchars($_POST['email']);
$phoneNumber = htmlspecialchars($_POST['phoneNumber']);
$message = htmlspecialchars($_POST['message']);

$body = "From: $firstName $lastName\nEmail: $email\nPhone: $phoneNumber\nMessage:\n$message";

$headers = 'From: client@satelliting.space' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if(mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Email sent successfully']);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
    http_response_code(500);
}
?>