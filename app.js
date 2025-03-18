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

// Función para mostrar todos los amigos en la lista
function mostrarAmigos() {
    
    const listaAmigos = document.getElementById("listaAmigos");

    // Borrar los elementos previos de la lista
    listaAmigos.innerHTML = "";

     // Recorrer la lista de amigos y agregar un <li> por cada nombre
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para realizar el sorteo de los amigos secretos
function sortearAmigo() {
    // Verificar si hay amigos registrados en la lista
    if (amigos.length > 0) {
        // Generar un número aleatorio para seleccionar un amigo
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);

        const amigoSorteado = amigos[indiceAleatorio];
        
    }
}