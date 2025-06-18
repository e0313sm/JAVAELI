//Modifica la clase Persona para que edad sea una propiedad privada (usando #edad) y crea métodos getEdad() y setEdad() para acceder y modificarla.

class Persona {
    #edad; // propiedad privada

    constructor(nombre, edad) {
        this.nombre = nombre;
        this.#edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.#edad} años.`);
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }
}

// Ejemplo de uso:
const persona = new Persona("Lucía", 22);
console.log(persona.getEdad()); // 22
persona.setEdad(25);
console.log(persona.getEdad()); // 25
persona.saludar(); // Hola, mi nombre es Lucía y tengo 25