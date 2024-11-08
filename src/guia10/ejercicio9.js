/*
Crea un pseudocódigo que reciba una palabra ingresada por el usuario y cuente cuántas vocales
contiene. Considere que la palabra se ingresa en minúsculas completamente.
*/

let palabra = prompt('Ingrese una palabra en minuscula: ')
let contadorVocales = 0;

for(let i = 0; i < palabra.length; i++){
    let letra = palabra[i]
    if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u'){
        contadorVocales++
    }
}

console.log(`La palabra tiene ${contadorVocales} vocales.`)