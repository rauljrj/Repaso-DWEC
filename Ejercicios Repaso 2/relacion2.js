// Ejercicios 3-4

class Agenda {
    constructor() {
        this.contactos = [];
        this.id = 0;
    };

    introducirContacto(nombre, direccion, telefono, email) {
        this.contactos.push({id: this.id, nombre: nombre, direccion: direccion, telefono: telefono, email: email});
        this.id++;

        document.getElementById("#nombre");
        document.getElementById("#direccion");
        document.getElementById("#telefono");
        document.getElementById("#email");

    }

    mostrarContacto(nombre) {
        var existe = false;
        for (var i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                existe = true;
                document.getElementById("encontrado").innerHTML = "<li>Nombre: " + this.contactos[i].nombre + "</li>" +
                    "<li>Direccion: " + this.contactos[i].direccion + "</li>" +
                    "<li>Telefono: " + this.contactos[i].telefono + "</li>" +
                    "<li>Email: " + this.contactos[i].email + "</li>";
            }
        }
        if (existe == false) {
            document.getElementById("encontrado").innerText = "no existe el contacto o el nombre"
        }

    }

    mostrarTodos() {
        var todos = [];
        for (var i = 0; i < this.contactos.length; i++) {
            todos.push(this.contactos[i].nombre);
        }
        document.getElementById("todos").innerHTML = todos;
    }

    borrarContacto(nombre) {
        var borrado = false;
        for (var i = 0; i < this.contactos.length; i++) {
            if (this.contactos[i].nombre === nombre) {
                document.getElementById("eliminado").innerHTML = "Se ha eliminado el contacto:" + nombre;
                this.contactos.splice(i, 1);
                borrado = true;
            }
        }
        if (borrado == false) {
            document.getElementById("eliminado").innerHTML = "no existe el contacto o el nombre";
        }
    }
}

var agenda = new Agenda;

agenda.introducirContacto('manuel', 'calle', '616234567', 'manuel@gmail.com');
