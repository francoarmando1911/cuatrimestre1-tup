/*
En una caja de supermercado se ingresa una serie de productos escriba un
pseudocódigo que calcule cuanto es el total de la compra. Debido a que hay promociones
se hace un descuento de 10 % a los productos Lácteos y 5 % de descuento a los
productos Cárnicos. Se debe ingresar cantidad, precio y tipo. La finalización del ingreso de
productos se produce cuando se ingresa precio 0.
*/

let productos = []
let totalProductos = 0
let descuento10 = 0
let descuento5 = 0

productos = prompt('Ingrese precio de producto: ')
let respuesta = prompt('Desea cargar otro producto (s/n): ')

while(respuesta === 's'){
    productos = prompt('Ingrese precio de producto: ')
    let respuesta = prompt('Desea cargar otro producto (s/n): ')
} 

function totalCompra(productos){
    for(let i = 1; i <= productos; i++){
        suma = 0
        suma += i
    }
    return suma
}

console.log(`El total del precio a pagar por los productos es de: ${totalCompra} (sin los descuentos correspondientes)`)