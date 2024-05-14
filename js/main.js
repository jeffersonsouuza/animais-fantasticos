function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabConteudo = document.querySelectorAll(".js-tabconteudo section");

  if (tabMenu.length && tabConteudo.length) {
    tabConteudo[0].classList.add("ativo");

    function activeTab(index) {
      tabConteudo.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabConteudo[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion(event) {
      this.nextElementSibling.classList.toggle(activeClass);
      this.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scroolToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    /* const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
    */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scroolToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - windowMetade;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();
