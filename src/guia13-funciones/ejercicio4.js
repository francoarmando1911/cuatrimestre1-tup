/*
En una estación de servicio se aplica un 5% de descuento por litro si la compra de nafta
Premium es de más de 100 litros, pero si la compra es de más de 1000 litros se le agrega
un 3% de descuento adicional. Cree un algoritmo que calcule el monto total de una compra
ingresando la cantidad de litros y teniendo en cuenta que el precio original de la nafta
Premium es de $1500. Utilice una función para calcular el precio final por litro de la
compra.
*/

function calcularPrecioFinal(litros) {
    const precioPorLitro = 1500; 
    let descuento = 0;

    if (litros > 1000) {
        descuento = 0.08; // 5% + 3% de descuento  
    } else if (litros > 100) {
        descuento = 0.05; // 5% de descuento  
    }
  
    const precioFinalPorLitro = precioPorLitro * (1 - descuento);
    return precioFinalPorLitro;
}

const litros = parseFloat(prompt("Ingrese la cantidad de litros de nafta Premium: "));
const precioFinal = calcularPrecioFinal(litros);
 
const montoTotal = precioFinal * litros;

console.log(`El precio final por litro es: $${precioFinal.toFixed(2)}`);
console.log(`El monto total de la compra es: $${montoTotal.toFixed(2)}`);