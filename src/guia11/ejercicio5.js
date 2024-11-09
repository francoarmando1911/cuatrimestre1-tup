/*
Cree un pseudocódigo que permita el ingreso de números enteros y nos informe
cuantos números pares e impares positivos y cuantos impares negativos ingresó.
Establezca una opción para finalizar el ingreso de números. Intente validar que el numero
ingresado sea un entero.
*/

let parsePositivos = 0
let imparesPositivos = 0
let imparesNegativos = 0
let respuesta

do{
    let numero = prompt('Ingrese un numero entero (o escriba (salir) para finalizar): ')

    if(numero.toLowerCase() === 'salir') break

    numero = parseInt(numero)

    if(isNaN(numero)){
        console.log('Por favor, ingrese un numero que sea valido... ')
        continue;
    }

    if(numero > 0 && numero % 2 === 0){
        parsePositivos++
    } else if (numero > 0 && numero % 2 !== 0){
        imparesNegativos++
    }
} while(true)

console.log(`La cantidad de resultados pares positivos es: ${parsePositivos}`)
console.log(`La cantidad de numers impares positivos es: ${imparesPositivos}`)
console.log(`La cantidad de numers impares negativos es: ${imparesNegativos}`)