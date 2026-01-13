document.addEventListener("DOMContentLoaded", () => {
  const checkoutItems = document.getElementById("checkout-items");
  const checkoutTotal = document.getElementById("checkout-total");
  const modal = document.getElementById("order-modal");
  const closeModalBtn = document.getElementById("close-modal");

  // Load cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.textContent = `${item.title} x${item.quantity} — $${(item.price * item.quantity).toFixed(2)}`;
    checkoutItems.appendChild(li);
  });

  checkoutTotal.textContent = `Total: $${total.toFixed(2)}`;

  // Handle form submission
  const form = document.getElementById("checkout-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Clear cart after order
    localStorage.removeItem("cart");
    checkoutItems.innerHTML = "";
    checkoutTotal.textContent = "Total: $0.00";

    // Show custom modal popup
    modal.style.display = "block";
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal if user clicks outside content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});