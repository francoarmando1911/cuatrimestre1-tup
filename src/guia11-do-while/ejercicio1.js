// Crear un pseudocódigo que le permita ingresar todos los números que desee y calcular u sumatoria. Establezca una opción de salida.

let numeros = []
let sumaTotal = 0
let respuesta

do{
    let numero = parseInt(prompr('Ingrese un numero para sumar (o escriba 0 para salir): '))

    if(numero === 0) break;
    
    numeros.push(numero); //.push me agrega el numero al array

    respuesta = prompr('Desea ingresar otro numero? (s/n): ').toLowerCase()

} while (respuesta === 's')

function calcularSuma(numeros){
    let suma = 0
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }
    return suma
}

sumaTotal = calcularSuma(numeros)
console.log(`La sumatoria de los numeros ingresados es: ${sumaTotal}`)