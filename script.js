
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
// Carrega dados na gestão
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("nomeJogador")) {
    carregarGestao();
  }
});

function carregarGestao() {
  const nome = localStorage.getItem("nome");
  const posicao = localStorage.getItem("posicao");
  const idade = localStorage.getItem("idade");

  // Atributos base (se não existirem ainda)
  if (!localStorage.getItem("vel")) {
    localStorage.setItem("vel", 50);
    localStorage.setItem("chu", 50);
    localStorage.setItem("pas", 50);
    localStorage.setItem("fis", 50);
  }

  document.getElementById("nomeJogador").innerText = nome;
  document.getElementById("posicaoJogador").innerText = posicao;
  document.getElementById("idadeJogador").innerText = idade;

  atualizarAtributos();
}

function atualizarAtributos() {
  document.getElementById("vel").innerText = localStorage.getItem("vel");
  document.getElementById("chu").innerText = localStorage.getItem("chu");
  document.getElementById("pas").innerText = localStorage.getItem("pas");
  document.getElementById("fis").innerText = localStorage.getItem("fis");
}

function treinar() {
  let vel = Number(localStorage.getItem("vel"));
  let chu = Number(localStorage.getItem("chu"));
  let pas = Number(localStorage.getItem("pas"));
  let fis = Number(localStorage.getItem("fis"));

  vel += Math.floor(Math.random() * 3);
  chu += Math.floor(Math.random() * 3);
  pas += Math.floor(Math.random() * 3);
  fis += Math.floor(Math.random() * 3);

  localStorage.setItem("vel", vel);
  localStorage.setItem("chu", chu);
  localStorage.setItem("pas", pas);
  localStorage.setItem("fis", fis);

  atualizarAtributos();
  alert("Treino concluído! 📈");
}
