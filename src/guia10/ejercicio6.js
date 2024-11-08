/* Se está haciendo una encuesta de 5 personas en donde responden a una pregunta teniendo en
cuenta 4 categorías: 1 muy malo, 2 malo, 3 bueno, 4 muy bueno. Se necesita hacer un
pseudocódigo que permita contar y mostrar por categoría las respuestas ingresadas por esas
personas. */

/* 
1-  muy malo
2- malo
3- bueno
4- muy bueno
*/

console.log('CATEGORIAS: 1- Muy malo, 2- Malo 3- Bueno 4- Muy bueno')

let contadorCategoria1 = 0;
let contadorCategoria2 = 0;
let contadorCategoria3 = 0;

function conteo(cat){
    for(let i = 0; i < cat; i++){
        if (categoria === "1") {
            contadorCategoria1++;
        } else if (categoria === "2") {
            contadorCategoria2++;
        } else if (categoria === "3") {
            contadorCategoria3++;
        }
    }
}

let cat = parseInt(prompt('Ingrese numero de la respuesta: '))
console.log('Respuespuestas por categoria')
console.log(`Categoria 1: ${contadorCategoria1}`)
console.log(`Categoria 2: ${contadorCategoria2}`)
console.log(`Categoria 3: ${contadorCategoria3}`)