console.log("🎮 Super Streamers Arena Website activo");

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-audio");
  const toggleBtn = document.getElementById("muteToggle");

  toggleBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggleBtn.textContent = "🔈 Silenciar";
    } else {
      audio.pause();
      toggleBtn.textContent = "🔇 Activar sonido";
    }
  });

  // Logs para botones
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      console.log("👉 Click en:", btn.innerText.trim());
    });
  });
});
