//Modifica la clase Persona para que el constructor reciba nombre y edad como argumentos.

// Solicita al usuario los datos
const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuántos años tienes?");

// Clase Persona
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Crear instancia con los datos ingresados
const persona = new Persona(nombre, edad);
persona.saludar();