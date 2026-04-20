// Sample product data
const products = [
  { name: "Wireless Headphones", price: 1999, img: "https://source.unsplash.com/300x300/?headphones" },
  { name: "Smart Watch", price: 3499, img: "https://source.unsplash.com/300x300/?smartwatch" },
  { name: "Gaming Mouse", price: 1299, img: "https://source.unsplash.com/300x300/?mouse" },
  { name: "Bluetooth Speaker", price: 2499, img: "https://source.unsplash.com/300x300/?speaker" },
  { name: "Laptop Backpack", price: 1599, img: "https://source.unsplash.com/300x300/?backpack" },
  { name: "Fitness Tracker", price: 2999, img: "https://source.unsplash.com/300x300/?fitness" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderProducts() {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  grid.innerHTML = '';
  products.forEach((product, index) => {
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card shadow h-100">
        <img src="${product.img}" class="card-img-top" alt="${product.name}">
        <div class="card-body text-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text text-primary fw-bold">₹${product.price}</p>
          <button class="btn btn-primary w-100" onclick="addToCart(${index})">Add to Cart</button>
        </div>
      </div>
    `;
    grid.appendChild(col);
  });
  updateCartCount();
}

function addToCart(index) {
  cart.push(products[index]);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(`${products[index].name} added to cart!`);
}

function updateCartCount() {
  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = cart.length;
}

renderProducts();
