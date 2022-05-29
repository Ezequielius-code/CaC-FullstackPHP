// console.log(document.doctype)

// console.log(document.head)

// // console.log(document.body)

// // console.log(document.all)

// console.log(document.all[15])

// console.log(document.all[16])



var tituloPagina = document.getElementById('header-title')

tituloPagina.textContent="Gracias por el Spoiler"

var divElemento = document.getElementById('esotroid')

console.log(divElemento)
console.log(divElemento.textContent="hola")

//horaClave

var subTitulo = document.getElementById("horaClave")

console.log(subTitulo)


// var edadUsuario = Number(prompt("ingrese la edad del usuario"))

// var nombreAlumno = "Luciano"

// if(edadUsuario>18){

//     subTitulo.textContent="Es mayor de edad"

// }else{

//     subTitulo.textContent="Es menor de edad"
// }


var valorInput = document.getElementById("inputUnico")

console.log(valorInput.value)


function imprimir(){
 
    console.log(valorInput.value)

    console.log(valorInput.value + valorInput.value)

    divElemento.textContent= valorInput.value

    var valorNumero = Number(valorInput.value)

    if(valorNumero > 18){

        itemsNuevos[0].style.color = "red"

        tituloPagina.style.display = "none"

        itemsNuevos[2].style.backgroundColor = "red"
        
        }
}

//esotroid


var itemsNuevos = document.getElementsByClassName("list-group-item")

console.log(itemsNuevos[0])
console.log(itemsNuevos[1])
console.log(itemsNuevos[2])
console.log(itemsNuevos[3])
console.log("****Text Content****")
console.log(itemsNuevos[0].textContent)
console.log("****Value****")
console.log(itemsNuevos[0].value)

var numCasa = 0


for(var i=0;i<itemsNuevos.length ; i++){

    console.log(itemsNuevos[i].textContent)

    itemsNuevos[i].textContent = "Cantidad de :" + i + (numCasa++)

    if(i%2==0){
    
        itemsNuevos[i].style.backgroundColor = "#F2F4F4"

    }
}


if(valorInput.value =="1"){

itemsNuevos[0].style.color = "red"

}












