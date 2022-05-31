//do-while

// var doWhile = 0
// var opcion = prompt("Ingrese un valor para las opciones")

// do
// {
//     console.log("Hola! Probando el ciclo do-while")
//     var notaAlumnos = Number(prompt("Ingrese una nota: "))
//     doWhile++
// }while(doWhile < 5)

//for

// for(var i = 0; i <= 10; i++)
// {
//     if(i % 2 == 0)
//     {
//         console.log("Probando ciclo for: " + i)
//     }
// }

//Vectores - Arrglos (Arrays)

var comidasF = ["pizza", "asado", "empanadas", "tortilla de papa", "milanesa", "sandwich de miga", "matambre", "choripan", "locro", "hamburguesa", "pastelitos"]

// for(var i = 0; i < comidas.length; i++)
// {
//     console.log(comidas[i])
// }

// comidasF = ["pizza", "empanada", "tortilla de papa"]
// var preciosF = [750, 80, 150]
// var totalPrecios = 0

// for(var i = 0; i < comidasF.length; i++)
// {
//     console.log("Comida: " + comidasF[i])
//     console.log("Precio: " + preciosF[i])
//     totalPrecios += preciosF[i]
// }

// console.log("Total precios: " + totalPrecios)

//Realizar un ciclo for que imprima una tabla de multiplicar.

var result
var multiplicationTable = ""
var multiplicand

multiplicand = prompt("Ingrese un número para generar su tabla de multiplicar:")
multiplicand = parseInt(multiplicand)
while(isNaN(multiplicand))
{
    multiplicand = prompt("ERROR, ingrese nuevamente el número para generar su tabla de multiplicar:");
    multiplicand = parseInt(multiplicand);
}

for(var multiplier = 1; multiplier <= 10; multiplier ++)
{
    result = multiplicand + " x " + multiplier + " = " + (multiplicand * multiplier) + "\n"
    multiplicationTable = multiplicationTable + result
}

alert(multiplicationTable)