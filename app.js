const botao = document.getElementById("botaoJogar");
const titulo = document.querySelector("h1");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

botao.addEventListener("click", jogar);

function jogar() {

  let randomNumero1 = Math.floor(Math.random() * 6) + 1;
  let randomNumero2 = Math.floor(Math.random() * 6) + 1;

  // Atualiza imagens
  img1.setAttribute("src", "images/dice" + randomNumero1 + ".png");
  img2.setAttribute("src", "images/dice" + randomNumero2 + ".png");

  // Resultado
  if (randomNumero1 > randomNumero2) {
    titulo.innerHTML = "🏆 Jogador 1 ganhou";
  } 
  else if (randomNumero2 > randomNumero1) {
    titulo.innerHTML = "🏆 Jogador 2 ganhou";
  } 
  else {
    titulo.innerHTML = "🤝 O jogo empatou";
  }

  // Muda texto do botão
  botao.innerHTML = "🎲 Jogar novamente";
}
