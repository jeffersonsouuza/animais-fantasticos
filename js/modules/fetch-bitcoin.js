export default function initFetchBitcoin() {
  const btcPreco = document.querySelector('.btc-preco');

  fetch('https://blockchain.info/ticker')
    .then((response) => response.json())
    .then((bitcoin) => { btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4); })
    .catch((erro) => {
      erro = 'Falha na consulta do valor.';
      btcPreco.style.background = 'red';
      btcPreco.style.color = 'white';
      btcPreco.innerText = erro;
    });
}
