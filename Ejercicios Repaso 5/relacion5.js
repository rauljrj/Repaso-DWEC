// Ejercicios 2, 3, 4, 5

function insertarFila() {
    var posicion = document.getElementById("insertarFila").value;
    var tabla = document.getElementById("tabla");
    tabla.insertRow(posicion).innerHTML = "fila insertada"
}

function actualizarCelda() {
    var fila = document.getElementById("nFila").value;
    var columna = document.getElementById("nColumna").value;
    var texto = document.getElementById("texto").value;
    document.getElementById("tabla").rows[fila].cells[columna].innerHTML = texto
}

var existe = false;

function dropdown() {
    var contenedor = document.getElementById("dropdown");
    if (existe === false) {
        var dropdown = document.createElement("select");
        dropdown.setAttribute("id", "dropdown")
        existe = true;
        contenedor.appendChild(dropdown)


    }
}

function insertarOpcion() {
    var dropdown = document.getElementById("dropdown");
    dropdown.options.add(new Option(document.getElementById("textOpcion").value));
}