//Ejercicio 5


var parrafo = document.createElement("p");

var frase = document.createTextNode("hola mundo");

parrafo.appendChild(frase);

document.body.appendChild(parrafo);

function eliminaElemento() {
    parrafo.parentNode.removeChild(parrafo);
}

eliminaElemento();

//Ejercicio 6

function crearTabla(array) {
    var fila = false;
    document.getElementById("#tabla").innerHTML="<table></table>";
    for (var i = 0; i < array.length; i++){
        if (array[i] === " "){
            fila = true;
            i++
            document.getElementById("#tabla").innerHTML= "<tr>";
        }
        if (fila === true){
            document.getElementById("#tabla").innerHTML= "<td>" + array[i] + "</td>";
        }
        if (fila === false){
            document.getElementById("#tabla").innerHTML= "<th>" + array[i] + "</th>";
        }
    }
}
