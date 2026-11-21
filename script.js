const toggle = document.getElementById('theme-toggle');

const saved = localStorage.getItem('theme');
if (saved) {
  document.documentElement.dataset.theme = saved;
  toggle.textContent = saved === 'dark' ? '☀️' : '🌙';
}

toggle.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = dark ? '' : 'dark';
  localStorage.setItem('theme', dark ? '' : 'dark');
  toggle.textContent = dark ? '🌙' : '☀️';
});
