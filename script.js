const botao = document.getElementById('botaoMensagem');
const caixaMensagem = document.getElementById('mensagem');
botao.addEventListener('click', function () {
  caixaMensagem.textContent = 'Olá, seja bem-vindo! 😊';
});
