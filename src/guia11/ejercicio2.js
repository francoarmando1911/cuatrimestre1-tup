// Codificar un algoritmo para calcular la suma (entera) de números comprendido entre
//dos números enteros ingresados por el usuario.

let numero1 = parseInt(prompt('Ingrese el primer numero entero: '))
let numero2 = parseInt(prompt('Ingrese el primer segundo entero: '))
let suma = 0

let inicio = Math.min(numero1, numero2)
let fin = Math.max(numero1, numero2)

for(let i = inicio; i <= fin; i++){
    suma += i
}

console.log(`La suma de los numeros enteros entre ${numero1} y ${numero2} es: ${suma}`)
