/*
Escribir un algoritmo que nos informe si el año ingresado es un año bisiesto. Utilice una
función para determinarlo.
*/

function esBisiesto(anio) {
    if (anio % 4 === 0) {
        if (anio % 100 === 0) {
            if (anio % 400 === 0) {
                return true; 
            } else {
                return false; 
            }
        } else {
            return true;   
        }
    } else {
        return false;   
    }
}  

let anio = parseInt(prompt('Ingrese el año: '))

if (!isNaN(anio)) { 
    if (esBisiesto(anio)) {
        console.log(`${anio} es un año bisiesto.`);
    } else {
        console.log(`${anio} no es un año bisiesto.`);
    }
} else {
    console.log('Por favor, ingresa un número válido.');
}  
