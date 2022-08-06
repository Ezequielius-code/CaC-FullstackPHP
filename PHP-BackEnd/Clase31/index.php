<?php

//Variables.
$jueves = "Mucho frío";
echo $jueves."<br>";

//Constantes.
define("nombreConstante", "ValorConstante");

//Imprimo la constante:
echo nombreConstante."<br><br>";

//Array indexado.
$clienteIndexado = ["Franco", "Ezequiel", "Víctor"];
$edadIndexada = [25, 24, 48];

$cliente = 
[
    'nombre' => "Juan",
    'saldo' => 1500,
    'informacion' => [
        'tipo' => 'Premium',
        'estaActivo' => true
    ]
];

echo "Nombre del cliente: ".$cliente['nombre']." Plan: 
    ".$cliente['informacion']['tipo']."<br><br>";

//Modificar valores dentro del array asociativo.
$cliente['nombre'] = "Santiago";

//Agregar elemento al array asociativo.
$cliente['codigo'] = 123456;

echo "Nombre del cliente: ".$cliente['nombre']." Plan: 
    ".$cliente['informacion']['tipo']." Código: ".$cliente['codigo']."<br><br>";

var_dump($cliente);
//Etiqueta <pre> para mostrar la estructura de un array asociativo.
echo "<pre>";
var_dump($cliente);
echo "</pre><br><br>";

//Para evitar asociar de la siguiente manera:
$productos = ["mouse","placa video","disco SSD","ram","mother","diskette"];
$precios = [400,5000,4000,2000,5000,10];
$marcas = ["LG","Samsumg","EXO","Asus","Western","HP"];

echo $productos[0].$precios[0].$marcas[0]."<br><br>";

//Declaramos un array asociativo con la siguiente forma:
// $productosExo = [ [], [], [] ];

$productosStock = [
    [
        'producto' => "mouse",
        'precio' => 400,
        'marca' => "LG"
    ],
    [
        'producto' => "placa video",
        'precio' => 5000,
        'marca' => "Samsung"
    ],
    [
        'producto' => "ram",
        'precio' => 4000,
        'marca' => "Exo"
    ]
];

echo "Mostrando elementos de array asociativo:<br>";
echo $productosStock[0]['producto']."<br>";
echo $productosStock[1]['producto']." ".$productosStock[1]['precio']."<br>";
?>