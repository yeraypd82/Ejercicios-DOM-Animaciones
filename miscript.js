window.onload = function(){
    cargarImagen();
}

function cargarImagen(){

    let destino = document.getElementById("imagen");

    if (!destino){
        alert("No existe el bloque destino");
    } else {
        let nodoImg = document.createElement("img");
        nodoImg.setAttribute("src", "img/programa.jpg");
        nodoImg.setAttribute("width", "200");

        destino.appendChild(nodoImg);
    }
}