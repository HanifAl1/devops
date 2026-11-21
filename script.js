// =========================
// THEME TOGGLE
// =========================

const toggle = document.getElementById('theme-toggle');

// Ambil tema yang tersimpan
const saved = localStorage.getItem('theme');

// Terapkan tema sebelumnya
if (saved === 'dark') {
    document.documentElement.dataset.theme = 'dark';
    toggle.textContent = '☀️';
} else {
    document.documentElement.dataset.theme = 'light';
    toggle.textContent = '🌙';
}

// Event ketika tombol diklik
toggle.addEventListener('click', () => {

    const dark = document.documentElement.dataset.theme === 'dark';

    // Ubah tema
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';

    // Simpan pilihan pengguna
    localStorage.setItem('theme', dark ? 'light' : 'dark');

    // Ubah icon
    toggle.textContent = dark ? '🌙' : '☀️';

});