var contador = 0
var divContador = document.getElementById("count")
function Inc(){
    contador++
    divContador.innerText = contador
}

function Dec(){
    contador--
    divContador.innerText = contador
}

function Reset(){
    contador = 0
    divContador.innerText = contador
}