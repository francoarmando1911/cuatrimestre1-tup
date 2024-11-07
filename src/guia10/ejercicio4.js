/*Escribir un pseudocódigo que permita el ingreso de dos numero enteros (el primero debe ser
menor que el segundo) y que muestre la sumatoria de todos los números enteros entre los dos
numero ingresado(inclusive).*/

console.log('Ingrese 2 numeros enteros (EL PRIMERO MENOR QUE EL SEGUNDO)')

let num1 = parseInt(prompt('Primer numero: '))
let num2 = parseInt(prompt('Segundo numero: '))

function sumatoria(num1, num2){
    let suma = 0
    for(let i = num1; i <= num2; i++){
        suma += i
    }
    return suma
}

let resultado = sumatoria(num1, num2);
console.log(`La sumatoria de ${num1} y ${num2} es: ${resultado}`)