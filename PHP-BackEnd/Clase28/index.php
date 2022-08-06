<?php
echo "Hola Mundo PHP";

//Formas de comentar:

//Una sola línea

/*
    Multilínea
*/

/*
Tipos de datos:
_ String;
_Enteros;
_Flotantes;
_Booleanos
*/

//Forma de escribir variables
$curso = "curso 2022 PHP";
$nombre = 10;
$numeroA = 10.5;
$nombre99 = "casa";
$_nombreVariable = true;

echo $nombre;

//script PHP y HTML embebido
echo "<br>";

echo "<ul>";
echo "<li>";
echo "Hola a todos";
echo "</li>";
echo "</ul>";

echo "<br>";

echo $nombre + $numeroA;

//No hace falta cerrar la etiqueta de PHP si sólo trabajo con este lenguaje.
//Puede entrar en conflicto si uso otros lenguajes de etiquetas.
?>

echo "Hola Mundo PHP";

<h1>Hola esto es HTML</h1>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hola PHP</title>
</head>
<body>
    <h1>Hola esto es HTML</h1>
    <h2> echo $curso</h2>
    <h2><?php echo $curso; ?></h2>
    <h2><?php $curso = "Fullstack-PHP"; ?></h2>
    <h2><?php echo $curso; ?></h2>
    
    <!--Bloque exclusivo PHP-->
    <?php
        if(5 > 3)
        {
            $curso = "React";
        }
    ?>

    <ul>
        <li>
            <?php echo $curso;?>🐱‍💻
        </li>
        <li>
            <?php echo $curso;?>🐱‍💻
        </li>
        <li>
            <?php echo $curso;?>🐱‍💻
        </li>
        <li>
            <?php
                if(5 < 7)
                {
                    $curso = "NodeJS";
                }
                echo $curso;
            ?>😁
        </li>
    </ul>
</body>
</html>