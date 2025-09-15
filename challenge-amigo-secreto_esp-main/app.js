// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Selección de elementos del DOM
const inputAmigo = document.getElementById('amigo');
const listadoDeAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa el nombre de un amigo");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese amigo ya fue agregado");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    listadoDeAmigos.innerHTML = ""; // limpiar lista antes de dibujar

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listadoDeAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const ganador = amigos[indice];

    resultado.innerHTML = `<li>¡El amigo secreto es: ${ganador}!</li>`;
}
