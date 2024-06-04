
document.addEventListener("DOMContentLoaded", function() {
    const dynamicContent = document.getElementById('dynamicContent');

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../styles/home.css';

    dynamicContent.innerHTML = `
    <main>
        <div class="content">
            <div class="content-description">
                <h1 class="title">Website Pemantauan</h1>
                <h2 class="title">Bencana Banjir</h2>
                <p>Pada Wilayah Kota Jakarta</p>
                <a href="../scripts/forum.html">Forum</a>
            </div>
            <div class="content-image">
                <img src="../images/weather.png" alt="Weather" />
            </div>
        </div>
        <div class="main_content">
            <div class="grafik">
            </div>
            <div class="education_one">
                <h1>Kapan Banjir Terburuk di Jakarta Terjadi?</h1>
                <p>Banjir terparah yang melanda Jakarta terjadi pada bulan Januari 2020...</p>
            </div>
        </div>
        <div class="main_education">
            <h1>Mengapa Kota Jakarta Sering Terjadi Banjir?</h1>
            <p>Banjir terparah yang melanda Jakarta terjadi pada bulan Januari 2020...</p>
            <a href="../scripts/education.html">Education</a>
        </div>
        <div class="indicator_info">
            <h1>Faktor Penyebab Banjir</h1>
            <h2>di Wilayah Jakarta</h2>
        </div>
        <div class="last_content">
            <h1>Bagikan Informasi Terkini Mengenai Titik Banjir Jakarta pada Forum Diskusi</h1>
            <a href="../scripts/forum.html">Forum</a>
        </div>
    </main>
    `;
});