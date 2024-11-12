/*
En una caja de supermercado se ingresa una serie de productos escriba un
pseudocódigo que calcule cuanto es el total de la compra. Debido a que hay promociones
se hace un descuento de 10 % a los productos Lácteos y 5 % de descuento a los
productos Cárnicos. Se debe ingresar cantidad, precio y tipo. La finalización del ingreso de
productos se produce cuando se ingresa precio 0.
*/

let productos = []
let totalCompra = 0

function calcularTotalConDescuentos(productos) {
    let total = 0;

    for (let producto of productos) {
        let subtotal = producto.precio * producto.cantidad;

        if (producto.tipo === 'Lácteo') {
            subtotal *= 0.90;
        } else if (producto.tipo === 'Cárnico') {
            subtotal *= 0.95; 
        }

        total += subtotal;
    }
    return total;
}

while (true) {
    let precio = parseFloat(prompt('Ingrese el precio del producto (0 para terminar): '));
    if (precio === 0) break; 

    let cantidad = parseInt(prompt('Ingrese la cantidad de producto: '));
    let tipo = prompt('Ingrese el tipo de producto (Lácteo, Cárnico, Otro): ');

    productos.push({ precio, cantidad, tipo });
}

totalCompra = calcularTotalConDescuentos(productos);

console.log(`El total del precio a pagar por los productos es de: ${totalCompra}`);