function abrirVentanaEmergente() {
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "block";
}

function cerrarVentana() {
    var ventanaEmergente = document.getElementById("ventanaEmergente");
    ventanaEmergente.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('tryAgain').addEventListener('click', function() {
        location.reload();
    });
});