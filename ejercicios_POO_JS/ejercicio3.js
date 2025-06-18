//Crea tres instancias diferentes de la clase Persona con distintos valores y llama al método saludar() desde cada una.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona1 = new Persona("Ana", 28);
const persona2 = new Persona("Luis", 35);
const persona3 = new Persona("Sofía", 22);

persona1.saludar();
persona2.saludar();
persona3.saludar();