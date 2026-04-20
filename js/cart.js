let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = `<p class="text-center text-muted py-5">Your cart is empty.<br><a href="index.html" class="text-primary">Browse Products</a></p>`;
    updateSummary();
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'list-group-item d-flex justify-content-between align-items-center';
    div.innerHTML = `
      <div>
        <h5 class="mb-1">${item.name}</h5>
        <small class="text-primary fw-bold">₹${item.price}</small>
      </div>
      <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
  });

  updateSummary();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

function updateSummary() {
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  document.getElementById('itemCount').textContent = cart.length;
  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('total').textContent = `₹${subtotal}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("🎉 Thank you for shopping with ShopSphere!\nYour order has been placed successfully.");
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

renderCart();
