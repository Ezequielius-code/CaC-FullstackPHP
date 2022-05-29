// var comidasF = ["pizza", "empanada", "tortilla"]
// var preciosF = [750, 80, 150]
// var barriosComidas = ["a", "b", "c"]
// var totalPrecios = 0

// for(var i = 0; i < comidasF.length; i++)
// {
//     console.log("Comida: " + comidasF[i])
//     console.log("Precio: " + preciosF[i])
//     totalPrecios += preciosF[i]

//     barriosComidas[i] = prompt("Ingrese el barrio")
//     console.log("Barrio comidas: " + barriosComidas[i])
// }

// console.log("Total precios: " + totalPrecios)

//Funciones en JavaScript

alert("Ahora sé que esto es una función")

//Crear una función
function pedirNombre()
{
    console.log("Hola funciones sin parámetros")
}

//LLamar o invocar a una función
pedirNombre()

console.log("Hola, aquí otro bloque de código")

pedirNombre()

console.log("Hola, bloque de código 4 *******")

pedirNombre()

//Funciones con parámetros

function pedirEdad(edad)
{
    console.log("Tu edad es " + edad)
}

//Invocar funciones con parámetros
pedirEdad(18)

pedirEdad(20)

// function pedirNombreCompleto(nombre)
// {
//     console.log("Tu nombre es: " + nombre)
// }

// pedirNombreCompleto("Carlos")

// pedirNombreCompleto("Marta")

function pedirNombreCompleto(nombre, edad = 96, verdad = true)
{
    if(verdad)
    {
        console.log("Tu nombre es: " + nombre)
        console.log("Tu edad es: " + edad)
    }
    else
    {
        console.log("La persona no existe")
    }
}

pedirNombreCompleto("Carlos", 18, true)

pedirNombreCompleto("Marta", 35, false)

pedirNombreCompleto("Héctor", 45)

pedirNombreCompleto("Ezequiel")

//Funciones con retorno

function funcionDevuelveAlgo()
{
    return 18
}

console.log(funcionDevuelveAlgo())

var varVariable = funcionDevuelveAlgo()

let letVariable = funcionDevuelveAlgo()

console.log("Aquí estoy guardando en var: " + varVariable)
console.log("Aquí estoy guardando en let: " + letVariable)