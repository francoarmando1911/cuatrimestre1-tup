/*
Crear un pseudocódigo que permita que, ingresando el nombre y el sexo de una
persona nos muestre un saludo de buenos días personalizado con ese nombre. Cree una
función para que si es mujer agregue “Sra” y si es hombre “Sr.” delante del nombre
ingresado.
*/

//ingresar nombre, sexo
//mostrar saludo de buenos dias personalizado con el nombre de la persona
// funcion para que si es mujer agregue Sra y si es hombre  Sr


function saludo(nombre, sexo){
    if (sexo.toLowerCase() === 'mujer') {
        console.log(`Buen día Sra ${nombre}`);
    } else if (sexo.toLowerCase() === 'hombre') {
        console.log(`Buen día Sr ${nombre}`);
    } else {
        console.log(`Sexo no reconocido. Por favor ingrese "hombre" o "mujer".`);
    }
}

let nombre = prompt('Ingrese su nombre: ')
let sexo = ('Ingrese su sexo: ')
saludo(nombre, sexo)