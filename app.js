document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCountElement = document.getElementById('cart-item-count');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCart = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartUI();
    };

    const updateCartUI = () => {
        const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
        if (cartItemCountElement) {
            cartItemCountElement.textContent = totalItems;
        }
    };

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            const price = parseFloat(button.dataset.price);

            const existingItem = cart.find(item => item.name === name);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            updateCart();
            alert(`${name} ha sido añadido al carrito.`);
        });
    });

    updateCartUI();
});
