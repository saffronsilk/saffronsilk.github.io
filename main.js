// Cursor
(function() {
  const cur = document.getElementById('cur');
  const ring = document.getElementById('curRing');
  if (!cur || !ring) return;
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
    ring.style.left = e.clientX + 'px';
    ring.style.top  = e.clientY + 'px';
  });
})();

// Nav scroll
(function() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
})();

// Mobile nav
(function() {
  const burger = document.getElementById('burger');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileClose');
  if (!burger || !mobileNav) return;
  burger.addEventListener('click', () => mobileNav.classList.add('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => mobileNav.classList.remove('open'));
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
})();

// Scroll reveal
(function() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();

// Waitlist form handler
function handleWaitlist(inputId, noteId) {
  const v = document.getElementById(inputId)?.value || '';
  const note = document.getElementById(noteId);
  if (!note) return;
  if (!v || !v.includes('@')) {
    note.style.color = '#7A3030';
    note.textContent = 'Please enter a valid email address.';
    return;
  }
  note.style.color = 'var(--terracotta)';
  note.textContent = "✓ You're on the list. We'll be in touch.";
  const inp = document.getElementById(inputId);
  if (inp) inp.value = '';
}
