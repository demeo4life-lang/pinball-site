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

  // =========================
  // Claw Machine gallery
  // =========================
  const clawMain = document.querySelector("#claw-machine .claw-machine-photo");
  const clawThumbs = document.querySelectorAll("#claw-machine .claw-machine-thumb img");

  clawThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      clawMain.src = thumb.src;
      clawMain.alt = thumb.alt;

      clawThumbs.forEach((t) => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
    });
  });
  
  // =========================
  // Multi Changer All In One Change Machine
  // =========================
  const changerMain = document.querySelector("#changer-machine .changer-machine-photo");
  const changerThumbs = document.querySelectorAll("#changer-machine .changer-machine-thumb img");

  changerThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      changerMain.src = thumb.src;
      changerMain.alt = thumb.alt;

      changerThumbs.forEach((t) => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
    });
  });
  
  // =========================
  // CAPTAIN FANTASTIC - Elton John - 1976 Williams Pinball Machine
  // =========================
  const pinballMain = document.querySelector("#pinball-machine .pinball-machine-photo");
  const pinballThumbs = document.querySelectorAll("#pinball-machine .pinball-machine-thumb img");

  pinballThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      pinballMain.src = thumb.src;
      pinballMain.alt = thumb.alt;

      pinballThumbs.forEach((t) => t.parentElement.classList.remove("active"));
      thumb.parentElement.classList.add("active");
	  
    });
  });
  
    // =========================
  // Captain Fantastic gallery
  // =========================
  const fantasticMain = document.querySelector("#captain-fantastic .fantastic-photo");
  const fantasticThumbs = document.querySelectorAll("#captain-fantastic .fantastic-thumb img");

  fantasticThumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      // Fade out
      fantasticMain.style.opacity = 0;

      setTimeout(() => {
        // Swap image
        fantasticMain.src = thumb.src;
        fantasticMain.alt = thumb.alt;

        // Highlight active thumb
        fantasticThumbs.forEach((t) => t.parentElement.classList.remove("active"));
        thumb.parentElement.classList.add("active");

        // Fade back in
        fantasticMain.style.opacity = 1;
      }, 200); // delay matches CSS transition
    });
  });