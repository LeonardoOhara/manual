const button = document.getElementById('infoButton');
const info = document.getElementById('infoContent');

button.addEventListener('click', () => {
  info.classList.toggle('hidden');
});


function mostrarImagem(caminho) {
  const container = document.getElementById('imagemContainer');
  const img = document.getElementById('imagemInfo');
  img.src = caminho;
  container.classList.remove('hidden');
}

function mostrarPopup(caminho) {
  const popup = document.getElementById('popup');
  const img = document.getElementById('popup-img');
  img.src = caminho;
  popup.classList.remove('hidden');
}

function fecharPopup() {
  const popup = document.getElementById('popup');
  popup.classList.add('hidden');
}
