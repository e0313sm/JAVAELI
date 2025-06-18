//Crea un método mostrarInfo() en la clase Persona que recorra sus propiedades (usando for...in) e imprima sus valores.

class Persona {
    #edad;

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

    mostrarInfo() {
        for (let prop in this) {
            if (Object.hasOwnProperty.call(this, prop)) {
                console.log(`${prop}: ${this[prop]}`);
            }
        }
        // Mostrar la propiedad privada edad
        console.log(`edad: ${this.#edad}`);
    }
}

// Ejemplo de uso:
const persona = new Persona("Lucía", 22);
persona.mostrarInfo();
// Salida:
// nombre: Lucía