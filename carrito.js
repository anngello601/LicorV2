// Abrir y Cerrar Carrito
const carritoSidebar = document.getElementById("carritoSidebar");
const btnAbrirCarrito = document.getElementById("btnAbrirCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const btnCarritoNavbar = document.getElementById("btnCarritoNavbar");



btnAbrirCarrito.addEventListener("click", () => {
    carritoSidebar.classList.add("open");
    btnAbrirCarrito.style.display = "none"; // ← OCULTA EL BOTÓN
});

cerrarCarrito.addEventListener("click", () => {
    carritoSidebar.classList.remove("open");
    btnAbrirCarrito.style.display = "flex"; // ← LO VUELVE A MOSTRAR
});
btnCarritoNavbar.addEventListener("click", () => {
    carritoSidebar.classList.add("open");
});



// --- Lógica del Carrito ---
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

// AGREGAR PRODUCTO
function agregarAlCarrito(nombre, precio, img) {
    const productoExistente = carrito.find(p => p.nombre === nombre);

    let cantidadFinal;

    if (productoExistente) {
        productoExistente.cantidad++;
        cantidadFinal = productoExistente.cantidad;
    } else {
        carrito.push({
            nombre,
            precio: parseFloat(precio),
            img,
            cantidad: 1
        });
        cantidadFinal = 1;
    }

    guardarCarrito();
    mostrarPopup(cantidadFinal);
}


// MOSTRAR CARRITO
function mostrarCarrito() { 
    const lista = document.getElementById("listaCarrito");
    const totalTxt = document.getElementById("carritoTotal");

    lista.innerHTML = "";

    let total = 0;

    carrito.forEach(p => {
        total += p.precio * p.cantidad;

        lista.innerHTML += `
        <div class="carrito-item">
            <img src="${p.img}">
            <div class="carrito-item-info">
                <p><strong>${p.nombre}</strong></p>
                <p>S/ ${p.precio.toFixed(1)}</p>

                <div class="carrito-controles">
                    <button class="btn-cantidad" onclick="cambiarCantidad('${p.nombre}', -1)">−</button>
                    <span>${p.cantidad}</span>
                    <button class="btn-cantidad" onclick="cambiarCantidad('${p.nombre}', 1)">+</button>

                    <button class="btn-eliminar" onclick="eliminarDelCarrito('${p.nombre}')">🗑</button>
                </div>
            </div>
        </div>
        `;
    });

    totalTxt.textContent = total.toFixed(1);
}

mostrarCarrito();


// Cambiar cantidad
function cambiarCantidad(nombre, cambio) {
    const p = carrito.find(item => item.nombre === nombre);

    p.cantidad += cambio;

    if (p.cantidad <= 0) {
        carrito = carrito.filter(item => item.nombre !== nombre);
    }

    guardarCarrito();
}

//funcion Eliminar producto
function eliminarDelCarrito(nombre) {
    carrito = carrito.filter(item => item.nombre !== nombre);
    mostrarCarrito();
}


// Comprar
document.getElementById("btnComprar").addEventListener("click", () => {
    alert("Compra realizada 🤝🍾");
    carrito = [];
    guardarCarrito();
});

function mostrarPopup(cantidad) {
    const popup = document.getElementById("popupCarrito");
    const textoCantidad = document.getElementById("popupCantidad");

    textoCantidad.textContent = `${cantidad} producto${cantidad > 1 ? "s" : ""}`;

    popup.classList.add("show");

    // Cerrar automático después de 2.5s
    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}
// Botón "Editar carrito"
document.getElementById("btnVerCarrito").addEventListener("click", () => {
    document.getElementById("popupCarrito").classList.remove("show");
    carritoSidebar.classList.add("open");
});

// Botón cerrar (X)
document.querySelector(".popup-close").addEventListener("click", () => {
    document.getElementById("popupCarrito").classList.remove("show");
});








