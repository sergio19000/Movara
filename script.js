const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const saved = () => { try { return localStorage.getItem('theme'); } catch (e) { return null; } };
 
/* Modo noche: sigue al navegador, salvo que la persona elija manualmente */
function setTheme(theme, persist) {
  root.dataset.theme = theme;
  toggle.setAttribute('aria-pressed', theme === 'dark');
  toggle.setAttribute('aria-label', theme === 'dark' ? 'Activar modo claro' : 'Activar modo noche');
  if (persist) { try { localStorage.setItem('theme', theme); } catch (e) {} }
}
setTheme(root.dataset.theme, false);
toggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark', true));
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!saved()) setTheme(e.matches ? 'dark' : 'light', false);
});
 
/* Línea inferior en la cabecera al bajar */
const header = document.querySelector('.header');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
addEventListener('scroll', onScroll, { passive: true });
 
/* Animaciones de entrada al deslizar */
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-visible'));
}
 
/* Filtro de productos por categoría */
const chips = document.querySelectorAll('.chip');
const products = document.querySelectorAll('.product');
chips.forEach((chip) => chip.addEventListener('click', () => {
  chips.forEach((c) => c.setAttribute('aria-pressed', c === chip));
  products.forEach((p) => { p.hidden = !(chip.dataset.filter === 'all' || p.dataset.category === chip.dataset.filter); });
}));
 
/* Carrito de demostración (en el proyecto real vendrá del back end) */
let count = 0;
const cartCount = document.querySelector('.cart-count');
document.querySelectorAll('.add').forEach((btn) => btn.addEventListener('click', () => {
  cartCount.textContent = ++count;
  btn.textContent = 'Añadido';
  setTimeout(() => { btn.textContent = 'Añadir al carrito'; }, 1500);
}));