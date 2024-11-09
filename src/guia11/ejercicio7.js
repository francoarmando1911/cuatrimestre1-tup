/*
Escriba un pseudocódigo que permita el ingreso de una serie de números y que a su
sumatoria le calcule cuantas cifras tiene y que muestre cada una de sus cifras por
separado. Establezca una opción para la finalización del ingreso de la serie.
8- Escriba un pseudocódigo que permita el ingreso de una frase y que cuente la cantidad
de palabras que el usuario que ingreso. Establezca una opción para finalizar el ingreso de
palabras.
*/

let sumatoria = 0
let contadorPalabras = 0

do{
    let respuesta = prompt('Ingrese un numero (o FIN para finalizar): ')

    if(respuesta.toLowerCase() === 'FIN'){
        break
    }

    let numero = parseInt(respuesta)

    if(isNaN(numero)){
        console.log('Por favor ingrese un numero valido...')
        continue
    }

    sumatoria += numero
    contadorPalabras++

} while(respuesta != "FIN")

console.log(`La sumatoria de los numeros es: ${sumatoria}`)
console.log(`Cantidad de numeros ingresados: ${contadorPalabras}`)