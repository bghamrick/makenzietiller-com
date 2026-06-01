// Travels with Makenzie — small UI helpers
// Scroll fade-in + service selector hover state.

(function () {
  // Intersection-observer-driven fade-in
  const els = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window && els.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add('visible'));
  }

  // Service toggles on plan-trip — selecting a service can later prefill the form
  const services = document.querySelectorAll('.service');
  const destField = document.querySelector('#dream-destination');
  services.forEach((s) => {
    s.addEventListener('click', (e) => {
      e.preventDefault();
      services.forEach((x) => x.classList.remove('active'));
      s.classList.add('active');
      if (destField && s.dataset.prefill) {
        destField.value = s.dataset.prefill;
        destField.focus();
      }
    });
  });
})();
