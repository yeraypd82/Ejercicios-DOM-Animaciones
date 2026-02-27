window.onload = function(){

    const destino = document.getElementById('destino');
    const botonRojo = document.getElementById('rojo');
    const botonAzul = document.getElementById('azul');
    const botonReset = document.getElementById('reset');

    botonRojo.addEventListener('click', function(){
        destino.style.backgroundColor = 'red';
    });

    botonAzul.addEventListener('click', function(){
        destino.style.backgroundColor = 'blue';
    });

    botonReset.addEventListener('click', function(){
        destino.style.backgroundColor = '';
    });
}