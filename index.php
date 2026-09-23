<?php
include "koneksi.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $nama = $_POST["nama"] ?? "";
    $email = $_POST["email"] ?? "";
    $pesan = $_POST["pesan"] ?? "";

    $stmt = mysqli_prepare(
        $conn,
        "INSERT INTO contacts (nama, email, pesan) VALUES (?, ?, ?)"
    );

    mysqli_stmt_bind_param(
        $stmt,
        "sss",
        $nama,
        $email,
        $pesan
    );

    mysqli_stmt_execute($stmt);
    mysqli_stmt_close($stmt);

    $pesanBerhasil = "Pesan berhasil disimpan.";
}

$query = mysqli_query($conn, "SELECT * FROM services LIMIT 1");
$service = mysqli_fetch_assoc($query);

$queryStatistik = mysqli_query($conn, "SELECT * FROM statistik");
$statistik = [];

while ($row = mysqli_fetch_assoc($queryStatistik)) {
    $statistik[] = $row;
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="Bebek Gongso Kinanthi - Kuliner keluarga di Jomboran, Klaten">

    <title>Bebek Gongso Kinanthi | Makan Enak, Kumpul Makin Asik</title>

    <!-- Bootstrap -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet">

    <!-- Bootstrap Icons -->
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>

<!-- ================= NAVBAR ================= -->
<nav class="navbar navbar-expand-lg navbar-dark sticky-top bg-hijau shadow-sm">

    <div class="container">

        <a class="navbar-brand d-flex align-items-center" href="#home">
            <img
                src="assets/logo.png"
                alt="Logo Bebek Gongso Kinanthi"
                class="navbar-logo">

            <span class="brand-text">
                Bebek Gongso Kinanthi
            </span>
        </a>

        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav">

            <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

            <ul class="navbar-nav ms-auto">

                <li class="nav-item">
                    <a class="nav-link active" href="#home">
                        Home
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#menu">
                        Menu
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#promo">
                        Promo
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#fasilitas">
                        Fasilitas & Area
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#paket">
                        Paket
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#tentang">
                        Tentang
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#kontak">
                        Kontak
                    </a>
                </li>

            </ul>

        </div>
    </div>
</nav>


<!-- ================= HOME ================= -->
<section id="home" class="hero-section">

    <div class="container">

        <div class="row align-items-center g-5">

            <div class="col-lg-7">

                <span class="hero-badge">
                    Kuliner Klaten
                </span>

                <h1 class="hero-title">
                    Makan Enak,
                    <span>Kumpul Makin Asik</span>
                </h1>

                <p class="hero-text">
                    Nikmati berbagai pilihan menu mulai dari bebek, ayam,
                    ikan, camilan, coffee, minuman hingga menu lain nya di
                    Bebek Gongso Kinanthi.
                </p>

                <div class="hero-buttons">

                    <a href="#menu" class="btn btn-warning btn-lg">
                        <i class="bi bi-journal-text"></i>
                        Lihat Menu
                    </a>

                    <button
                        type="button"
                        onclick="pilihWhatsApp()"
                        class="btn btn-outline-light btn-lg">

                        <i class="bi bi-whatsapp"></i>
                        Pesan Sekarang

                    </button>

                    <a
                        href="https://app.grab.com/s/gfFHQzP0"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-success btn-lg">

                        <i class="bi bi-bag-check-fill"></i>
                        Pesan di GrabFood

                    </a>

                </div>

                <div class="hero-info">

                    <div>
                        <i class="bi bi-clock-fill"></i>
                        Setiap hari 11.00–21.00 WIB
                    </div>

                    <div>
                        <i class="bi bi-geo-alt-fill"></i>
                        Jomboran, Klaten
                    </div>

                </div>

            </div>


            <div class="col-lg-5">

                <div class="hero-card">

                    <img
                        src="assets/logo.png"
                        alt="Bebek Gongso Kinanthi"
                        class="hero-logo">

                    <h3>
                        Bebek Gongso Kinanthi
                    </h3>

                    <p>
                        Tempat makan, nongkrong,
                        dan berkumpul bersama.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= MENU ================= -->
<section id="menu" class="section-padding menu-section">

    <div class="container">

        <div class="section-heading text-center">

            <span class="section-label">
                PILIHAN MENU
            </span>

            <h2>
                Menu Bebek Gongso Kinanthi
            </h2>

            <p>
                Klik kategori menu untuk melihat
                daftar makanan, harga, dan posternya.
            </p>

        </div>


        <div class="menu-buttons">

            <button
                type="button"
                class="menu-btn active"
                onclick="showMenu('bebek', this)">
                🦆 Bebek
            </button>

            <button
                type="button"
                class="menu-btn"
                onclick="showMenu('ayam', this)">
                🍗 Ayam
            </button>

            <button
                type="button"
                class="menu-btn"
                onclick="showMenu('lain', this)">
                🍽️ Menu Lain
            </button>

            <button
                type="button"
                class="menu-btn"
                onclick="showMenu('coffee', this)">
                ☕ Coffee
            </button>

            <button
                type="button"
                class="menu-btn"
                onclick="showMenu('camilan', this)">
                🍟 Camilan
            </button>

            <button
                type="button"
                class="menu-btn"
                onclick="showMenu('minuman', this)">
                🥤 Minuman
            </button>

        </div>


        <div id="menuContent"></div>

    </div>

</section>


<!-- ================= PROMO ================= -->
<section id="promo" class="section-padding promo-section">

    <div class="container">

        <div class="section-heading text-center">

            <span class="section-label">
                PROMO
            </span>

            <h2>
                Promo & Keuntungan
            </h2>

        </div>


        <div class="row g-4">

            <div class="col-md-6">

                <div class="promo-card">

                    <div class="promo-icon">
                        <i class="bi bi-instagram"></i>
                    </div>

                    <h3>
                        Diskon 5%
                    </h3>

                    <p>
                        Dapatkan diskon 5% untuk pembelian
                        semua menu.

                        <br><br>

                        Caranya: Follow
                        <strong>@bebekgongsokinanthi</strong>,
                        lalu upload Instagram Story dan
                        mention akun kami.
                    </p>

                    <a
                        href="https://instagram.com/bebekgongsokinanthi"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-outline-success">

                        <i class="bi bi-instagram"></i>
                        Instagram

                    </a>

                </div>

            </div>


            <div class="col-md-6">

                <div class="promo-card">

                    <div class="promo-icon">
                        <i class="bi bi-star-fill"></i>
                    </div>

                    <h3>
                        Free Ice Cream
                    </h3>

                    <p>
                        Berikan review di Google dan dapatkan
                        free ice cream.

                        <br><br>

                        Ketentuan:
                        <strong>1 akun = 1 ice cream</strong>.
                    </p>

                    <a
                        href="https://maps.app.goo.gl/vMV2y6fyjAmCsqfk8"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-warning">

                        <i class="bi bi-google"></i>
                        Beri Review

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= FASILITAS ================= -->
<section id="fasilitas" class="section-padding fasilitas-section">

    <div class="container">

        <div class="section-heading text-center">

            <span class="section-label">
                FASILITAS & AREA
            </span>

            <h2>
                Fasilitas & Area
            </h2>

            <p>
                Nikmati berbagai fasilitas dan area
                yang tersedia untuk membuat waktu
                berkumpul semakin nyaman.
            </p>

        </div>


        <div class="row g-4">

            <!-- Indoor Outdoor -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🏠
                    </div>

                    <h3>
                        Indoor & Outdoor
                    </h3>

                    <p>
                        Tersedia area indoor dan outdoor
                        yang nyaman untuk makan dan berkumpul.
                    </p>

                </div>

            </div>


            <!-- VIP -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🔐
                    </div>

                    <h3>
                        VIP / Private Room
                    </h3>

                    <p>
                        Area VIP atau private room untuk
                        suasana yang lebih privat dan nyaman.
                    </p>

                </div>

            </div>


            <!-- Karaoke -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🎤
                    </div>

                    <h3>
                        Free Karaoke
                    </h3>

                    <p>
                        Nikmati karaoke gratis sambil makan
                        dan berkumpul bersama.
                    </p>

                </div>

            </div>


            <!-- Parkir -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🅿️
                    </div>

                    <h3>
                        Parkir Luas
                    </h3>

                    <p>
                        Area parkir luas untuk motor,
                        mobil, Elf, hingga bus besar.
                    </p>

                </div>

            </div>


            <!-- Acara -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🎉
                    </div>

                    <h3>
                        Acara Besar/Kecil
                    </h3>

                    <p>
                        Bisa digunakan untuk acara kecil
                        maupun besar, gathering, dan berbagai kegiatan.
                    </p>

                </div>

            </div>


            <!-- Refill -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🍚
                    </div>

                    <h3>
                        Free Refill
                    </h3>

                    <p>
                        Free refill nasi dan lalapan
                        sepuasnya.
                    </p>

                </div>

            </div>


            <!-- Nasi Box -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🍱
                    </div>

                    <h3>
                        Nasi Box
                    </h3>

                    <p>
                        Melayani kebutuhan nasi box
                        untuk berbagai acara.
                    </p>

                </div>

            </div>


            <!-- Prasmanan -->
            <div class="col-md-6 col-lg-3">

                <div class="facility-card">

                    <div class="facility-emoji">
                        🍽️
                    </div>

                    <h3>
                        Prasmanan
                    </h3>

                    <p>
                        Tersedia layanan prasmanan
                        untuk berbagai acara dan gathering.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= PAKET ================= -->
<section id="paket" class="section-padding package-section">

    <div class="container">

        <div class="section-heading text-center">

            <span class="section-label">
                PAKET
            </span>

            <h2>
                Nasi Box & Prasmanan
            </h2>

            <p>
                Cocok untuk acara keluarga, rapat,
                gathering, dan berbagai acara lainnya.
            </p>

        </div>


        <div class="row g-4">

            <!-- Nasi Box -->
            <div class="col-lg-6">

                <div class="package-card">

                    <div class="package-image-wrapper">

                        <img
                            src="assets/nasi-box.png"
                            alt="Nasi Box Bebek Gongso Kinanthi"
                            class="package-image"
                            onclick="openImage('assets/nasi-box.png')">

                        <div class="image-hint">
                            <i class="bi bi-zoom-in"></i>
                            Klik untuk memperbesar
                        </div>

                    </div>

                    <div class="package-content">

                        <h3>
                            Nasi Box
                        </h3>

                        <p>
                            Pilihan nasi box untuk kebutuhan
                            acara kecil maupun besar.
                        </p>

                    </div>

                </div>

            </div>


            <!-- Prasmanan -->
            <div class="col-lg-6">

                <div class="package-card">

                    <div class="package-image-wrapper">

                        <img
                            src="assets/menu-prasmanan.png"
                            alt="Prasmanan Bebek Gongso Kinanthi"
                            class="package-image"
                            onclick="openImage('assets/menu-prasmanan.png')">

                        <div class="image-hint">
                            <i class="bi bi-zoom-in"></i>
                            Klik untuk memperbesar
                        </div>

                    </div>

                    <div class="package-content">

                        <h3>
                            Prasmanan
                        </h3>

                        <p>
                            Layanan prasmanan untuk berbagai
                            acara dan gathering.
                        </p>

                    </div>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= TENTANG ================= -->
<section id="tentang" class="section-padding about-section">

    <div class="container">

        <div class="row g-5 align-items-center">

            <div class="col-lg-6">

                <span class="section-label">
                    TENTANG KAMI
                </span>

               <h2>
    <?php echo $service['judul']; ?>
</h2>

<p>
    <?php echo $service['deskripsi']; ?>
</p>

                <p>
                    Kami menyediakan berbagai pilihan menu
                    seperti bebek, ayam, ikan, camilan,
                    coffee, minuman, dan menu lain nya.
                </p>

                <p>
                    Selain bisa kulineran, pelanggan juga
                    dapat menikmati fasilitas karaoke,
                    area indoor, outdoor, serta VIP/private room.
                </p>

            </div>


            <div class="col-lg-6">

                <div class="about-chart-card">

                    <div class="chart-header">

                        <h3>
                            Jumlah Menu
                        </h3>

                        <p>
                            Data menu berdasarkan kategori
                        </p>

                    </div>

                    <div class="chart-wrapper">

                        <canvas id="menuChart"></canvas>

                    </div>

                    <p class="chart-note">
                        Data grafik saat ini menggunakan
                        data statis untuk kebutuhan website.
                    </p>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= KONTAK ================= -->
<section id="kontak" class="section-padding contact-section">

    <div class="container">

        <div class="section-heading text-center">

            <span class="section-label">
                KONTAK
            </span>

            <h2>
                Hubungi Kami
            </h2>

        </div>

        <!-- FORM KONTAK -->
<div class="row justify-content-center mt-4">

    <div class="col-lg-8">

        <div class="contact-form">

            <form method="POST" action="index.php">

                <div class="mb-3">

                    <label for="nama" class="form-label">
                        Nama
                    </label>

                    <input
                        type="text"
                        class="form-control"
                        id="nama"
                        name="nama"
                        placeholder="Masukkan nama"
                        required
                    >

                </div>


                <div class="mb-3">

                    <label for="email" class="form-label">
                        Email
                    </label>

                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        placeholder="Masukkan email"
                        required
                    >

                </div>


                <div class="mb-3">

                    <label for="pesan" class="form-label">
                        Pesan
                    </label>

                    <textarea
                        class="form-control"
                        id="pesan"
                        name="pesan"
                        rows="5"
                        placeholder="Tulis pesan kamu..."
                        required
                    ></textarea>

                </div>


                <button
                    type="submit"
                    class="btn btn-success"
                >
                    Kirim Pesan
                </button>

            </form>

        </div>

    </div>

</div>


        <div class="row g-4">

            <!-- Alamat -->
            <div class="col-md-6">

                <div class="contact-card">

                    <i class="bi bi-geo-alt-fill"></i>

                    <h3>
                        Alamat
                    </h3>

                    <p>
                        Krajan Jomboran, Klaten Tengah,
                        Klaten, Jawa Tengah 57418
                    </p>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Bebek%20Gongso%20Kinanthi%2C%20Krajan%20Jomboran%2C%20Klaten%20Tengah%2C%20Klaten%2C%20Jawa%20Tengah%2057418"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-outline-success">

                        <i class="bi bi-map-fill"></i>
                        Buka Lokasi di Google Maps

                    </a>

                </div>

            </div>


            <!-- Jam -->
            <div class="col-md-6">

                <div class="contact-card">

                    <i class="bi bi-clock-fill"></i>

                    <h3>
                        Jam Buka
                    </h3>

                    <p>
                        Setiap hari
                        <br>
                        11.00–21.00 WIB
                    </p>

                </div>

            </div>


            <!-- WhatsApp -->
            <div class="col-md-6">

                <div class="contact-card">

                    <i class="bi bi-whatsapp"></i>

                    <h3>
                        WhatsApp
                    </h3>

                    <p>
                        0812-2695-6567
                        <br>
                        0813-9869-925
                    </p>

                    <button
                        type="button"
                        onclick="pilihWhatsApp()"
                        class="btn btn-success">

                        <i class="bi bi-whatsapp"></i>
                        Chat WhatsApp

                    </button>

                </div>

            </div>


            <!-- Grab -->
            <div class="col-md-6">

                <div class="contact-card">

                    <i class="bi bi-bag-check-fill"></i>

                    <h3>
                        GrabFood
                    </h3>

                    <p>
                        Pesan makanan melalui GrabFood.
                    </p>

                    <a
                        href="https://app.grab.com/s/gfFHQzP0"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="btn btn-success">

                        <i class="bi bi-bag-check-fill"></i>
                        Buka GrabFood

                    </a>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- ================= FOOTER ================= -->
<footer class="footer">

    <div class="container text-center">

        <img
            src="assets/logo.png"
            alt="Bebek Gongso Kinanthi"
            class="footer-logo">

        <h3>
            Bebek Gongso Kinanthi
        </h3>

        <p>
            Makan Enak, Kumpul Makin Asik
        </p>


        <div class="footer-social">

            <a
                href="https://instagram.com/bebekgongsokinanthi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram">

                <i class="bi bi-instagram"></i>

            </a>

            <a
                href="https://app.grab.com/s/gfFHQzP0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GrabFood">

                <i class="bi bi-bag-check-fill"></i>

            </a>

            <button
                type="button"
                onclick="pilihWhatsApp()"
                aria-label="WhatsApp">

                <i class="bi bi-whatsapp"></i>

            </button>

        </div>


        <p class="footer-copy">
            © 2026 Bebek Gongso Kinanthi.
            All Rights Reserved.
        </p>

    </div>

</footer>


<!-- ================= MODAL GAMBAR ================= -->
<div
    id="imageModal"
    class="image-modal"
    onclick="closeImage(event)">

    <button
        type="button"
        class="modal-close"
        onclick="closeImage(event)">
        &times;
    </button>

    <img
        id="modalImage"
        src=""
        alt="Preview menu"
        class="modal-image"
        onclick="event.stopPropagation()">

</div>


<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
    const statistikData = <?php echo json_encode($statistik); ?>;
</script>

<!-- JavaScript -->
<script src="script.js"></script>

</body>
</html>
