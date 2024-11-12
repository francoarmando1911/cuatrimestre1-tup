// Escriba un pseudocódigo que muestre por pantalla un árbol de caracteres asteriscos (*) .Permita ingresar la cantidad de niveles (profundidad) del árbol.

function arbol(nivel) {
    for (let i = 1; i <= nivel; i++) {
        let espacios = ' '.repeat(nivel - i);
        let asteriscos = '*'.repeat(2 * i - 1);
        console.log(espacios + asteriscos);
    }
}

let nivel = parseInt(prompt('Ingrese la cantidad de niveles que quiere que tenga el arbol: '), 10)
arbol(nivel);