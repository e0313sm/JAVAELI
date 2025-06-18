function calcular() {
  // Obtengo los valores del formulario
  const valor = parseFloat(document.getElementById('valor').value);
  const cantidad = parseInt(document.getElementById('cantidad').value);
  
  if (isNaN(valor) || isNaN(cantidad) || valor < 0 || cantidad < 1) {
    alert('Por favor ingresa un valor unitario y cantidad válidos.');
    return;
  }

  // Cálculos
  const subtotal = valor * cantidad;
  const iva = subtotal * 0.19; // 19% IVA

  // Aquí fijo un descuento ejemplo de 10%, pero puedes modificar o pedir que lo ingresen
  const descuentoPorcentaje = 10;
  const descuento = subtotal * (descuentoPorcentaje / 100);

  const total = subtotal + iva - descuento;

  // Muestro resultados en inputs
  document.getElementById('subtotal').value = subtotal.toFixed(2);
  document.getElementById('iva').value = iva.toFixed(2);
  document.getElementById('descuento').value = descuento.toFixed(2);
  document.getElementById('total').value = total.toFixed(2);

  // Muestro la sección de resultados
  document.getElementById('resultado').style.display = 'block';
}
