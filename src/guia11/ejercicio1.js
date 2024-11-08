// Crear un pseudocódigo que le permita ingresar todos los números que desee y calcular u sumatoria. Establezca una opción de salida.

let numeros = []

numeros = parseInt(prompt('Ingrese los numeros de los que desea obtener su sumatoria: '))

function sumatoria(numeros){
    let suma = 0
    for (let i = numeros; i <= numeros; i++){
        suma += i
    }
    return suma
}

let resultado = sumatoria(numeros)
console.log(`La sumatoria de ${numeros} es: ${resultado}`)

let respuesta = prompt('Desea salir del programa (s/n): ')

if(respuesta === 'n'){
    numeros
} else {
    console.log('Hasta luego')
}

