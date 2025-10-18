document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  // Mostrar loader al inicio
  loader.style.display = "flex";
  // Esperar unos segundos antes de ocultar
  setTimeout(() => {
    loader.style.opacity = "0"; // efecto de desvanecimiento
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 3000);
});