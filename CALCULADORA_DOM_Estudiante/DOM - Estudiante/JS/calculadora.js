function sumar() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);

    // Borrar resultado
    document.getElementById("resultado3").textContent = "";

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = (num1 + num2).toLocaleString("es-ES", { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0,
            useGrouping: true  // Asegura que agrupe correctamente los miles
        });

        document.getElementById("resultado1").value = resultado;
        document.getElementById("resultado2").textContent = "Resultado de la suma es: " + resultado;
    } else {
        document.getElementById("resultado2").textContent = "Por favor, ingrese números válidos.";
    }
}

function restar() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);

    // Borrar resultado
    document.getElementById("resultado3").textContent = "";

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = (num1 - num2).toLocaleString("es-ES", { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0,
            useGrouping: true  // Asegura que agrupe correctamente los miles
        });

        document.getElementById("resultado1").value = resultado;
        document.getElementById("resultado2").textContent = "Resultado de la resta es: " + resultado;
    } else {
        document.getElementById("resultado2").textContent = "Por favor, ingrese números válidos.";
    }
}

function multiplicar() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);

    // Borrar resultado
    document.getElementById("resultado3").textContent = "";

    if (!isNaN(num1) && !isNaN(num2)) {
        let resultado = (num1 * num2).toLocaleString("es-ES", { 
            minimumFractionDigits: 0, 
            maximumFractionDigits: 0,
            useGrouping: true  // Asegura que agrupe correctamente los miles
        });

        document.getElementById("resultado1").value = resultado;
        document.getElementById("resultado2").textContent = "Resultado de la multiplicación es: " + resultado;
    } else {
        document.getElementById("resultado2").textContent = "Por favor, ingrese números válidos.";
    }
}

function dividir() {
    let num1 = parseFloat(document.getElementById("n1").value);
    let num2 = parseFloat(document.getElementById("n2").value);

    // Borrar resultado
    document.getElementById("resultado2").textContent = "";

    if (!isNaN(num1) && !isNaN(num2)) {
        if (num2 !== 0) {
            let resultado = (num1 / num2).toLocaleString("es-ES", { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2,
                useGrouping: true // Agrupar correctamente los miles
            });

            document.getElementById("resultado1").value = resultado;
            document.getElementById("resultado3").textContent = "Resultado de la división es: " + resultado;
        } else {
            document.getElementById("resultado3").textContent = "No se puede dividir entre cero.";
        }
    } else {
        document.getElementById("resultado3").textContent = "Por favor, ingrese números válidos.";
    }
} 
