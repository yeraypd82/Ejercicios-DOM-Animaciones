window.onload = function() {
    // Se ejecuta cada 500 milisegundos
    setInterval(obtenerHora, 500);
};
function obtenerHora() {
    let fecha = new Date();
    let h = fecha.getHours();
    let m = fecha.getMinutes();
    let s = fecha.getSeconds();
    // Añadir cero delante si es necesario
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;
    document.getElementById("reloj").innerHTML = h + ":" + m + ":" + s;
}