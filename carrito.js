let cart = [];

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    updateCartDisplay();
}

function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCartDisplay();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    const totalContainer = document.getElementById('cart-total');
    const payButton = document.getElementById('pay-button');
    cartContainer.innerHTML = '';
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="text-gray-500">Tu carrito está vacío.</p>';
        totalContainer.innerText = 'Total: $0.00';
        payButton.style.display = 'none';
        return;
    }
    cart.forEach(item => {
        const productRow = document.createElement('div');
        productRow.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'py-2');
        productRow.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.name}')" class="text-red-500 hover:underline">Eliminar</button>
        `;
        cartContainer.appendChild(productRow);
    });
    totalContainer.innerText = `Total: $${calculateTotal()}`;
    payButton.style.display = 'block';
}

function processPayment() {
    alert(`Gracias por tu compra. El total es $${calculateTotal()}.`);
    cart = [];
    updateCartDisplay();
}
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

window.addEventListener('beforeunload', saveCartToLocalStorage);
window.addEventListener('load', loadCartFromLocalStorage);
