var nombreAlumno = "Hector"

var nota1 = 7

var nota2 = 7

var nota3 = 7

var sumaNotas = nota1 + nota2 + nota3 //auxiliares

//hacer un programa/algoritmo que calcule el promedio

console.log(sumaNotas/3)

console.log("Valor de nota 3: " + nota3)

nota3 = 10

console.log("Valor de nota 3: " + nota3)

//Constantes

const cantidadNotas = 3

const PI = 3.1415
const MESES = 12
const VELOCIDADLUZ = 300000
const FECHANACIMIENTO = "23/07/1984"
const ROBOT = true

//Formas de escribir nombres

var felizCumple = "uppercamelcase"
var finSemanaLargo = "pascuas"
var fin_semana_largo = "pascuas" //snakecase

// hacer un programa que calcule el perimetro de un cuadrado
// var lado = Number(prompt("Ingrese el lado del cuadrado:"))
// var perimetroCuadrado = lado * 4

// console.log("El perímetro del cuadrado es de: " + perimetroCuadrado)

// hacer un programa que calcule el perimetro de un rectangulo
// var ladoRectangulo = Number(prompt("Ingrese el lado del rectángulo: "))
// var baseRectangulo = Number(prompt("Ingrese la base del rectángulo: "))
// var perimetroRectangulo = (ladoRectangulo + baseRectangulo) * 2

// console.log("El perimetro del rectángulo es de: " + perimetroRectangulo)

// hacer un programa que calcule la superficie de un cuadrado
// var ladoCuadrado = Number(prompt("Ingrese el lado del cuadrado para calcular su superficie: "))
// var superficieCuadrado = ladoCuadrado * ladoCuadrado

// console.log("La sup. del cuadrado es: " + superficieCuadrado)

// var nombre = prompt("Ingresa nombre de usuario:")
// var password = prompt("Hola " + nombre + "! Ingresa tu contraseña:")

// document.write("Bienvenido a nuestro sitio " + nombre)

//Operadores de relación
// console.log("El resultado de la comnparación es: " + (4 > 3))
// console.log("El resultado de la comnparación es: " + (4 > 6))
// console.log("El resultado de la comnparación es: " + (4 == 6))
// console.log("El resultado de la comnparación es: " + (4 != 6))
// console.log("El resultado de la comnparación es: " + (4 >= 4))
// console.log("El resultado de la comnparación es: " + (4 == '4'))

// var letraUsuario1 = prompt("Ingrese la letra 1 a adivinar: ")
// var letraUsuario2 = prompt("Ingrese la letra 2 a adivinar: ")
// var letraUsuario3 = prompt("Ingrese la letra 3 a adivinar: ")

// const LETRA_A_ADIVINAR1 = "f"
// const LETRA_A_ADIVINAR2 = "r"
// const LETRA_A_ADIVINAR3 = "t"

// console.log(letraUsuario1 == LETRA_A_ADIVINAR1)
// console.log(letraUsuario2 == LETRA_A_ADIVINAR2)
// console.log(letraUsuario3 == LETRA_A_ADIVINAR3)

// var usuario = prompt("Ingrese su nombre de usuario: ")

// const USUARIOREGISTRADO = "eze"

// console.log(usuario == USUARIOREGISTRADO)

//Condicionales

// const EDADPERMITIDA = 18
// var nombreUsuario = prompt("Ingrese su nombre: ")
// var edadUsuario = prompt("Ingrese su edad: ")
// var relacion1 = edadUsuario == EDADPERMITIDA

// if(relacion1)
// {
//     alert("Puede participar del sorteo")
//     console.log("Puede tomar un aperitivo")
//     document.write("Gracias por venir " + nombreUsuario)
// }
// else
// {
//     alert("No puede participar del sorteo")
//     document.write("Gracias, vuelva pronto")
// }

// const USERNAME = "cac2022"
// const USERPASS = "123456"
// var nombreUsuario = prompt("Ingrese su nombre de usuario: ")
// var passwordUsuario = prompt("Ingrese su password: ")

// if(nombreUsuario == USERNAME)
// {
//     alert("Usuario correcto")
// }
// else
// {
//     alert("Usuario inválido")
// }

// if(passwordUsuario == USERPASS)
// {
//     alert("Contraseña correcta")
// }
// else
// {
//     alert("Vuelva a ingresar la contraseña")
// }

// var diaSemana = prompt("Ingrese un día de la semana en formato número: ")

