//Escribir un pseudocódigo que permita al usuario adivinar un número secreto entre 1 y 
//10. El programa sigue pidiendo intentos hasta que el número sea adivinado

//Math.random para el numero secreto

let numeroSecreto = Math.floor(Math.random() * 10) + 1
let intento

do{
    intento = parseInt(prompt('Adivina el numero secreto entre 1 y 10: '))

    if (intento === numeroSecreto){
        console.log('Felicitaciones, adivinaste el numero secreto!!!')
    } else {
        console.log('Intenta de nuevo... ')
    }
} while (intento !== numeroSecreto)

//El bucle se repite hasta que se adivine el numero secreto