//Crea una clase Persona con propiedades nombre y edad, y un método saludar() que muestre un mensaje en consola.

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

// Ejemplo de uso:
const persona1 = new Persona("Ana", 25);
persona1.saludar(); // Hola, mi nombre es Ana y tengo