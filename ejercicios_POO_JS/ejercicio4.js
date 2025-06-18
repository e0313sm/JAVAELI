//Agrega a la clase Persona un método estático esMayorDeEdad(edad) que retorne true si la edad es 18 o más, y false en caso contrario.


class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }

    static esMayorDeEdad(edad) {
        return edad >= 18;
    }
}

// Ejemplo de uso:
console.log(Persona.esMayorDeEdad(20)); // true
console.log(Persona.esMayorDeEdad(15));