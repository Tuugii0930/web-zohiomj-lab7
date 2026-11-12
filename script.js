// 1. Гар утасны цэс (Лаб 5)
const toggle = document.querySelector('.nav__toggle');
const menu = document.getElementById('menu');
toggle.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// 2. Dark / light горим (сонголтыг хадгална)
const root = document.documentElement;
const themeBtn = document.getElementById('theme');
function applyTheme(t) {
  root.dataset.theme = t;
  themeBtn.setAttribute('aria-pressed', String(t === 'light'));
  themeBtn.textContent = t === 'light' ? 'Шөнийн горим' : 'Өдрийн горим';
}
let saved = null;
try { saved = localStorage.getItem('theme'); } catch (e) {}
applyTheme(saved || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
themeBtn.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try { localStorage.setItem('theme', next); } catch (e) {}
});

// 3. Flip картыг товчоор эргүүлэх (утас болон гар)
document.querySelectorAll('.flip__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.flip');
    const flipped = card.classList.toggle('is-flipped');
    btn.setAttribute('aria-pressed', String(flipped));
  });
});
