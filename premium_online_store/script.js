// Scroll to top visibility
window.addEventListener('scroll', () => {
  document.getElementById('scrollTop').classList.toggle('visible', window.scrollY > 400);
});

// Intersection Observer for reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Filter tabs
document.querySelectorAll('.filter-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Countdown timer
function updateCountdown() {
  const now = new Date();
  const end = new Date();
  end.setHours(23, 59, 59, 0);
  let diff = Math.floor((end - now) / 1000);
  const h = Math.floor(diff / 3600); diff -= h * 3600;
  const m = Math.floor(diff / 60); diff -= m * 60;
  document.getElementById('hours').textContent = String(h).padStart(2,'0');
  document.getElementById('mins').textContent = String(m).padStart(2,'0');
  document.getElementById('secs').textContent = String(diff).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

// Add to cart micro interaction
document.querySelectorAll('.btn-cart').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const orig = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    btn.style.background = 'var(--green)';
    setTimeout(() => { btn.innerHTML = orig; btn.style.background = ''; }, 1800);
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  document.querySelector('header').style.boxShadow =
    window.scrollY > 20 ? '0 4px 30px rgba(26,26,46,0.12)' : 'var(--shadow-sm)';
});