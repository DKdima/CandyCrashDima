document.addEventListener('DOMContentLoaded', function () {
	
    var cuadroTexto = document.getElementById('move-input');
    var botones = document.querySelectorAll('.botones button');

    cuadroTexto.addEventListener('input', validarReglas);

    function validarReglas(event) {
        var textoMinusculas = event.target.value.toLowerCase();
        var validarTexto = validarFormato(textoMinusculas);

        if (validarTexto) {
            encenderBotones(true);
            restricciones(textoMinusculas);
        } else {
            encenderBotones(false);
        }
    }

    function validarFormato(textoMinusculas) {
        // Validar que la entrada cumpla con el formato esperado
        return /^[a-h][1-8]$/.test(textoMinusculas);
    }

    function encenderBotones(enable) {
        for (var i = 0; i < botones.length; i++) {
            botones[i].disabled = !enable;
        }
    }

    function restricciones(textoMinusculas) {
        var fila = textoMinusculas.charAt(1);
        var col = textoMinusculas.charAt(0);

        document.querySelector('.arriba').disabled = false;
        document.querySelector('.izquierda').disabled = false;

        if (col === "a") {
            document.querySelector('.arriba').disabled = true;
            if (fila === '1') {
                document.querySelector('.izquierda').disabled = true;
            } else if (fila === '8') {
                document.querySelector('.derecha').disabled = true;
            }
        } else if(col ==="h"){
            document.querySelector('.abajo').disabled = true;
            if(fila ==='1'){
                document.querySelector('.izquierda').disabled = true;
            } else if(fila ==='8'){
                document.querySelector('.derecha').disabled = true;
            }
        } else if(col === "b" || col === "c" || col === "d" || col === "e" || col === "f" || col === "g"){
            if(fila === '1'){
                document.querySelector('.izquierda').disabled = true;
            } else if(fila === '8'){
                document.querySelector('.derecha').disabled = true;
            }
        }
    }

    enableButtons(false);
});
