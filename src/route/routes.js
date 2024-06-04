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
  const scriptId = `${scriptName}`;
  // Hapus script lama jika sudah ada
  const existingScript = document.getElementById(scriptId);
  if (existingScript) {
    document.body.removeChild(existingScript);
  }

  // Buat dan tambahkan script baru
  const script = document.createElement('script');
  script.id = scriptId;
  script.src = `../view/${scriptName}.js`;
  document.body.appendChild(script);
}


// Fungsi untuk mengatur konten main berdasarkan route
function loadContent(route) {
  const mainContent = document.getElementById('dynamicContent');
  const scriptName = routes[route] || 'notfound';
  loadScript(scriptName);
}


// Fungsi untuk mengelola navigasi
function handleNavigation(event) {
  event.preventDefault();
  const href = event.target.getAttribute('href');
  const route = href.slice(1); // Langsung gunakan href karena sudah sesuai dengan route yang diinginkan
  window.history.pushState({}, '', `${route}`); // Tambahkan # untuk konsistensi pada URL
  loadContent(route);
}

// Inisialisasi router
function initRouter() {
  // Atur event listener pada link navigasi
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Muat konten awal berdasarkan URL
  const initialRoute = window.location.slice(1) || '/';
  console.log(initialRoute);
  loadContent(initialRoute);

  // Atur event listener untuk mengelola navigasi kembali
  window.addEventListener('popstate', () => {
    const route = window.location.hash.slice(1);
    loadContent(route);
  });
}

initRouter();
