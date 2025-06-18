//En la clase Estudiante, usa super(nombre, edad) dentro del constructor para inicializar los valores heredados de Persona.

class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // Inicializa nombre y edad usando el constructor de Persona
        this.curso = curso;
    }

    presentarse() {
        console.log(`Hola, soy ${this.nombre}, tengo ${this.getEdad()} años y estudio el curso de ${this.curso}.`);
    }
}

// Ejemplo de uso:
const estudiante = new Estudiante("Carlos", 20, "Programación");
estudiante.presentarse(); // Hola, soy Carlos, tengo 20 años y estudio el curso de