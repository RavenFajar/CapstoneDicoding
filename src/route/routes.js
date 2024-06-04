import '../view/home.js';
import '../view/education.js';
import '../view/forum.js';

const routes = {
  '/': 'home', // Home page
  '/education': 'education', // Education page
  '/forum': 'forum' // Forum page
};

// Fungsi untuk memuat script yang sesuai dengan halaman
function loadScript(scriptName) {
  const scriptId = `script-${scriptName}`;
  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `../view/${scriptName}.js`;
    document.body.appendChild(script);
  }
}

// Fungsi untuk mengatur konten main berdasarkan route
function loadContent(route) {
  const mainContent = document.getElementById('dynamicContent');
  mainContent.innerHTML = ''; // Kosongkan konten sebelumnya
  const scriptName = routes[route] || 'notfound';
  loadScript(scriptName);
}

// Fungsi untuk mengelola navigasi
function handleNavigation(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const route = href.startsWith('#') ? href.slice(1) : '/';
  window.history.pushState({}, '', `#${route}`);
  loadContent(route);
}

// Inisialisasi router
function initRouter() {
  // Atur event listener pada link navigasi
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Muat konten awal berdasarkan URL
  const initialRoute = window.location.hash.slice(1) || '/';
  loadContent(initialRoute);

  // Atur event listener untuk mengelola navigasi kembali
  window.addEventListener('popstate', () => {
    const route = window.location.hash.slice(1);
    loadContent(route);
  });
}

// Panggil fungsi initRouter saat halaman dimuat
document.addEventListener('DOMContentLoaded', initRouter);