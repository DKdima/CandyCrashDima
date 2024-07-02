var colores = ["red", "green", "blue", "yellow", "orange", "purple"];

function cambiarColoresAleatorios() {
    var tabla = document.getElementById("tabla");
    var celdas = tabla.getElementsByTagName("td");

    for (var i = 0; i < celdas.length; i++) {
        var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        celdas[i].style.backgroundColor = colorAleatorio;

        // Verificar si el color aleatorio es azul o morado y cambiar el color del texto a blanco
        if (colorAleatorio === "blue" || colorAleatorio === "purple") {
            celdas[i].style.color = "white";
        } else {
            // Restaurar el color del texto a su valor predeterminado
            celdas[i].style.color = "black";
        }
    }
}
//Evento para generar colores aleatorios cuando se cargue la página
window.addEventListener('load', cambiarColoresAleatorios);
