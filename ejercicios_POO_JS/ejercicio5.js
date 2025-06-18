//Crea una clase Estudiante que herede de Persona y tenga una propiedad adicional curso. Agrega un método presentarse() que incluya el nombre, edad y curso.


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

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.edad} años y estudio el curso de ${this.curso}.`);
    }
}

// Ejemplo de uso:
const estudiante = new Estudiante("María", 19, "Matemáticas");
estudiante.presentarse(); // Hola, soy María, tengo 19 años y estudio el curso de Matemáticas.