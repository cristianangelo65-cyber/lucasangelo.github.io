
function salvarCarreira() {
  const nome = document.getElementById("nome")?.value;
  const posicao = document.getElementById("posicao")?.value;
  const idade = document.getElementById("idade")?.value;

  if (!nome) {
    alert("Digite o nome do jogador");
    return;
  }

  localStorage.setItem("nome", nome);
  localStorage.setItem("posicao", posicao);
  localStorage.setItem("idade", idade);

  window.location.href = "gestao.html";
}
