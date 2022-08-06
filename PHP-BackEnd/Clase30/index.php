<?php
    echo "<h2>Hola esto es PHP</h2><br>";

    //Arrays indexados.
    $series = ['Stranger Things', 'Obi Wan', 'Abogado de Lincoln', 
    'Demon Slayer', 'El Santo', 'Better call Saul', 'Vikings', 'The Expanse','Last Kingdom'];

    $costos = ['1500', 700, '2890', 2899, '2870', 4020];

    echo $series[0]." ";
    echo $costos[2]."<br>";

    for ($i=0; $i < count($series); $i++) 
    { 
        echo $series[$i]."<br>";
    }

    //Arrays asociativos.

    echo "<br>";
    $personas = Array(
        'nombre' => "Franco",
        'apellido' => "Loker",
        'edad' => 34,
        'humano' => true
    );

    echo $personas['nombre']."<br>";
    echo $personas['apellido']."<br>";
    echo $personas['edad']."<br>";
    echo $personas['humano']."<br>";

    if ($personas['humano'] == true) 
    {
        echo "El humano se llama ".$personas['nombre'].".<br>";
    }

    foreach ($personas as $persona => $value) 
    {
        echo $value."<br>";
    }

    echo "<br>";

    //Acumuladores.
    $acumulador = 0;
    $costos = ['1500', 700, '2890', 2899, '2870', 4020];

    for ($i=0; $i < count($costos); $i++) 
    { 
        $unidad = 1;
        echo "Costo ".$i+$unidad.": ".$costos[$i]."<br>";
        $acumulador += $costos[$i];
    }

    echo "La suma de los costos es: ".$acumulador."<br>";
    echo "<br>";

    //Ciclo while.
    $contador = 0;
    while ($contador < 10) 
    {
        echo "Ejecutando while...<br>";
        $contador += 2;
    }

    echo "<br>";

    //Funciones.
    function mostrarNombre()
    {
        echo "Hola, soy una función en PHP.<br>";
    }

    //Invocar a la función.

    mostrarNombre();

    //Funciones con parámetros.
    function mostrarNombrePorParametro($nombre)
    {
        echo "Hola, soy una función que recibió este nombre: ".$nombre."<br>";
    }

    mostrarNombrePorParametro($personas['nombre']);
    echo "<br>";

    //Funciones con retorno.
    function funcionConRetorno($a, $b)
    {
        $suma = $a + $b;
        return $suma;
    }

    $a = 45;
    $b = 32.87;

    $resultado = funcionConRetorno($a, $b);
    echo "El resultado de la suma entre ".$a." y ".$b." es igual a: ".$resultado."<br>";