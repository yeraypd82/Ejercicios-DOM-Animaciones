window.onload = function(){
    let enlace = document.getElementById("borrar");

    enlace.onclick = function(e){
        e.preventDefault();
        borrarImagen("muestra");
    }
}

function borrarImagen(id){
    let nodo = document.getElementById(id);
    nodo.remove();
}