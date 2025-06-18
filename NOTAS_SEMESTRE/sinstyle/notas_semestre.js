// Descripción de la actividad: Mi primer programa en JavaScript.
// Realizar un algoritmo en JavaScript donde contenga las siguientes especificaciones: Ingresar nombre, edad, trimestre, ingresar 2 competencias, ingresar 3 notas por cada competencia y calcular el promedio. Las notas son del 1.0 al 5.0, si el promedio es >=3.5 aprobó la competencia. Una vez se calcule el promedio por la competencia, se saca el promedio entre las 2 y si es >=3.5 aprobó el trimestre.


function pedirTexto(mensaje) {
  let texto = prompt(mensaje);
  while (!texto) {
    texto = prompt('Entrada incorrecta. ' + mensaje);
  }
  return texto;
}

function pedirNumero(mensaje, min, max) {
  let num = parseFloat(prompt(mensaje));
  while (isNaN(num) || num < min || num > max) {
    num = parseFloat(prompt(`Ingrese un número entre ${min} y ${max}.`));
  }
  return num;
}

function promedio(notas) {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }  
  return suma / notas.length;
}

function main() {
  let nombre = pedirTexto('Ingrese su nombre:');
  let edad = pedirNumero('Ingrese su edad:', 1, 120);
  let trimestre = pedirNumero('Ingrese el número del trimestre (1-4):', 1, 4);

  let comp1 = pedirTexto('Ingrese nombre de la Competencia 1:');
  let notas1 = [];
  for (let i = 0; i < 3; i++) {
    notas1.push(pedirNumero(`Ingrese nota ${i+1} para ${comp1} (1.0 a 5.0):`, 1, 5));
  }

  let comp2 = pedirTexto('Ingrese nombre de la Competencia 2:');
  let notas2 = [];
  for (let i = 0; i < 3; i++) {
    notas2.push(pedirNumero(`Ingrese nota ${i+1} para ${comp2} (1.0 a 5.0):`, 1, 5));
  }

  let prom1 = promedio(notas1);
  let prom2 = promedio(notas2);

  let estado1 = prom1 >= 3.5 ? "aprobó" : "no aprobó";
  let estado2 = prom2 >= 3.5 ? "aprobó" : "no aprobó";

  let promTrimestre = (prom1 + prom2) / 2;
  let estadoTrimestre = promTrimestre >= 3.5 ? "aprobó" : "no aprobó";

  alert(
    `Resultados de ${nombre} (Edad: ${edad}) - Trimestre ${trimestre}:\n` +
    `${comp1}: promedio ${prom1.toFixed(2)} - ${estado1}\n` +
    `${comp2}: promedio ${prom2.toFixed(2)} - ${estado2}\n` +
    `Promedio trimestre: ${promTrimestre.toFixed(2)} - ${estadoTrimestre}`
  );
}

main();

