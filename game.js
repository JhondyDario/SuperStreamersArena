console.log("🎮 Super Streamers Arena Website cargado con animaciones y Bootstrap");

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".btn");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      console.log("Botón presionado:", boton.innerText);
    });
  });
});
