const botao = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "O JavaScript está a funcionar corretamente.";
});

function adicionarZero(numero, tamanho) {
  return String(numero).padStart(tamanho, "0");
}

function atualizarRelogio() {
  const agora = new Date();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  document.querySelector("#mon").textContent = meses[agora.getMonth()];
  document.querySelector("#d").textContent = agora.getDate();
  document.querySelector("#y").textContent = agora.getFullYear();

  document.querySelector("#h").textContent = adicionarZero(
    agora.getHours(),
    2
  );

  document.querySelector("#m").textContent = adicionarZero(
    agora.getMinutes(),
    2
  );

  document.querySelector("#s").textContent = adicionarZero(
    agora.getSeconds(),
    2
  );

  document.querySelector("#mi").textContent = adicionarZero(
    agora.getMilliseconds(),
    3
  );
}

atualizarRelogio();

setInterval(atualizarRelogio, 10);