// if(diaSemana == "1")
// {
//     alert("Gracias es lunes")
// }
// else if(diaSemana == "2")
// {
//     alert("Gracias es martes")
// }
// else if(diaSemana == "3")
// {
//     alert("Gracias es miércoles")
// }
// else if(diaSemana == "4")
// {
//     alert("Gracias es jueves")
// }
// else if(diaSemana == "5")
// {
//     alert("Gracias es viernes")
// }
// else if(diaSemana == "6")
// {
//     alert("Gracias es sábado")
// }
// else if(diaSemana == "7")
// {
//     alert("Gracias es domingo")
// }
// else
// {
//     alert("Ha ingresado un valor inválido")
// }

//TAREA
/*
Pedir al usuario 2 números, 
dependiendo el tipo de operación
muestre el resultado
*/

// var resultado
// var operando1 = Number(prompt("Ingrese un número para operar: "))
// var operando2 = Number(prompt("Ingrese otro número para operar:  "))
// var operador = prompt("Ingrese la operación a realizar: \n'+'.Para sumar          '-'.Para restar"
//                       + "\n'*'.Para multiplicar    '/'.Para dividir")
// if(operador == "+")
// {
//     resultado = operando1 + operando2
//     alert("El resultado de la operación es: " + operando1 + " " + operador + " " + operando2 + " = " + resultado)
// }
// else if(operador == "-")
// {
//     resultado = operando1 - operando2
//     alert("El resultado de la operación es: " + operando1 + " " + operador + " " + operando2 + " = " + resultado)
// }
// else if(operador == "*")
// {
//     resultado = operando1 * operando2
//     alert("El resultado de la operación es: " + operando1 + " " + operador + " " + operando2 + " = " + resultado)
// }
// else if(operador == "/")
// {
//     if(operando2 == 0)
//     {
//         alert("Es imposible dividir por " + operando2 + " (cero).")
//     }
//     else
//     {
//         resultado = operando1 / operando2
//         alert("El resultado de la operación es: " + operando1 + " " + operador + " " + operando2 + " = " + resultado)
//     }
// }
// else
// {
//     alert("Se ha producido un error.")
// }


/*
Emular un cajero:
ingreso pin
usuario y pass
setear monto
extraer
transferir
depositar
consultar
pesos / dolares
*/

const PIN = "1234"
const USER = "lalo"
const PASS = "asd123"

function getRandomFloat(min, max, decimals)
{
    const str = (Math.random() * (max - min) + min).toFixed(decimals)

    return parseFloat(str)
}

var balance = getRandomFloat(0.99, 100000.99, 2)
var cashFlow = 0

console.log(balance)
var pin = prompt("BIENVENIDO\nINGRESE PIN")
if(pin != PIN)
{
    alert("ERROR. Ha ingresado un PIN inválido.")
}
else
{
    var user = prompt("Ingrese su nombre de usuario")
    var password = prompt("Ingrese su contraseña")

    if(user != USER || password != PASS)
    {
        alert("Los datos ingresados son inválidos")
    }
    else
    {
        var option = prompt("Seleccione la operación que desea realizar:\n1-Extraer efectivo      2-Transferir dinero\n" +
                            "3-Depositar dinero    4-Consultar saldo")
        
        if(option == "1" && balance > 0)
        {
            cashFlow = Number(prompt("Ingrese el monto que desea extraer"))
            if(cashFlow > 0 && cashFlow <= balance)
            {
                balance = balance - cashFlow
                alert("Retire su dinero.\nSaldo actual: $ " + balance)
            }
            else
            {
                alert("Saldo insuficiente para realizar la operación")
            }
        }
        else if(option == "2" && balance > 0)
        {
            prompt("Ingrese el número de cuenta al que desea transferir dinero")
            cashFlow = Number(prompt("Ingrese el monto que desea transferir"))
            if(cashFlow > 0 && cashFlow <= balance)
            {
                balance = balance - cashFlow
                alert("La transferencia se ha realizado con éxito.\nSaldo actual: $ " + balance)
            }
            else
            {
                alert("Saldo insuficiente para realizar la operación")
            }
        }
        else if(option == "3")
        {
            cashFlow = Number(prompt("Ingrese el monto de dinero a depositar"))
            if(cashFlow > 0)
            {
                balance = balance + cashFlow
                alert("La operación se ha realizado con éxito.\nSaldo actual: $ " + balance)
            }
            else
            {
                alert("Ha ingresado un valor inválido. Inténtelo nuevamente.")
            }
        }
        else if(option == "4")
        {
            option = prompt("Ingrese la opción para el tipo de saldo que desea consultar:\n1-Pesos         2-Dólares")
            if(option == "1")
            {
                alert("Su saldo actual en pesos es de $ " + balance)
            }
            else if(option == "2")
            {
                var conversion = balance / 115.72
                alert("Su saldo actual en dólares es de u$s " + conversion.toFixed(2))
            }
            else
            {
                alert("Ha ocurrido un error al procesar la operación.")
            }
        }
        else
        {
            alert("Ha ocurrido un error al procesar la operación.")
        }
    }
}