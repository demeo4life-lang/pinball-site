<script>
  // Sticky navbar + buttons visibility
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');
  const contactFloat = document.querySelector('.contact-float');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 10);
    const show = y > 280;
    backToTop.style.display = show ? 'inline-block' : 'none';
    contactFloat.style.display = show ? 'inline-block' : 'none';
  });

  // Mobile menu toggle
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    const active = links.classList.toggle('active');
    toggle.setAttribute('aria-expanded', active ? 'true' : 'false');
    document.body.classList.toggle('no-scroll', active);
  });

  // Fade-in items on load (services grid)
  window.addEventListener('load', () => {
    document.querySelectorAll('.item-style').forEach((el, i) => {
      setTimeout(() => el.classList.add('fade-in'), 120 * i);
    });
  });

  // Arcade Giant: click thumbnails to swap main image
  const displayImg = document.querySelector('.giant-photo');
  const thumbsWrap = document.querySelector('.giant-thumbs');
  if (thumbsWrap && displayImg) {
    thumbsWrap.addEventListener('click', (e) => {
      const t = e.target.closest('.giant-thumb');
      if (!t) return;
      const img = t.querySelector('img');
      if (!img) return;
      const src = img.getAttribute('src');
      thumbsWrap.querySelectorAll('.giant-thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      displayImg.setAttribute('src', src);
      // Reset transform when swapping
      displayImg.style.transform = 'scale(1) translate(0, 0)';
    });
    thumbsWrap.classList.add('has-active');
  }

  // Hover zoom/pan effect on enlarged image
  if (displayImg) {
    const MAX_SCALE = 1.18;  // magnification
    const SHIFT_PX = 24;     // pan range in pixels

    function updateTransformFromPoint(clientX, clientY) {
      const rect = displayImg.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const nx = (x / rect.width - 0.5) * 2;  // -1..1
      const ny = (y / rect.height - 0.5) * 2; // -1..1
      const tx = Math.max(-1, Math.min(1, nx)) * SHIFT_PX;
      const ty = Math.max(-1, Math.min(1, ny)) * SHIFT_PX;
      displayImg.style.transform = `scale(${MAX_SCALE}) translate(${tx}px, ${ty}px)`;
    }

    displayImg.addEventListener('mouseenter', (e) => {
      updateTransformFromPoint(e.clientX, e.clientY);
    });
    displayImg.addEventListener('mousemove', (e) => {
      updateTransformFromPoint(e.clientX, e.clientY);
    });
    displayImg.addEventListener('mouseleave', () => {
      displayImg.style.transform = 'scale(1) translate(0, 0)';
    });

    // Touch support
    displayImg.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        updateTransformFromPoint(t.clientX, t.clientY);
      }
    }, { passive: true });
    displayImg.addEventListener('touchend', () => {
      displayImg.style.transform = 'scale(1) translate(0, 0)';
    });
  }
</script>