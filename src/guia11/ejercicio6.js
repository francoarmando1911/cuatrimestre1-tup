/*
Escriba un pseudocódigo que permita ingresar palabras y que nos informe cuantas
palabras ingreso y muestre cual de todas fue la más larga y cuantas letras tenía esa
palabra. Establezca una opción para finalizar el ingreso de palabras. No considere la
palabra que utiliza para finalizar para el conteo de palabras ni ningún otro requerimiento.
*/

let contadorPalabras = 0
let palabra = ""
let palabraMasLarga = ''

do{
    palabra = console.log(`Ingrese una palabra (escriba FIN para finalizar): `)

    if (palabra.toLowerCase() === 'FIN'){
        contadorPalabras++
    }

    if (palabra.length > palabraMasLarga.length) {
        palabraMasLarga = palabra;    // Guardo esta palabra como la más larga
    }
} while (palabra != "FIN")

console.log(`Cantidad de palabras ingresadas: ${contadorPalabras}`)
console.log(`Palabra mas larga: ${palabraMasLarga} con ${palabraMasLarga.length} palabras`)