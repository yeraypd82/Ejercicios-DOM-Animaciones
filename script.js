// Variables de desplazamiento
let desplazamiento = 0;
let desplazamiento2 = 0;

window.onload = function() {

    let fondo1 = document.getElementById("fondouno");
    let fondo2 = document.getElementById("fondodos");

    // Movimiento continuo
    setInterval(function() {
        mover(fondo1, fondo2);
    }, 50);

    // Reinicio del fondo
    setInterval(function() {
        reiniciar(fondo1, fondo2);
    }, 2250);
};

function mover(f1, f2) {

    // Mover hacia la izquierda
    desplazamiento -= 10;

    // El segundo fondo siempre va 450px delante
    desplazamiento2 = desplazamiento + 450;

    // Aplicar movimiento
    f1.style.left = desplazamiento + "px";
    f2.style.left = desplazamiento2 + "px";
}

function reiniciar(f1, f2) {

    f1.style.left = "0px";
    f2.style.left = "450px";

    desplazamiento = 0;
}

