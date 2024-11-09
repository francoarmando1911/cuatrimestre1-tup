/*
Escriba un pseudocódigo que permita el ingreso de una frase y que cuente la cantidad
de palabras que el usuario que ingreso. Establezca una opción para finalizar el ingreso de
palabras.
*/

let contadorPalabras = 0

do{
    let respuesta = prompt('Ingrese una frase (o FIN para finalizar)')

    if(respuesta.toLowerCase() === 'FIN'){
        break
    }

    let palabras = respuesta.trim().split(/\s+/)  // Divide la frase en palabras usando espacios
    contadorPalabras += palabras.length

} while(true)

console.log(`Cantidad de palabras: ${contadorPalabras}`)