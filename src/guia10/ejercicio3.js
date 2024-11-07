// Codificar un algoritmo que muestra una cuenta regresiva de 10 segundos.

function cuentaRegresiva(segundos){
    for (let i = segundos; i >= 0; i--){
        setTimeout(() => {
            console.log(i);
            if (i === 0) {
                console.log("¡Cuenta regresiva terminada!");
            }
        }, (segundos - i) * 1000);
    }
}

let segundos = 10
cuentaRegresiva(segundos)