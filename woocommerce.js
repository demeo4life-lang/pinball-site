document.addEventListener("DOMContentLoaded", () => {
  // --- Product Gallery Thumbnail Swap ---
  const productMain = document.querySelector("#product-page .product-photo, #product-page .product-img");
  const productThumbs = document.querySelectorAll("#product-page .product-thumb img");

  if (productMain && productThumbs.length > 0) {
    productThumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        productMain.style.opacity = 0;
        setTimeout(() => {
          productMain.src = thumb.src;
          productMain.alt = thumb.alt;

          productThumbs.forEach((t) => t.parentElement.classList.remove("active"));
          thumb.parentElement.classList.add("active");

          productMain.style.opacity = 1;
        }, 200);
      });
    });
  }

  // --- Mini Cart Overlay Setup ---
  const cartOverlay = document.createElement("div");
  cartOverlay.id = "mini-cart";
  cartOverlay.innerHTML = `
    <div class="mini-cart-content">
      <h3>Your Cart</h3>
      <ul class="mini-cart-items"></ul>
      <div class="mini-cart-total">Total: $0.00</div>
      <div class="mini-cart-actions">
        <button class="checkout-cart">Checkout</button>
        <button class="clear-cart">Clear Cart</button>
        <button class="close-cart">Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(cartOverlay);

  const cartItemsList = cartOverlay.querySelector(".mini-cart-items");
  const totalDisplay = cartOverlay.querySelector(".mini-cart-total");
  const closeCartBtn = cartOverlay.querySelector(".close-cart");
  const checkoutBtn = cartOverlay.querySelector(".checkout-cart");
  const clearCartBtn = cartOverlay.querySelector(".clear-cart");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
  });

  checkoutBtn.addEventListener("click", () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "checkout.html";
  });

  clearCartBtn.addEventListener("click", () => {
    cart = [];
    localStorage.removeItem("cart");
    updateCartDisplay();
  });

  // --- Add to Cart Buttons ---
  const cartButtons = document.querySelectorAll(".add-cart, .btn.add-cart");
  cartButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productSection = btn.closest("section, .related-item, .shop-content");
      const title = productSection.querySelector("h1, h4")?.textContent || "Unnamed Item";
      const priceText = productSection.querySelector(".price, p")?.textContent || "";
      const price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;

      const existingItem = cart.find(item => item.title === title);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ title, price, quantity: 1 });
      }

      updateCartDisplay();
      cartOverlay.classList.add("active");
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });

  // --- Update Cart Display ---
  function updateCartDisplay() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price * item.quantity;
      const li = document.createElement("li");
      li.innerHTML = `
        ${item.title} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}
        <button class="remove-item" data-index="${index}">Remove</button>
      `;
      cartItemsList.appendChild(li);
    });

    totalDisplay.textContent = `Total: $${total.toFixed(2)}`;

    const removeButtons = cartItemsList.querySelectorAll(".remove-item");
    removeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const index = parseInt(btn.getAttribute("data-index"), 10);
        cart.splice(index, 1);
        updateCartDisplay();
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });
  }

  updateCartDisplay();

  // --- Related Products Hover Effect ---
  const relatedItems = document.querySelectorAll(".related-item");
  relatedItems.forEach((item) => {
    item.addEventListener("mouseenter", () => item.classList.add("highlight"));
    item.addEventListener("mouseleave", () => item.classList.remove("highlight"));
  });
});