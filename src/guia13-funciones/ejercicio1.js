/*
1- Escriba un menú que contenga las siguientes opciones y programe el pseudocódigo que
efectué la acción indicada. Utilice una función para cada ítem del menú.
1-Multiplicacion de dos números
2-Suma de dos números
3-Resta de dos numero
4-Salir
*/

function multiplicar(a, b) {
    return a * b;
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function mostrarMenu() {
    console.log("Seleccione una opción:");
    console.log("1 - Multiplicación de dos números");
    console.log("2 - Suma de dos números");
    console.log("3 - Resta de dos números");
    console.log("4 - Salir");
}

function principal() {
    let opcion;

    do {
        mostrarMenu();
        opcion = parseInt(prompt("Ingrese una opción:"));

        switch (opcion) {
            case 1:
                let num1Mul = parseFloat(prompt("Ingrese el primer número:"));
                let num2Mul = parseFloat(prompt("Ingrese el segundo número:"));
                console.log("El resultado de la multiplicación es: " + multiplicar(num1Mul, num2Mul));
                break;
            case 2:
                let num1Sum = parseFloat(prompt("Ingrese el primer número:"));
                let num2Sum = parseFloat(prompt("Ingrese el segundo número:"));
                console.log("El resultado de la suma es: " + sumar(num1Sum, num2Sum));
                break;
            case 3:
                let num1Rest = parseFloat(prompt("Ingrese el primer número:"));
                let num2Rest = parseFloat(prompt("Ingrese el segundo número:"));
                console.log("El resultado de la resta es: " + restar(num1Rest, num2Rest));
                break;
            case 4:
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida, por favor intente nuevamente.");
        }
    } while (opcion !== 4);
}

principal();