// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
    }
    else {
        amigos.push(nombre);
        limpiarCaja();
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar la lista antes de agregar los elementos nuevos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = 'No hay amigos en la lista para sortear.';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}