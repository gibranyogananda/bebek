// ======================================================
// DATA MENU
// Data lokal digunakan sebagai tampilan awal.
// Nantinya dapat dihubungkan ke Firestore.
// ======================================================

const menuData = [
    // =========================
    // BEBEK
    // =========================
    { name: "Bebek Goreng", price: "Rp27.000", category: "bebek" },
    { name: "Bebek Kremes", price: "Rp30.000", category: "bebek" },
    { name: "Bebek Gongso", price: "Rp30.000", category: "bebek" },
    { name: "Bebek Lombok Ijo", price: "Rp32.000", category: "bebek" },
    { name: "Bebek Bacem", price: "Rp32.000", category: "bebek" },
    { name: "Kepala Bebek Goreng", price: "Rp15.000", category: "bebek" },
    { name: "Kepala Bebek Gongso", price: "Rp18.000", category: "bebek" },

    // =========================
    // AYAM
    // =========================
    { name: "Ayam Kampung Goreng", price: "Rp27.000", category: "ayam" },
    { name: "Ayam Kampung Kremes", price: "Rp30.000", category: "ayam" },
    { name: "Ayam Kampung Gongso", price: "Rp30.000", category: "ayam" },
    { name: "Ayam Kampung Lombok Ijo", price: "Rp32.000", category: "ayam" },
    { name: "Ayam Negri Goreng", price: "Rp16.000", category: "ayam" },
    { name: "Ayam Negri Kremes", price: "Rp20.000", category: "ayam" },
    { name: "Ayam Negri Gongso", price: "Rp22.000", category: "ayam" },
    { name: "Ayam Negri Lombok Ijo", price: "Rp22.000", category: "ayam" },

    // =========================
    // MENU LAINNYA
    // =========================
    { name: "Pepes Nila", price: "Rp30.000", category: "lain" },
    { name: "Nila Telur Asin", price: "Rp35.000", category: "lain" },
    { name: "Nila Crispy", price: "Rp30.000", category: "lain" },
    { name: "Nila Goreng", price: "Rp16.000", category: "lain" },
    { name: "Lele Goreng", price: "Rp12.000", category: "lain" },
    { name: "Sup Iga", price: "Rp38.000", category: "lain" },
    { name: "Kangkung Tumis/Ca", price: "Rp10.000", category: "lain" },
    { name: "Tauge Tumis/Ca", price: "Rp10.000", category: "lain" },
    { name: "Terong Goreng", price: "Rp7.000", category: "lain" },
    { name: "Pete", price: "Rp7.000", category: "lain" },
    { name: "Kol Goreng", price: "Rp5.000", category: "lain" },
    { name: "Tahu Goreng", price: "Rp2.000", category: "lain" },
    { name: "Tempe Goreng", price: "Rp2.000", category: "lain" },

    // =========================
    // COFFEE
    // =========================
    { name: "Kopi Susu Kinanthi Hot", price: "Rp22.000", category: "coffee" },
    { name: "Lime Coffee Hot", price: "Rp20.000", category: "coffee" },
    {
        name: "Kopi Susu Blueberry Hot/Ice",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Kopi Susu Caramel Hot/Ice",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Coffee Latte Hot/Ice",
        price: "Rp18.000 / Rp20.000",
        category: "coffee"
    },
    {
        name: "Americano Hot/Ice",
        price: "Rp15.000 / Rp17.000",
        category: "coffee"
    },

    // =========================
    // CAMILAN
    // =========================
    { name: "Mix Platter", price: "Rp25.000", category: "camilan" },
    { name: "Onion Ring", price: "Rp15.000", category: "camilan" },
    { name: "Tahu Cabai Garam", price: "Rp15.000", category: "camilan" },
    { name: "Tahu Tuna", price: "Rp15.000", category: "camilan" },
    { name: "Pisang Lumer", price: "Rp15.000", category: "camilan" },
    { name: "Kentang Goreng", price: "Rp15.000", category: "camilan" },
    { name: "Singkong Goreng", price: "Rp12.000", category: "camilan" },
    { name: "Mendoan", price: "Rp12.000", category: "camilan" },
    { name: "Cireng Goreng", price: "Rp10.000", category: "camilan" },
    { name: "Lumpia Goreng", price: "Rp15.000", category: "camilan" },

    // =========================
    // MINUMAN
    // =========================
    { name: "Jahe Geprek", price: "Rp10.000", category: "minuman" },
    { name: "Jahe Serai", price: "Rp12.000", category: "minuman" },
    { name: "Jahe Susu", price: "Rp12.000", category: "minuman" },
    { name: "Hot Coklat", price: "Rp15.000", category: "minuman" },
    { name: "Hot Matcha", price: "Rp20.000", category: "minuman" },
    { name: "Soda Gembira", price: "Rp12.000", category: "minuman" },
    { name: "Lemon Squash", price: "Rp12.000", category: "minuman" },
    { name: "Alpukat", price: "Rp14.000", category: "minuman" },
    { name: "Mangga", price: "Rp14.000", category: "minuman" },
    { name: "Es Teh Manis", price: "Rp6.000", category: "minuman" },
    { name: "Air Mineral", price: "Rp6.000", category: "minuman" }
];


