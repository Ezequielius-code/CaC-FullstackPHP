var dni = true
var usuario = true
var password = true

if(dni == true && usuario == true || !(password == true))
{
    alert("El resultado general es true")
}
else
{
    alert("El resultado general es false")
}

//Ciclos repetitivos

var dato1 = 0
// var pedirDato = prompt("Ingrese un número del 1 al 10")

while(dato1 <= 10)
{
    console.log("Ciclo repetitivo while " + dato1)
    //dato1 = 10
    dato1 += 2
}

console.log("El valor de dato1 es: " + dato1)

dato1 = 0

while(dato1 < 5)
{
    var valorDato = prompt("Ingrese un valor:")
    console.log("Valor dato ingresado: " + valorDato)
    dato1++
}

//Acumuladores

var dato = 1
var acumulador = 0
var cantidadIngresos = Number(prompt("¿Cuántas notas va a ingresar?"))

if(cantidadIngresos > 0)
{
    while(dato <= cantidadIngresos)
    {
        var nota = Number(prompt("Ingrese la nota " + (dato) + ": "))
        console.log("Valor de nota " + (dato) + ": " + nota)
        acumulador = acumulador + nota 
        dato++
    }

    var promedio = acumulador / (dato - 1)

    alert("El promedio de notas es: " + promedio)
}
else
{
    alert("Ha ingresado un dato inválido")
}

var vidas = 3
var letra
const LETRAREAL = "a"
var contador = 0

while(contador < 3)
{
    letra = prompt("Ingrese una letra a adivinar")
    console.log("Vidas restantes: " + vidas)
    if(letra == LETRAREAL)
    {
        alert("Felicitaciones!!! Adivinaste la letra")
        alert("Finalizaste el juego con " + vidas + " vidas")
        break;
    }
    else
    {
        vidas--
    }
    contador++
}