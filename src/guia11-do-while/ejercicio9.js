/*
Cree un pseudocódigo que registre los resultados de arrojar un dado y nos informe en
que intento salió el 4. El pseudocódigo debe permitir repetir las partidas. (Se considera
partida la secuencia de arrojar los dados hasta que salga el 4 o hasta que ingrese 0). La
opción para terminar el juego es la opción resultado 0.
*/

function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1; 
}

function jugar() {
    let intento = 0;
    let resultado = -1;

    console.log("Iniciar partida. Presiona 0 para salir.");

    while (true) {
        intento++;
        resultado = lanzarDado();
        console.log(`Intento ${intento}: resultado = ${resultado}`);

        if (resultado === 4) {
            console.log(`¡Salió el 4 en el intento ${intento}!`);
            break; 
        }

        if (resultado === 0) {
            console.log("Fin del juego.");
            return; 
        }
    }
}

function inicio() {
    let continuar = 'S';

    while (continuar.toUpperCase() === 'S') {
        jugar();
        continuar = prompt("¿Quieres jugar otra partida? (S/N): ");
    }

    console.log("Gracias por jugar.");
}

inicio();