// ======================================================
// DATA REVIEW
// ======================================================

const sampleReviews = [
    {
        name: "Pelanggan",
        rating: 5,
        message: "Tempatnya nyaman dan menunya banyak."
    },
    {
        name: "Pelanggan",
        rating: 5,
        message: "Bebek gongsonya enak, cocok untuk makan bersama."
    },
    {
        name: "Pelanggan",
        rating: 4,
        message: "Parkir luas dan ada banyak pilihan minuman."
    }
];


// ======================================================
// ELEMENT HTML
// ======================================================

const menuContainer = document.getElementById("menuContainer");
const reviewContainer = document.getElementById("reviewContainer");


// ======================================================
// FUNGSI MENAMPILKAN MENU
// ======================================================

function renderMenus(category = "semua") {

    const filtered = category === "semua"
        ? menuData
        : menuData.filter(item => item.category === category);

    menuContainer.innerHTML = filtered.map(item => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card menu-card shadow-sm">

                <div class="card-body p-4">

                    <div class="d-flex justify-content-between align-items-start gap-3">

                        <h5 class="fw-bold mb-2">
                            ${item.name}
                        </h5>

                        <span class="menu-price text-nowrap">
                            ${item.price}
                        </span>

                    </div>

                    <small class="text-muted">
                        Bebek Gongso Kinanthi
                    </small>

                </div>

            </div>
        </div>
    `).join("");
}


// ======================================================
// FUNGSI MENAMPILKAN REVIEW
// ======================================================

function renderReviews(data) {

    reviewContainer.innerHTML = data.map(item => {

        const rating = Number(item.rating) || 5;

        return `
            <div class="col-12">

                <div class="card border-0 shadow-sm">

                    <div class="card-body">

                        <div class="d-flex justify-content-between gap-3">

                            <h5 class="fw-bold mb-1">
                                ${item.name}
                            </h5>

                            <span class="text-warning">
                                ${"★".repeat(rating)}
                                ${"☆".repeat(5 - rating)}
                            </span>

                        </div>

                        <p class="mb-0 text-muted">
                            ${item.message}
                        </p>

                    </div>

                </div>

            </div>
        `;
    }).join("");
}


// ======================================================
// JAVASCRIPT FEATURE 1
// MENU ACTIVE
// Mengubah tombol kategori yang sedang dipilih
// ======================================================

document.querySelectorAll(".menu-filter").forEach(button => {

    button.addEventListener("click", function () {

        // Menghapus status active dari semua tombol
        document.querySelectorAll(".menu-filter").forEach(btn => {

            btn.classList.remove("active");

            btn.classList.remove("btn-hijau");

            btn.classList.add("btn-outline-success");

        });


        // Memberikan status active pada tombol yang dipilih
        this.classList.add("active");

        this.classList.remove("btn-outline-success");

        this.classList.add("btn-hijau");


        // Menampilkan menu berdasarkan kategori
        renderMenus(this.dataset.category);

    });

});


// ======================================================
// JAVASCRIPT FEATURE 2
// AUTOSCROLL SECTION
// Perpindahan section menggunakan JavaScript
// ======================================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        // Jika section tidak ditemukan
        if (!target) {
            return;
        }

        event.preventDefault();


        // Mengambil tinggi navbar
        const navbar = document.querySelector(".navbar");

        const navbarHeight = navbar
            ? navbar.offsetHeight
            : 0;


        // Menghitung posisi section
        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight;


        // Scroll dengan animasi
        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });


        // Menutup menu navbar pada perangkat mobile
        const navbarCollapse =
            document.querySelector(".navbar-collapse");


        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const collapse =
                bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                );

            collapse.hide();

        }

    });

});


// ======================================================
// JAVASCRIPT FEATURE 3
// CHARTJS
// Grafik jumlah menu berdasarkan kategori
// ======================================================

const chartElement = document.getElementById("menuChart");

if (chartElement) {

    const menuChart = new Chart(chartElement, {

        type: "bar",

        data: {

            labels: [
                "Bebek",
                "Ayam",
                "Lainnya",
                "Coffee",
                "Camilan",
                "Minuman"
            ],

            datasets: [

                {
                    label: "Jumlah Menu",

                    data: [
                        7,
                        8,
                        13,
                        6,
                        10,
                        11
                    ]
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {
                        stepSize: 1
                    }

                }

            }

        }

    });

}


// ======================================================
// TAMPILAN AWAL
// ======================================================

renderMenus();

renderReviews(sampleReviews);


// ======================================================
// FIREBASE / FIRESTORE
// Bagian database.
// Untuk Latihan 4 masih boleh menggunakan data statis.
// ======================================================

const firebaseConfig = {

    apiKey: "ISI_API_KEY",

    authDomain: "ISI_PROJECT_ID.firebaseapp.com",

    projectId: "ISI_PROJECT_ID",

    storageBucket: "ISI_PROJECT_ID.appspot.com",

    messagingSenderId: "ISI_SENDER_ID",

    appId: "ISI_APP_ID"

};


const firebaseSudahDiisi =
    !firebaseConfig.apiKey.startsWith("ISI_");


if (firebaseSudahDiisi) {

    import(
        "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
    )

    .then(async ({ initializeApp }) => {

        const {
            getFirestore,
            collection,
            getDocs,
            addDoc,
            serverTimestamp,
            query,
            orderBy
        } = await import(
            "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
        );


        const app = initializeApp(firebaseConfig);

        const db = getFirestore(app);


        // ==================================================
        // DATABASE SECTION 1
        // MENU
        // ==================================================

        try {

            const snapshot =
                await getDocs(
                    collection(db, "menus")
                );


            if (!snapshot.empty) {

                const databaseMenus =
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));


                menuData.length = 0;


                databaseMenus.forEach(item => {

                    menuData.push(item);

                });


                renderMenus();

            }

        } catch (error) {

            console.log(
                "Menu Firestore belum tersedia:",
                error
            );

        }


        // ==================================================
        // DATABASE SECTION 2
        // REVIEW
        // ==================================================

        try {

            const reviewQuery =
                query(
                    collection(db, "reviews"),
                    orderBy("createdAt", "desc")
                );


            const snapshot =
                await getDocs(reviewQuery);


            if (!snapshot.empty) {

                renderReviews(
                    snapshot.docs.map(
                        doc => doc.data()
                    )
                );

            }

        } catch (error) {

            console.log(
                "Review Firestore belum tersedia:",
                error
            );

        }


        // ==================================================
        // FORM REVIEW
        // ==================================================

        const reviewForm =
            document.getElementById("reviewForm");


        if (reviewForm) {

            reviewForm.addEventListener(
                "submit",
                async function (event) {

                    event.preventDefault();


                    const name =
                        document
                            .getElementById("reviewName")
                            .value
                            .trim();


                    const rating =
                        Number(
                            document
                                .getElementById("reviewRating")
                                .value
                        );


                    const message =
                        document
                            .getElementById("reviewMessage")
                            .value
                            .trim();


                    const status =
                        document.getElementById(
                            "reviewStatus"
                        );


                    try {

                        await addDoc(
                            collection(db, "reviews"),
                            {

                                name: name,

                                rating: rating,

                                message: message,

                                createdAt:
                                    serverTimestamp()

                            }
                        );


                        status.className =
                            "small mt-3 text-success";


                        status.textContent =
                            "Review berhasil dikirim.";


                        event.target.reset();


                    } catch (error) {

                        status.className =
                            "small mt-3 text-danger";


                        status.textContent =
                            "Review gagal dikirim. Cek konfigurasi Firestore.";

                    }

                }
            );

        }

    })

    .catch(error => {

        console.log(
            "Firebase belum aktif:",
            error
        );

    });

} else {

    const reviewStatus =
        document.getElementById("reviewStatus");


    if (reviewStatus) {

        reviewStatus.className =
            "small mt-3 text-muted";


        reviewStatus.textContent =
            "Mode demo aktif. Isi konfigurasi Firebase pada script.js agar review tersimpan ke database.";

    }

}
