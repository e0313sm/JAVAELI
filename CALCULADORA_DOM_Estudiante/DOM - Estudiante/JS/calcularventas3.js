function calcular() {
    const nombre = document.getElementById("nombre").value.trim();
    const valor = parseFloat(document.getElementById("valor").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const descuentoPorcentaje = parseFloat(document.getElementById("descuento").value);

    if (!nombre || isNaN(valor) || isNaN(cantidad) || isNaN(descuentoPorcentaje)) {
        alert("Por favor completa todos los campos correctamente.");
        return;
    }

    const subtotal = valor * cantidad;
    const iva = subtotal * 0.19;
    const descuento = (subtotal * descuentoPorcentaje) / 100;
    const total = subtotal + iva - descuento;

    // Crear una nueva fila
    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${subtotal.toFixed(2)}</td>
        <td>${iva.toFixed(2)}</td>
        <td>${descuento.toFixed(2)}</td>
        <td>${total.toFixed(2)}</td>
    `;

    // Insertar la nueva fila en la tabla
    document.querySelector("#resultados tbody").appendChild(fila);

    // Limpiar campos del formulario
    document.getElementById("formulario").reset();
}
