[23.08, 29/4/2026] 🦋🦋 𓆩♡𓆪 ˚₊· ͟͟͞͞➳❥ 𝒮: <!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Toko Aksesoris Cantik</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
  <h1>✨ Toko Aksesoris Cantik ✨</h1>
  <p>Kalung • Gelang • Anting • Cincin</p>
</header>

<div id="cart">
  🛒 <span id="cart-count">0</span>
</div>

<div class="container">

  <div class="product">
    <img src="https://via.placeholder.com/200">
    <h3>Kalung Elegan</h3>
    <p>Rp 75.000</p>
    <button onclick="addToCart('Kalung Elegan',75000)">Tambah</button>
    <button onclick="buyNow('Kalung Elegan')">Beli</button>
  </div>

  <div class="product">
    <img src="https://via.placeholder.com/200">
    <h3>Gelang Lucu</h3>
    <p>Rp 50.000</p>
    <button onclick="addToCart('Gelang Lu…
[23.09, 29/4/2026] 🦋🦋 𓆩♡𓆪 ˚₊· ͟͟͞͞➳❥ 𝒮: let count = 0;
let total = 0;

function addToCart(product, price) {
  count++;
  total += price;

  document.getElementById("cart-count").innerText = count;
  document.getElementById("total").innerText = total;

  alert(product + " ditambahkan ke keranjang!");
}

function buyNow(product) {
  let nomor = "6281234567890"; // GANTI nomor kamu
  let pesan = "Halo, saya mau beli " + product;

  let url = "https://wa.me/" + nomor + "?text=" + encodeURIComponent(pesan);
  window.open(url, "_blank");
}