// // pedirEdad(2022)

// // function pedirEdad(edad){
// //     console.log("hola es tu edad: " + edad)
// // }

// function funcionC(){
//     return true
// }

// function sumarNumeros(numeroA, numeroB, funcionC){
//     if(funcionC){
//         var total= 60
//     }
//     return total 

//     // var total = numeroA + numeroB
//     // if(total>20){
// //     //     return "es es true" + total
// //     // }else{
// //     //     return "esto es false: " + total
// //     // }
// // }

// // function funcionC(){
// //     return true
// // }

// // console.log(sumarNumeros)

// var resultA = sumaNumeros(10,15)
// var resultB = sumarNumeros(10,15)
// var resultC = sumarNumeros(10,15)
// alert("el resultado de la suma es: " +  resultA)

function nombreAlumno(){
    var inputNombre = prompt("ingrese su nombre")
    console.log("hola soy una alumno: " + inputNombre) 
}

function edadAlumno(){
    var inputEdad = parseInt(prompt("ingrese su Edad"))
      if(inputEdad>18){       
             return true
         }else{
            return false
         }   
}

// var guardarVal = edadAlumno()
// console.log(guardarVal)

function pedirDNI(dni){
    console.log("su dni era: " + dni)
}

console.log(document.getElementById('titulo'))
console.log(document.getElementsByClassName('subtitulo'))

//Objetos literales

//Por ejemplo, pokemon, heroe, personaje

/*
Atributos
nombre
cualidades
ropa
personalidad
hobbies
*/

const heroe = {
    //key.....value
    nombre : "Batman",
    apellido : "Diaz",
    color: "Negro",
    edad : 39,
    //puedeVolar : false
    volar : function(capa){
        console.log("No puedo volar. " + capa)
    },
    dinero : function(){
        console.log("Soy millonario")
    }
}

console.log(heroe)
console.log(heroe.nombre)
console.log(heroe.color)
console.log(heroe.edad)
//console.log(heroe.puedeVolar)
//console.log(heroe.volar)
console.log(heroe.volar("No tengo capa"))
console.log(heroe.dinero())

//console es objeto literal
//log es un método

algoPorAqui() //funcion

algoPorAlla.esOtraCosa //llamado a atributo

algoTambien.esOtraCosa() // llamado a método