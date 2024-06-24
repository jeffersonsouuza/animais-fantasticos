export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabConteudo = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  activeTab(index) {
    this.tabConteudo.forEach((section) => {
      section.classList.remove(this.activeClass);
    });
    const direcao = this.tabConteudo[index].dataset.anime;
    this.tabConteudo[index].classList.add(this.activeClass, direcao);
  }

  addTabNavMenu() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabMenu.length && this.tabConteudo.length) {
      this.addTabNavMenu();
    }
    this.activeTab(0);
  }
}
