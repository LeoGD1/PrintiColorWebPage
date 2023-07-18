<?php
    //correo al que se enviaran los mensajes
    $destinatario = 'printi.color75@hotmail.com';

    //se declaran la variables con el nombre que se le colocaron en el input a cada espacio del formulario
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    //header que contedrá el correo al llegar 
    $header = "Enviado desde la pagina de Printi Color";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);

    echo "<script>alert('Mensaje enviado correctamente')</script>";

    echo "<script>setTimeout(\"location.href = '../pages/Contacto.php'\",1000)</script>";

?>