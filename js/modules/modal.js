export default class Modal {
  constructor(open, close, container) {
    this.botaoAbrir = document.querySelector(open);
    this.botaoFechar = document.querySelector(close);
    this.container = document.querySelector(container);
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  toggleModal() {
    this.container.classList.toggle('ativo');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  cliqueForaModal(event) {
    if (event.target === this.container) {
      this.toggleModal(event);
    }
  }

  addModalEvent() {
    this.botaoAbrir.addEventListener('click', this.eventToggleModal);
    this.botaoFechar.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.container) {
      this.addModalEvent();
    }
    return this;
  }
}
