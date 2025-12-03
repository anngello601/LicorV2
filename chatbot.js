// Abrir y cerrar el chatbot
function toggleChat() {
    const chat = document.getElementById("chatbot");
    chat.classList.toggle("show");
}

// Enviar mensaje
function sendMessage() {
    const input = document.getElementById("userInput");
    const msg = input.value.trim();
    if (msg === "") return;

    let chatBody = document.getElementById("chat-body");

    // Mensaje del usuario
    let userMsg = document.createElement("div");
    userMsg.className = "user-msg";
    userMsg.innerText = msg;
    chatBody.appendChild(userMsg);

    // Respuesta automática
    let botMsg = document.createElement("div");
    botMsg.className = "bot-msg";
    botMsg.innerHTML = obtenerRespuesta(msg); 
    chatBody.appendChild(botMsg);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
}
// Mostrar el botón del chatbot después de 3 segundos
setTimeout(() => {
    const btn = document.querySelector(".chatbot-btn");
    btn.style.opacity = "1";
    btn.style.pointerEvents = "auto";
}, 4800);

// ==============================
// RESPUESTAS DEL CHATBOT
// (USANDO PRODUCTOS REALES DE TU WEB)
// ==============================

function obtenerRespuesta(mensaje) {
    mensaje = mensaje.toLowerCase();

    // ------------------------------------
    // 🥃 WHISKY
    // ------------------------------------
    if (mensaje.includes("whisky")) {
        return `
        🥃 *Whiskies disponibles:*<br><br>
        - Uncle Nearest 1856 — *S/ 250*<br>
        - Yamazaki — *S/ 1600*<br>
        - Johnnie Walker Blue Label — *S/ 2000*<br>
        - Jack Daniel’s Single Barrel 100 Proof — *S/ 300*<br>
        - Glenfiddich Grand Cru 23 años — *S/ 2000*<br><br>
        👉 <a href="#" class="openWhisky">Ir a Whisky</a>
        `;
    }

    // ------------------------------------
    // 🍷 VINOS (RECIÉN EXTRAÍDOS DE TU PÁGINA)
    // ------------------------------------
    if (mensaje.includes("vino")) {
        return `
        🍷 *Vinos disponibles:*<br><br>
        - Brunello di Montalcino D.O.C.G. — *S/ 436*<br>
        - Altos Las Hormigas Malbec Terroir 2021 — *S/ 110*<br>
        - El Enemigo Chardonnay 2022 — *S/ 82*<br>
        - Viña Zorzal Garnacha 2021 — *S/ 89*<br>
        - Can Sumoi Perfum 2023 — *S/ 95*<br><br>
        👉 <a href="#" class="openVinos">Ir a Vinos</a>
        `;
    }

    // ------------------------------------
    // 🍺 CERVEZA (CATÁLOGO REAL)
    // ------------------------------------
    if (mensaje.includes("cerveza")) {
        return `
        🍺 *Cervezas disponibles:*<br><br>
        - Stella Artois — *S/ 180*<br>
        - Heineken — *S/ 150*<br>
        - Corona Extra — *S/ 210*<br>
        - Guinness Draught — *S/ 175*<br>
        - Warsteiner Premium Verum — *S/ 250*<br><br>
        👉 <a href="#" class="openCerveza">Ir a Cervezas</a>
        `;
    }

    // ------------------------------------
    // 🧉 LICORES
    // ------------------------------------
    if (mensaje.includes("licor") || mensaje.includes("licores")) {
        return `
        🍸 *Licores disponibles:*<br><br>
        - Barranco Beer Company — *S/ 25*<br>
        - Licor Sierra Andina — *S/ 12*<br>
        - Strong Ale — *S/ 16*<br>
        - Gin Amazonian — *S/ 132*<br>
        - Miskimuña — *S/ 36*<br><br>
        👉 <a href="#" class="openLicores">Ir a Licores</a>
        `;
    }

    // ------------------------------------
    // 🚚 DELIVERY
    // ------------------------------------
    if (mensaje.includes("delivery")) {
        return `
        🚚 *Delivery disponible:*<br><br>
        - Envío en 30–45 min<br>
        - Cobertura Lima Metropolitana<br>
        - Costo entre S/ 5 — S/ 10<br><br>
        👉 <a href="#delivery">Más información</a>
        `;
    }

    // ------------------------------------
    // 💳 MÉTODOS DE PAGO
    // ------------------------------------
    if (mensaje.includes("pago") || mensaje.includes("pagos")) {
        return `
        💳 *Métodos de pago:*<br><br>
        - Yape<br>
        - Plin<br>
        - Transferencia<br>
        - Efectivo contra entrega<br><br>
        👉 <a href="#pagos">Ver detalles</a>
        `;
    }

    // ------------------------------------
    // CONTACTO / WHATSAPP
    // ------------------------------------
    if (mensaje.includes("contacto") || mensaje.includes("whatsapp")) {
        return `
        📞 *Contacto directo:*<br><br>
        WhatsApp:  
        👉 <a href="https://wa.me/51987654321" target="_blank">Enviar mensaje</a>
        `;
    }

    // ------------------------------------
    // SALUDOS
    // ------------------------------------
    if (mensaje.includes("hola") || mensaje.includes("buenas")) {
        return "¡Hola! 👋 ¿Buscas Whisky, Vino, Licores o Cerveza?";
    }

    if (mensaje.includes("gracias")) {
        return "¡Encantado! Si quieres ver precios o promociones, solo dime 😊";
    }

    // ------------------------------------
    // RECOMENDACIONES
    // ------------------------------------
    if (mensaje.includes("recomienda") || mensaje.includes("recomendación")) {
        return `
        ⭐ *Recomendaciones:*<br><br>
        - Whisky: *Uncle Nearest 1856*<br>
        - Vino: *Brunello di Montalcino*<br>
        - Licor: *Gin Amazonian*<br>
        - Cerveza: *Guinness Draught*<br><br>
        ¿Deseas ver precios o ir al catálogo?
        `;
    }

    // ------------------------------------
    // DEFAULT
    // ------------------------------------
    return "No entendí 🤔 ¿Qué deseas ver? (Whisky, Vino, Cerveza, Licores)";
}
document.addEventListener("click", function(e) {

    // --- VINOS ---
    if (e.target.classList.contains("openVinos")) {
        e.preventDefault();
        const btn = document.getElementById("verMasVinos");
        if (btn) btn.click();
    }

    // --- WHISKY ---
    if (e.target.classList.contains("openWhisky")) {
        e.preventDefault();
        const btn = document.getElementById("verMasWhisky");
        if (btn) btn.click();
    }

    // --- LICORES ---
    if (e.target.classList.contains("openLicores")) {
        e.preventDefault();
        const btn = document.getElementById("verMasLicores");
        if (btn) btn.click();
    }

    // --- CERVEZA ---
    if (e.target.classList.contains("openCerveza")) {
        e.preventDefault();
        const btn = document.getElementById("verMasCerveza");
        if (btn) btn.click();
    }

});