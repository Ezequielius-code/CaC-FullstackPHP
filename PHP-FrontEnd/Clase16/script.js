var sueldo = 85000
var sueldoIgnacio = 0
var sueldoEmanuel = 0
var sueldoHector = 0
var opcion = prompt("Ingrese una operación a realizar:\n1. Extraer    2. Depositar\n3. Transferir    4. Consultar")

switch (opcion) {
    case "1":
        console.log("Extraer dinero")
        var extraer = Number(prompt("Seleccione monto a extraer:"))
        sueldo = sueldo - extraer
        console.log("El sueldo total es: $ " + sueldo + ".-")
        break;
    case "2":
        console.log("Depositar dinero")
        var depositar = Number(prompt("Seleccione monto a depositar:"))
        sueldo = sueldo + depositar
        console.log("El sueldo total es: $ " + sueldo + ".-")
        break;
    case "3":
        console.log("Transferir dinero")
        var transferir = Number(prompt("Seleccione monto a transferir: "))
        sueldo = sueldo - transferir
        var destino = prompt("Seleccione el destinatario:\n1-Ignacio    2-Emanuel    3-Héctor")
        if(destino == "1")
        {
            sueldoIgnacio = sueldoIgnacio + transferir
            console.log("Gracias por el envío.\nSueldo Ignacio es: $ " + sueldoIgnacio + ".-")
            console.log("El saldo de su sueldo es: $ " + sueldo + ".-")
        }
        break;
    case "4":
        console.log("Consultar saldo")
        alert("Su saldo actual es: $ " + sueldo + ".-")
        console.log("Su saldo actual es: $ " + sueldo + ".-")
        break;
    default:
        console.log("Gracias por operar con nosotros")
        break;
}

//Operadores lógicos (AND - OR)
//Tablas de verdad

/*
&& - (AND)
false && false = false
false && true = false
true && false = false
true && true = true
*/

console.log("*true**AND**true*")
console.log((4 > 3) && (3 > 2))
console.log("*false**AND**false*")
console.log((1 > 3) && (3 < 2))
console.log("*false**AND**true*")
console.log((1 < 3) && (3 > 2))

var usuario = prompt("Ingrese su usuario:")
var password = prompt("Ingrese su password:")

const USUARIOREAL = "luca"
const PASSWORDREAL = "1234"

var resultadoLogico = (usuario == USUARIOREAL) && (password == PASSWORDREAL)

if(resultadoLogico)
{
    console.log("Ingreso exitoso")
}
else
{
    console.log("Ingreso erróneo")
}

/*
|| - (OR)
false || false = false
false || true = true
true || false = true
true || true = true
*/

var telefono = false
var email = true

console.log(true || true)
console.log(false || true)
console.log(true || false)
console.log(false || false)

console.log("Usuario tiene teléfono o email: " + (telefono || email))

console.log((true || false) && true)