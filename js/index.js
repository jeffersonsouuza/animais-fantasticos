import ScrollSuave from './modules/scroll-suave.js';
import Accordion from './modules/active-accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import AnimacaoScroll from './modules/animacao-scroll.js';
import DropdownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSuave('[data-js-menu] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-js-accordion] dt');
accordion.init();

const tabNav = new TabNav('[data-js-tabmenu] li', '[data-js-tabconteudo] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const animacaoScroll = new AnimacaoScroll('[data-js-scroll]');
animacaoScroll.init();

const dropDownmenu = new DropdownMenu('[data-dropdown]', ['touchstart', 'click']);
dropDownmenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', ['click', 'touchstart']);
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]');
funcionamento.init();

fetchAnimais('./animaisapi.json', '.numeros-grid');

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');
