const botao = document.querySelector("#botaoMensagem");
const mensagem = document.querySelector("#mensagem");

botao.addEventListener("click", () => {
  mensagem.textContent = "O JavaScript está a funcionar corretamente.";
});
