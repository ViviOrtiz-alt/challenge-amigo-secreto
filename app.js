// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let amigos = [];

// Función para añadir un nombre a la lista de amigos
function agregarAmigo() {
    const nombreAmigo = document.getElementById("amigo").value;

    // Comprobamos que el campo no esté vacío
    if (nombreAmigo.trim() !== "") {
        // Añadir el nombre al arreglo de amigos
        amigos.push(nombreAmigo);

    // Limpiar el campo de entrada para el siguiente nombre
    document.getElementById("amigo").value = "";

    mostrarAmigos();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
