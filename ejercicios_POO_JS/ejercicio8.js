//Crea una clase Curso que tenga un nombre y un arreglo de estudiantes (Estudiante). Agrega un método agregarEstudiante(est) para añadir estudiantes y otro listarEstudiantes() que imprima sus nombres.


class Curso {
    constructor(nombre) {
        this.nombre = nombre;
        this.estudiantes = [];
    }

    agregarEstudiante(est) {
        this.estudiantes.push(est);
    }

    listarEstudiantes() {
        console.log(`Estudiantes en el curso ${this.nombre}:`);
        this.estudiantes.forEach(est => {
            console.log(est.nombre);
        });
    }
}

// Ejemplo de uso:
const curso1 = new Curso("Matemáticas");
const estudiante1 = new Estudiante("Ana", 19, "Matemáticas");
const estudiante2 = new Estudiante("Luis", 21, "Matemáticas");

curso1.agregarEstudiante(estudiante1);
curso1.agregarEstudiante(estudiante2);
curso1.listarEstudiantes();
// Salida:
// Estudiantes en el curso Matemáticas:
//