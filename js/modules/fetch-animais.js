import initAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  const animaisNumeros = document.querySelector('.numeros-grid');

  function createAnimal(animal) {
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');

    div.classList.add('numero-animal');
    span.setAttribute('data-numero', '');

    h3.innerText = animal.specie;
    span.innerText = animal.total;

    animaisNumeros.appendChild(div);
    div.append(h3, span);
  }
  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();

      animaisJson.forEach((animal) => createAnimal(animal));

      initAnimaNumeros();
    } catch (erro) {
      animaisNumeros.textContent = 'Ocorreu um problema ao verificar os dados dos animais';
    }
  }

  fetchAnimais('./animaisapi.json');
}
