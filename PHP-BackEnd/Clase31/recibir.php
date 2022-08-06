<?php

echo "Aquí es donde recibo algo.<br>";

echo "<pre>";
var_dump($_GET);
echo "</pre>";
echo "<br>";

//Si quiero ver un valor en particular.
if (count($_GET) < 1)
{
    echo "Usuario no válido.<br>";
}
else
{
    echo "Nombre de usuario: ".$_GET['nombre']."<br>";
    echo "Apellido de usuario: ".$_GET['apellido']."<br>";
    echo "Edad del usuario: ".$_GET['edad']." años.<br>";
}
?>