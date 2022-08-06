<?php
    $nombre = "Probando condicionales/switch";
    $apellido = "Nazar";
    $edad = 26;
    $booleanos = true;
    $numeroA = 150;
    $numeroB = 150.15;

    echo "Hola Mundo";

    var_dump($nombre);
    var_dump($booleanos);
    var_dump($numeroA);
    var_dump($numeroB);

    $numeroA = "casa";
    var_dump($numeroA);

    $comidas = ["milanesa", "empanada", "pizza", "asado"];
    var_dump($comidas);

    $precios = [750, 180, 1300, 850];

    echo "<br>";
    echo $comidas[3];

    $numeroA = 150;
    $suma = $numeroA + $numeroB;

    echo $suma;

    echo "<br>";

    echo "El usuario es: ".$apellido." y su edad es: ".$edad." años.";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Clase 29</title>
</head>
<body>
    <h1>Saludo: <?php echo "Hola esto es PHP "?></h1>
    <?php
        if($edad > 18)
        {
            echo "<h2>".$nombre."</h2>";
        }    
    ?> 
    <?php
        $nombre = "Juan";

        if($edad > 18 && $nombre == "juan")
        {
            echo "El nombre no es válido";
        }
        else
        {
            echo "<h2>".$nombre."</h2>";

            $sumaTotalPrecios = $precios[0] + $precios[1];

            echo "La suma total de su pedido es de $ ".$sumaTotalPrecios.".-";
        }    
    ?>
    <h2>Listado de comidas 🍔</h2>
    <ul>
        <li>
            <?php echo $comidas[0]?>🥪
        </li>
        <li>
            <?php echo $comidas[1]?>🥟
        </li>
        <li>
            <?php echo $comidas[2]?>🍕
        </li>
        <li>
            <?php echo $comidas[3]?>🍖
        </li>
    </ul>  
    <h2>Listado de precios 🍔</h2>
    <ul>
        <li>
            <?php echo $precios[0]?>🥪
        </li>
        <li>
            <?php echo $precios[1]?>🥟
        </li>
        <li>
            <?php echo $precios[2]?>🍕
        </li>
        <li>
            <?php echo $precios[3]?>🍖
        </li>
    </ul>
</body>
</html>

<?php
    echo "Hola, estoy fuera de la estructura. 🥗<br>";

    $operadoresRelacionales = "Probando operadores relacionales.";

    echo $operadoresRelacionales."<br>";

    // > - < - >= - <= - == - ===

    $comparacion1 = 10 > 5;
    $comparacion2 = 10 < 5;
    
    echo $comparacion1; //Devuelve un 'bool' con el valor de 'true' e imprime un 1.
    echo "<br>";
    echo $comparacion2; //Devuelve un 'bool' con el valor de 'false', pero no imprime nada.
    echo "<br>";
    
    $contador = 1;
    echo "Valor actual del contador: ".$contador."<br>";
    $contador = $contador + 1;
    echo "Valor actual del contador: ".$contador."<br>";
    $contador += 1;
    echo "Valor actual del contador: ".$contador."<br>";
    $contador++;
    echo "Valor actual del contador: ".$contador."<br>";
    //De igual manera se utilizan los operadores de decremento.
?>