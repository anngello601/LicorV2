window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return; // evita errores si no existe el loader
  // Mostrar loader (por si acaso)
  loader.style.display = "flex";
  // Ocultar con animación suave
  setTimeout(() => {
    loader.style.transition = "opacity 1s ease";
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
      document.body.style.overflow = "auto"; // permite scroll luego
    }, 1000);
  }, 3000);
});

const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });