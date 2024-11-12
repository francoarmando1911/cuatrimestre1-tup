//Cree un pseudocódigo que pida un número entero mayor que cero y que escriba sus divisores.

let numero = parseInt(prompt('Ingrese un numero entero mayor que 0: '))
let divisores = []

for(let i = 1; i <= numero; i++){
    if (numero % i === 0){
        divisores.push(i);
    }
}

console.log(`Los divisores de ${numero} son: ${divisores.join(", ")}`)