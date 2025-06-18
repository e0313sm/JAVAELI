
function calcular() {
    const valor = parseFloat(document.getElementById("valor").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const ivaPorcentaje = parseFloat(document.getElementById("iva").value);
    const descuentoPorcentaje = parseFloat(document.getElementById("descuento").value);

    if (isNaN(valor) || isNaN(cantidad) || valor <= 0 || cantidad <= 0) {
        alert("Por favor ingresa un valor y cantidad válidos.");
        return;
    }

    if (isNaN(ivaPorcentaje) || isNaN(descuentoPorcentaje) || ivaPorcentaje < 0 || descuentoPorcentaje < 0) {
        alert("Por favor ingresa porcentajes válidos para IVA y descuento.");
        return;
    }

    const subtotal = valor * cantidad;
    const iva = (subtotal * ivaPorcentaje) / 100;
    const descuento = (subtotal * descuentoPorcentaje) / 100;
    const total = subtotal + iva - descuento;

    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}
