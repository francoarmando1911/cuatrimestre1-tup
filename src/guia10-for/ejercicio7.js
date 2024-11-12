/*
Cree un pseudocódigo que permita al usuario ingresar 6 números enteros, que pueden ser
positivos o negativos. Al finalizar, mostrar la sumatoria de los números negativos y el promedio de
los positivos.
*/

let sumaNegativos = 0;
let sumaPositivos = 0;
let contadorPositivos = 0;

for (let i=1; i <= 6; i++){
    let numero = parseInt(prompt(`Ingrese el numero ${i}: `));

    if(numero<0){
        sumaNegativos += numero;
    } else if (numero > 0){
        sumaPositivos += numero;
        contadorPositivos++;
    }
}

let promediosPositivos = contadorPositivos > 0 ? sumaPositivos / contadorPositivos : 0

console.log(`La sumatoria de los numeros negativos es: ${sumaNegativos}`)
console.log(`El promedio de los numeros positivos es: ${promediosPositivos}`)





let num1 = parseInt(prompt('Numero 1: '))
let num2 = parseInt(prompt('Numero 2: '))
let num3 = parseInt(prompt('Numero 3: '))
let num4 = parseInt(prompt('Numero 4: '))
let num5 = parseInt(prompt('Numero 5: '))
let num6 = parseInt(prompt('Numero 6: '))

sumatoria(num1, num2, num3, num4, num5, num6)