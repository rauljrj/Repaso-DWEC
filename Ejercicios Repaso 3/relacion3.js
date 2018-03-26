function cuerpo() {
    var tabla = document.getElementById('tabla');
    var cuerpo = document.getElementById('cuerpo');

    var colores = ['blue','pink','yellow','red'];
    tabla.style.border = '1px solid black';

    for (let i = 0; i < colores.length; i++){
        let nuevotr = document.createElement('tr');
        nuevotr.id = i
        nuevotr.style.height = '200px';
        nuevotr.style.width = '200px';
        nuevotr.style.display = 'inline-block';
        nuevotr.style.background = colores[i]
        tabla.appendChild(nuevotr);
        nuevotr.addEventListener("mouseover", function() {
            document.body.style.background = colores[i];
        });
    }
}
