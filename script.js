document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // Arcade Giant gallery
  // =========================
  const arcadeMain = document.querySelector("#arcade-giant .giant-photo");
  const arcadeThumbs = document.querySelectorAll("#arcade-giant .giant-thumb img");

  arcadeThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      arcadeMain.src = thumb.src;
      arcadeMain.alt = thumb.alt;

      arcadeThumbs.forEach((t) => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
    });
  });

  // =========================
  // Retro Jukebox gallery
  // =========================
  const jukeboxMain = document.querySelector("#jukebox-retro .jukebox-photo");
  const jukeboxThumbs = document.querySelectorAll("#jukebox-retro .jukebox-thumb img");

  jukeboxThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      jukeboxMain.src = thumb.src;
      jukeboxMain.alt = thumb.alt;

      jukeboxThumbs.forEach((t) => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
    });
  });

  // =========================
  // Navbar toggle (mobile)
  // =========================
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", !expanded);
    });
  }

  // =========================
  // Fade-in effect for grid items
  // =========================
  const items = document.querySelectorAll(".item-style");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  items.forEach((item) => observer.observe(item));
});