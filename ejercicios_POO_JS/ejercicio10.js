//Crea una clase Direccion con propiedades calle y ciudad, y agrégala como propiedad dentro de la clase Persona. Luego, imprime la dirección completa desde un método.

class Direccion {
    constructor(calle, ciudad) {
        this.calle = calle;
        this.ciudad = ciudad;
    }
}

class Persona {
    #edad;

    constructor(nombre, edad, direccion) {
        this.nombre = nombre;
        this.#edad = edad;
        this.direccion = direccion; // Objeto de tipo Direccion
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.#edad} años.`);
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(nuevaEdad) {
        this.#edad = nuevaEdad;
    }

    mostrarDireccion() {
        if (this.direccion) {
            console.log(`Dirección: ${this.direccion.calle}, ${this.direccion.ciudad}`);
        } else {
            console.log("Dirección no disponible.");
        }
    }
}

// Ejemplo de uso:
const direccion1 = new Direccion("Av. Siempre Viva 742", "Springfield");
const persona1 = new Persona("Homero", 39, direccion1);
persona1.mostrarDireccion(); // Dirección: Av. Siempre Viva 742, Springfield