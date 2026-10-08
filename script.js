const boton = document.querySelector("button");

boton.addEventListener("click", function() {

    alert("¡Bienvenido a ForeverF7!");

    document.querySelector(".tarjeta p").textContent =
        "¡Gracias por visitar ForeverF7!";
document.querySelector("#aplicaciones").style.display = "block";
});
function abrirLibro() {
    document.getElementById("lector").style.display = "block";
}

function cerrarLibro() {
    document.getElementById("lector").style.display = "none";
}
// ===== NAVEGACIÓN DE MENTE MILLONARIA =====

function mostrarPortada() {
    document.getElementById("portada-libro").style.display = "block";

    document.getElementById("capitulo-1").style.display = "none";
    document.getElementById("capitulo-2").style.display = "none";
    document.getElementById("capitulo-3").style.display = "none";
    document.getElementById("capitulo-4").style.display = "none";
}

function mostrarCapitulo(numero) {

    document.getElementById("portada-libro").style.display = "none";

    document.getElementById("capitulo-1").style.display = "none";
    document.getElementById("capitulo-2").style.display = "none";
    document.getElementById("capitulo-3").style.display = "none";
    document.getElementById("capitulo-4").style.display = "none";

    document.getElementById("capitulo-" + numero).style.display = "block";

    let porcentaje = (numero / 4) * 100;

    document.getElementById("barra-progreso").style.width =
        porcentaje + "%";

    document.getElementById("texto-progreso").textContent =
        "Capítulo " + numero + " de 4";
}