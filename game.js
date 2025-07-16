// game.js
console.log("🎮 Super Streamers Arena Website cargado correctamente");

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".boton");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      alert("¡Gracias por tu interés en Super Streamers Arena!");
    });
  });
});