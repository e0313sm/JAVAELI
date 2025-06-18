
function calcularEdad() {
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const resultadoEdad = document.getElementById('resultadoEdad');

    if (!fechaNacimiento) {
        resultadoEdad.value = "Por favor selecciona una fecha.";
        return;
    }

    const nacimiento = new Date(fechaNacimiento);
    const hoy = new Date();

    // Cálculo de años
    let edadAnios = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    const dia = hoy.getDate() - nacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edadAnios--;
    }

    // Diferencia total en milisegundos
    const diferenciaMs = hoy - nacimiento;

    // Milisegundos por día y semana
    const msPorDia = 1000 * 60 * 60 * 24;
    const msPorSemana = msPorDia * 7;

    // Calcular días y semanas exactos
    const totalDias = Math.floor(diferenciaMs / msPorDia);
    const totalSemanas = Math.floor(diferenciaMs / msPorSemana);

    resultadoEdad.value = `${edadAnios} años — ${totalSemanas} semanas — ${totalDias} días`;
}

