// Referencias
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

// Mostrar catálogo al presionar "Ver más"
btnVinos.addEventListener('click', () => {
  catalogoVinos.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Evita scroll del fondo
});

// Cerrar catálogo
cerrarCatalogo.addEventListener('click', () => {
  catalogoVinos.style.display = 'none';
  document.body.style.overflow = 'auto';
});

btnWhisky.addEventListener('click', () => {
  catalogoWhisky.style.display = 'flex';
  catalogoWhisky.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

// Cerrar catálogo
cerrarCatalogoWhisky.addEventListener('click', () => {
  catalogoWhisky.style.display = 'none';
  document.body.style.overflow = 'auto';
});

btnLicores.addEventListener('click', () => {
  catalogoLicores.style.display = 'flex';
  catalogoLicores.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

// Cerrar catálogo
cerrarCatalogoLicores.addEventListener('click', () => {
  catalogoLicores.style.display = 'none';
  document.body.style.overflow = 'auto';
});


btnCerveza.addEventListener('click', () => {
  catalogoCerveza.style.display = 'flex';
  catalogoCerveza.style.animation = 'fadeIn 0.5s ease forwards';
  document.body.style.overflow = 'hidden';
});

// Cerrar catálogo
cerrarCatalogoCerveza.addEventListener('click', () => {
  catalogoCerveza.style.display = 'none';
  document.body.style.overflow = 'auto';
});


const botonesDetalles = document.querySelectorAll('.btn-detalles');
const modal = document.getElementById('modal-detalles');
const cerrarModal = document.getElementById('cerrarModal');

const modalImg = document.getElementById('modal-img');
const modalNombre = document.getElementById('modal-nombre');
const modalPrecio = document.getElementById('modal-precio');
const modaltipo = document.getElementById('modal-tipo');
const modalorigen = document.getElementById('modal-origen');
const modalalcohol= document.getElementById('modal-alcohol');
const modalpresentacion = document.getElementById('modal-precio');
const modalInfo = document.getElementById('modal-info');

const detallesBebidas = {
    1: {
        nombre: "Brunello di Montalcino D.O.C.G.",
        precio: "Precio: S/. 436",
        tipo: "Tipo: Vino tinto",
        origen: "Origen: Italia - Toscana",
        alcohol: "Alcohol: 14%",
        presentacion: "Presentación: 750 ml",
        descripcion: "Vino estructurado con notas a frutos rojos y especias.",
        imagen: "img/VINO1.D.jpg"
    },
    2: {
        nombre: "Viña Zorzal Garnacha 2021",
        precio: "Precio: S/. 89",
        tipo: "Tipo: Vino tinto",
        origen: "Origen: España - Navarra",
        alcohol: "Alcohol: 13%",
        presentacion: "Presentación: 750 ml",
        descripcion: "Garnacha fresca y afrutada con taninos suaves.",
        imagen: "img/vino4.png"
    },
    3: {
        nombre: "El Enemigo Chardonnay 2022",
  precio: "Precio: S/. 82",
  tipo: "Tipo: Vino blanco",
  origen: "Origen: Argentina - Mendoza",
  alcohol: "Alcohol: 13.5%",
  presentacion: "Presentación: 750 ml",
  descripcion: "Chardonnay con cuerpo, notas frutales y toque de barrica.",
        imagen: "img/vino3.png"
    },
    4: {
       nombre: "Can Sumoi Perfum 2023",
  precio: "Precio: S/. 95",
  tipo: "Tipo: Vino blanco",
  origen: "Origen: España - Penedès",
  alcohol: "Alcohol: 12%",
  presentacion: "Presentación: 750 ml",
  descripcion: "Blanco aromático y fresco con notas florales.",
        imagen: "./img/vino5.jpeg"
         },
    5: {
        nombre: "Altos Las Hormigas Malbec Terroir 2021",
  precio: "Precio: S/. 110",
  tipo: "Tipo: Vino tinto",
  origen: "Origen: Argentina - Valle de Uco",
  alcohol: "Alcohol: 13.5%",
  presentacion: "Presentación: 750 ml",
  descripcion: "Malbec expresivo con notas minerales y taninos elegantes.",
        imagen: "./img/vino2.png"
    },

    
    6: {
        nombre: "Uncle Nearest 1856",
  precio: "Precio: S/. 250",
  tipo: "Tipo: Whisky premium",
  origen: "Origen: Estados Unidos",
  alcohol: "Alcohol: 50%",
  presentacion: "Presentación: Botella 750 ml",
  descripcion: "Whisky con notas de vainilla, caramelo y especias, final suave.",
        imagen: "./img/w1.jpg"
    },
    7: {
       nombre: "Yamazaki",
  precio: "Precio: S/. 1600",
  tipo: "Tipo: Whisky japonés",
  origen: "Origen: Japón",
  alcohol: "Alcohol: 43%",
  presentacion: "Presentación: Botella 700 ml",
  descripcion: "Whisky elegante con notas frutales, florales y toque de roble.",
        imagen: "./img/w2.png"
    },
    8: {
        nombre: "Johnnie Walker Blue Label",
  precio: "Precio: S/. 2000",
  tipo: "Tipo: Whisky escocés",
  origen: "Origen: Escocia",
  alcohol: "Alcohol: 40%",
  presentacion: "Presentación: Botella 750 ml",
  descripcion: "Whisky de lujo con mezcla exclusiva, sabor suave y ahumado.",
        imagen: "./img/w3.jpg"
    },
    9: {
        nombre: "Jack Daniel’s Single Barrel 100 Proof",
  precio: "Precio: S/. 300",
  tipo: "Tipo: Whisky americano",
  origen: "Origen: Estados Unidos",
  alcohol: "Alcohol: 50%",
  presentacion: "Presentación: Botella 750 ml",
  descripcion: "Whisky intenso con notas de roble tostado, caramelo y especias.",
        imagen: "./img/w4.jpg"
    },
    10: {
        nombre: "Glenfiddich Grand Cru 23 años",
  precio: "Precio: S/. 2000",
  tipo: "Tipo: Whisky escocés",
  origen: "Origen: Escocia",
  alcohol: "Alcohol: 40%",
  presentacion: "Presentación: Botella 700 ml",
  descripcion: "Whisky de 23 años acabado en barricas de vino espumoso francés.",
        imagen: "./img/w5.png"
    },


    11: {
        nombre: "Barranco Beer Company",
  precio: "Precio: S/. 25",
  tipo: "Tipo: Cerveza artesanal",
  origen: "Origen: Perú",
  alcohol: "Alcohol: 5%",
  presentacion: "Presentación: Botella 330 ml",
  descripcion: "Cerveza artesanal peruana con sabor equilibrado y notas frutales.",
        imagen: "./img/Licores.jpg"
    },
    12: {
        nombre: "Licor Sierra Andina",
  precio: "Precio: S/. 12",
  tipo: "Tipo: Cerveza artesanal",
  origen: "Origen: Perú",
  alcohol: "Alcohol: 4.5%",
  presentacion: "Presentación: Botella 330 ml",
  descripcion: "Cerveza artesanal andina con matices frescos y ligeros.",
        imagen: "./img/Licores2.png"
    },
    13: {
        nombre: "Strong Ale",
  precio: "Precio: S/. 16",
  tipo: "Tipo: Cerveza artesanal",
  origen: "Origen: Perú",
  alcohol: "Alcohol: 7%",
  presentacion: "Presentación: Botella 330 ml",
  descripcion: "Cerveza artesanal de alto cuerpo con sabor intenso y caramelizado.",
        imagen: "./img/licores3.jpg"
    },
    14: {
        nombre: "Gin Amazonian",
  precio: "Precio: S/. 132",
  tipo: "Tipo: Gin artesanal",
  origen: "Origen: Perú (Selva Amazónica)",
  alcohol: "Alcohol: 40%",
  presentacion: "Presentación: Botella 700 ml",
  descripcion: "Gin peruano elaborado con botánicos amazónicos, aroma fresco y herbal.",
        imagen: "./img/LICOR4D.jpg"
    },
    15: {
        nombre: "Stella Artois",
  precio: "Precio: S/. 180",
  tipo: "Tipo: Cerveza Premium",
  origen: "Origen: Bélgica",
  alcohol: "Alcohol: 5%",
  presentacion: "Presentación: Pack x 12 unidades (330 ml)",
  descripcion: "Cerveza lager premium con sabor balanceado y final refrescante.",
        imagen: "./img/cerveza1.png"
    },

    20: {
        nombre: "Miskimuña",
  precio: "Precio: S/. 36",
  tipo: "Tipo: Licor artesanal",
  origen: "Origen: Perú",
  alcohol: "Alcohol: 30%",
  presentacion: "Presentación: Botella 750 ml",
  descripcion: "Licor artesanal peruano elaborado con hierbas aromáticas andinas.",
        imagen: "./img/licor5.jpg"
    },


    16: {
        nombre: "Heineken",
  precio: "Precio: S/. 150",
  tipo: "Tipo: Cerveza Premium",
  origen: "Origen: Holanda",
  alcohol: "Alcohol: 5%",
  presentacion: "Presentación: Pack x 12 unidades (330 ml)",
  descripcion: "Cerveza europea de cuerpo ligero, aroma fresco y sabor suave.",
        imagen: "./img/cerveza2.jpg"
    },

    17: {
       nombre: "Corona Extra",
  precio: "Precio: S/. 210",
  tipo: "Tipo: Cerveza Premium",
  origen: "Origen: México",
  alcohol: "Alcohol: 4.5%",
  presentacion: "Presentación: Pack x 12 unidades (355 ml)",
  descripcion: "Cerveza clara y refrescante, ideal para acompañar con limón.",
        imagen: "./img/cerveza3.jpg"
    },
    18: {
        nombre: "Guinness Draught",
  precio: "Precio: S/. 175",
  tipo: "Tipo: Cerveza Stout Premium",
  origen: "Origen: Irlanda",
  alcohol: "Alcohol: 4.2%",
  presentacion: "Presentación: Lata 440 ml",
  descripcion: "Cerveza stout oscura con textura cremosa y notas de café y cacao.",
        imagen: "./img/cerveza4.jpg"
    },

    19: {
        nombre: "Warsteiner Premium Verum",
  precio: "Precio: S/. 250",
  tipo: "Tipo: Cerveza Lager Premium",
  origen: "Origen: Alemania",
  alcohol: "Alcohol: 4.8%",
  presentacion: "Presentación: Pack x 12 unidades (330 ml)",
  descripcion: "Cerveza alemana de carácter suave, elaborada con agua pura de manantial.",
        imagen: "./img/cerveza5.jpg"
    },
  };

document.querySelectorAll('.btn-detalles').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.detallesBebidas;
        const p = detallesBebidas[id];

        document.getElementById('modal-img').src = p.imagen;
        document.getElementById('modal-nombre').textContent = p.nombre;
        document.getElementById('modal-precio').textContent = p.precio;
        document.getElementById('modal-origen').textContent = p.origen;
        document.getElementById('modal-alcohol').textContent = p.alcohol;
      document.getElementById('modal-presentacion').textContent =  p.presentacion;
      document.getElementById('modal-descripcion').textContent =  p.descripcion;

        document.getElementById('modal-detalles').style.display = "flex";
    });
});

document.getElementById('cerrarModal').addEventListener('click', () => {
    document.getElementById('modal-detalles').style.display = "none";
});
