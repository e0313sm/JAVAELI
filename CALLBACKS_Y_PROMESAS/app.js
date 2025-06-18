function simularTareaAsincrona(tiempo, callback) {
    // Usamos setTimeout para simular una tarea asíncrona
    setTimeout(() => {
        // Aquí la tarea "terminó", llamamos al callback
        callback(`Tarea completada después de ${tiempo} ms.`);
    }, tiempo);
}