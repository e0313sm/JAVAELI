// Ejercicio 1: Usando Callbacks para Simular una Tarea Asíncrona
function simularTareaAsincrona(tiempo, callback) {
    setTimeout(() => {
        callback(`Tarea asíncrona completada después de ${tiempo} ms (callback)`);
    }, tiempo);
}

// Uso del callback
simularTareaAsincrona(1000, (mensaje) => {
    console.log(mensaje);

    // Ejercicio 2: Convertir a Promesa
    function simularTareaAsincronaPromesa(tiempo) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Tarea asíncrona completada después de ${tiempo} ms (promesa)`);
            }, tiempo);
        });
    }

    // Uso de la promesa
    simularTareaAsincronaPromesa(1500).then((mensaje) => {
        console.log(mensaje);

        // Ejercicio 3: Encadenar Promesas
        simularTareaAsincronaPromesa(1000)
            .then((msg1) => {
                console.log("Primera tarea:", msg1);
                return simularTareaAsincronaPromesa(1200);
            })
            .then((msg2) => {
                console.log("Segunda tarea:", msg2);
                return simularTareaAsincronaPromesa(800);
            })
            .then((msg3) => {
                console.log("Tercera tarea:", msg3);
                console.log("Todas las tareas encadenadas completadas.");
            });
    });
});