/*
Escriba un pseudocódigo que nos de el monto final de una compra en pesos argentinos
teniendo en cuenta que el cliente me puede pagar en pesos Argentinos , pesos Uruguayos
y Dolares. El precio de conversión determínelo en un aproximado del valor actual de
internet. Cree una función de conversión de los montos ingresados.
*/

const tasaUruAArg = 0.023 * 1140; // 1 peso uruguayo a pesos argentinos  
const tasaDolAArg = 1140; // 1 dólar a pesos argentinos  
  
function convertirAArg(monto, tipoMoneda) {
    switch (tipoMoneda) {
        case 'arg':
            return monto; 
        case 'uru':
            return monto * tasaUruAArg; 
        case 'dol':
            return monto * tasaDolAArg; 
        default:
            throw new Error("Tipo de moneda no válido");
    }
}

function calcularMontoFinal() {
    const monto = parseFloat(prompt("Ingrese el monto de la compra:"));
    const tipoMoneda = prompt("Ingrese el tipo de moneda (arg, uru, dol):").toLowerCase();

    try { 
        const montoFinalEnArg = convertirAArg(monto, tipoMoneda);

        alert(`El monto final en pesos argentinos es: ${montoFinalEnArg.toFixed(2)}`);
    } catch (error) {
        alert(error.message); 
    }
}
  
calcularMontoFinal();