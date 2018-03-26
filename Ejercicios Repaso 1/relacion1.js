var num = [1,2,3,4,5,6];
var palabras = ["hola", "pepe", "jose"];

function max(array) {
    return Math.max.apply(null, array);
    
}
function filtraPalabrasMayores(array, valor) {
    var devolucion = [];
    for (var i = 0; i < array.length; i++) {
      if (array[i].length >= valor) {
          devolucion.push(array[i]);
      }
    }
    return devolucion
}
console.log(max(num));
console.log(filtraPalabrasMayores(palabras, 4));