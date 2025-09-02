// Script simples só para interação (se quiser expandir depois)
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Obrigado por clicar! 🚀");
    });
  });
});
