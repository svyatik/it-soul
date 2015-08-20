<?php
    // Get username from client
    $name = $_REQUEST["name"];
    // Get email from client
    $email = $_REQUEST["email"];
    // Get phone number from client
    $phone = $_REQUEST["phone"];
    // Get Message from client
    $msg = $_REQUEST["msg"];

    $to = 'yarema.aum@gmail.com';
    $subject = 'From Our Clients';
    $message = "<b>Name </b>: " . $name . "<br>" .
                "<b>Email </b>" . $email . "<br>" .
                "<b>Phone </b>" . $phone . "<br>" .
                "<hr><br><b>Message </br>".$msg;
    $headers = 'From: webmaster@example.com' . "\r\n" .
        'Reply-To: webmaster@example.com' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);
?>