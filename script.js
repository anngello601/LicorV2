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

//parte de catalogos //


const btnVinos = document.getElementById('verMasVinos');
const catalogoVinos = document.getElementById('catalogo-vinos');
const cerrarCatalogo = document.getElementById('cerrarCatalogo');

const btnWhisky = document.getElementById('verMasWhisky');
const catalogoWhisky = document.getElementById('catalogo-whisky');
const cerrarCatalogoWhisky = document.getElementById('cerrarCatalogoWhisky');

const btnLicores = document.getElementById('verMasLicores');
const catalogoLicores = document.getElementById('catalogo-Licores');
const cerrarCatalogoLicores = document.getElementById('cerrarCatalogoLicores');

const btnCerveza= document.getElementById('verMasCerveza');
const catalogoCerveza = document.getElementById('catalogo-Cerveza');
const cerrarCatalogoCerveza = document.getElementById('cerrarCatalogoCerveza');

btnVinos.addEventListener('click', () => {
  catalogoVinos.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
});

cerrarCatalogo.addEventListener('click', () => {
  catalogoVinos.style.display = 'none';
  document.body.style.overflow = 'auto';
});

btnWhisky.addEventListener('click', () => {
  catalogoWhisky.style.display = 'flex';
  catalogoWhisky.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

cerrarCatalogoWhisky.addEventListener('click', () => {
  catalogoWhisky.style.display = 'none';
  document.body.style.overflow = 'auto';
});

btnLicores.addEventListener('click', () => {
  catalogoLicores.style.display = 'flex';
  catalogoLicores.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

cerrarCatalogoLicores.addEventListener('click', () => {
  catalogoLicores.style.display = 'none';
  document.body.style.overflow = 'auto';
});

btnCerveza.addEventListener('click', () => {
  catalogoCerveza.style.display = 'flex';
  catalogoCerveza.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

cerrarCatalogoCerveza.addEventListener('click', () => {
  catalogoCerveza.style.display = 'none';
  document.body.style.overflow = 'auto';
});





