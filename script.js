// script.js

const products = [
  { name: "Red Sneakers", category: "Footwear", price: 1499, rating: 4.8, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQM2YLcnUl098rZ-_JZBblHITGpUYV29-HobfRluy0MmuZRNyN6Sr1wMOu_hFs7O5EGBF0JaRO58Xg9Fh9nPiY_1iJOcVKHWadg4wZ5up7-eyJquBOuKTa8XaU" },
  { name: "Casual T-Shirt", category: "Clothing", price: 799, rating: 4.4, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRhDyzPGvKrkxlUyaQZ0qxZ5zTyybn4suPvWNJU--Jkqn36MBaLTAY5lyTiIAN85SyT6pvSO4JsKibHopFlTdHc6Uzs7mUy6JHBccWmtkeE8mGfMMxx5EZSYA" },
  { name: "Stylish Wallet", category: "Accessories", price: 999, rating: 4.6, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqcX0I6dYElCu5cekItETwEeR2sbTLWmYw749AC0Z6FFjDBNa4L46k0N0nGMsBW7TXiFJd12U6BEBCuZfsmnqMDKYFylHnh3-9Tzi0kVBNgupySDa1oKSr7Q" },
  { name: "Smart Watch", category: "Electronics", price: 2499, rating: 4.7, img: "https://m.media-amazon.com/images/I/51Q74o0dcYL.jpg" },
  { name: "Denim Jeans", category: "Clothing", price: 1499, rating: 4.3, img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSSOdmoiAQkGdQUm7Alf8_bgC-rdYxf15dfUOHbT8L1WC0gjjNNtB763capgZPzfZ2zdGCt-feJsi-lJ1DoAqLPVojM5bA8MOmY1W0Z7w0" },
  { name: "Bluetooth Headphones", category: "Electronics", price: 1899, rating: 4.5, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDweDpgdQBB-6sIjfSYSeZ9dTQJcAVxd7FBVhH8Y5NitNBKwx_38j2oM5RBJoiF4NnxRHm-SmeuW43k4nsPUQ4c1K0GXNfcXpK7pbCA17fCesECYE-t9Hu" },
  { name: "Backpack", category: "Accessories", price: 1299, rating: 4.2, img: "https://m.media-amazon.com/images/I/61w4YL27S7L.jpg" },
  { name: "Formal Shoes", category: "Footwear", price: 2199, rating: 4.6, img: "https://images.meesho.com/images/products/465637298/bbp6h_1200.jpg" },
  { name: "Leather Belt", category: "Accessories", price: 499, rating: 4.3, img: "https://images.meesho.com/images/products/441184616/1dp9z_512.webp" },
  { name: "Hoodie Jacket", category: "Clothing", price: 1699, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQOIMXxma_xfzPxGtBRGiuSoVm0U8zD4JRNZgyM_X_QANxe7i5fUJRHsBSmUycHwdU1IdfrOln8eGDROVQ4f_82toghiFeOKeD1g4ctqrHr" },
  { name: "Running Shoes", category: "Footwear", price: 1899, rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRMZnvtjobcCD3EVRtQ5C_zQ8UteoG_JSFeHj7na-gxRGimvxwSpiRkwStNmHNaOMarRuSUxaMFMdtFv75TlQ_ORI1gjaOkczUuszSYVk2WBNFMAa5ir4sM" },
  { name: "Tablet", category: "Electronics", price: 5499, rating: 4.8, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR02nnWKGohfTdAy3mrI-_PloHnFpvRktLB-WyS0w_jlXv1MJ_Jh57WlNwtZ6wn6B6oCBM1um59-6PZAO8VsFOPlw5w99aWSo0qv2e5L6M3MWcIoEtEixOMTQ" }
];

let cart = [];
let currentCategory = "All";

function renderProducts() {
  const sortBy = document.getElementById("sort").value;
  let filteredProducts = currentCategory === "All" ? [...products] : products.filter(p => p.category === currentCategory);

  if (sortBy === "price") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  const container = document.getElementById("productContainer");
  container.innerHTML = '';
  filteredProducts.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <div class="product-category">${p.category}</div>
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <h3>${p.name}</h3>
      <p>Price: ₹${p.price}</p>
      <div class="rating-stars">${'★'.repeat(Math.floor(p.rating))} (${p.rating})</div>
      <button class="buy-btn" onclick='addToCart("${p.name}", ${p.price})'>Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  cartCount.innerText = cart.length;
  cartItems.innerHTML = cart.map(item => `<div class='cart-item'><span>${item.name}</span><span>₹${item.price}</span></div>`).join('');
}

function toggleCart() {
  document.getElementById("cartPanel").classList.toggle("active");
}

function setupFilters() {
  document.querySelectorAll(".filter-bar button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-bar button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderProducts();
    });
  });
}

document.getElementById("sort").addEventListener("change", renderProducts);
document.addEventListener("DOMContentLoaded", () => {
  setupFilters();
  renderProducts();
});  