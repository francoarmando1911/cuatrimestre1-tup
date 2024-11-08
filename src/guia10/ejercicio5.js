/*Escriba un programa que pida un número entero mayor que cero y calcule su factorial. */

function factorial(numero){
    if (numero <0){
        return 'El factorial no esta definido.'
    }

    let resultado = 1
    for(let i = 2; i <= numero; i++){
        resultado *= i
    }
    return resultado
}

let numero = parseInt(prompt('Ingrese un numero entero mayor que 0: '))
let resultado = factorial(numero)
console.log(`El factorial de ${numero} es ${resultado}`)