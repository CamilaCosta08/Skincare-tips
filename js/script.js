const botoes = document.querySelectorAll(".btn");

const dicas = [
  "Use protetor solar todos os dias",
  "Lave o rosto antes de dormir",
  "Hidrate sua pele diariamente",
  "Beba bastante água",
  "Nunca durma de maquiagem"
];

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    const conteudo = botao.nextElementSibling;

    if (conteudo.textContent === "") {
      const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
      conteudo.textContent = dicaAleatoria;
    }

    conteudo.classList.toggle("oculto");
  });
});