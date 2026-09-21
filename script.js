/* =========================================================
   BEBEK GONGSO KINANTHI
   JavaScript - Web-JS
   Tanpa Database / Firebase
   ========================================================= */


/* =========================================================
   1. DATA MENU
   ========================================================= */

const menuData = [

    // ================= BEBEK =================
    {
        name: "Bebek Goreng",
        price: "Rp27.000",
        category: "bebek"
    },
    {
        name: "Bebek Kremes",
        price: "Rp30.000",
        category: "bebek"
    },
    {
        name: "Bebek Gongso",
        price: "Rp30.000",
        category: "bebek"
    },
    {
        name: "Bebek Lombok Ijo",
        price: "Rp32.000",
        category: "bebek"
    },
    {
        name: "Bebek Bacem",
        price: "Rp32.000",
        category: "bebek"
    },
    {
        name: "Kepala Bebek Goreng",
        price: "Rp15.000",
        category: "bebek"
    },
    {
        name: "Kepala Bebek Gongso",
        price: "Rp18.000",
        category: "bebek"
    },


    // ================= AYAM =================
    {
        name: "Ayam Kampung Goreng",
        price: "Rp27.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Kremes",
        price: "Rp30.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Gongso",
        price: "Rp30.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Lombok Ijo",
        price: "Rp32.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Goreng",
        price: "Rp16.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Kremes",
        price: "Rp20.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Gongso",
        price: "Rp22.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Lombok Ijo",
        price: "Rp22.000",
        category: "ayam"
    },


    // ================= LAINNYA =================
    {
        name: "Pepes Nila",
        price: "Rp30.000",
        category: "lain"
    },
    {
        name: "Nila Telur Asin",
        price: "Rp35.000",
        category: "lain"
    },
    {
        name: "Nila Crispy",
        price: "Rp30.000",
        category: "lain"
    },
    {
        name: "Nila Goreng",
        price: "Rp16.000",
        category: "lain"
    },
    {
        name: "Lele Goreng",
        price: "Rp12.000",
        category: "lain"
    },
    {
        name: "Sup Iga",
        price: "Rp38.000",
        category: "lain"
    },
    {
        name: "Kangkung Tumis / Ca",
        price: "Rp10.000",
        category: "lain"
    },
    {
        name: "Tauge Tumis / Ca",
        price: "Rp10.000",
        category: "lain"
    },
    {
        name: "Terong Goreng",
        price: "Rp7.000",
        category: "lain"
    },
    {
        name: "Pete",
        price: "Rp7.000",
        category: "lain"
    },
    {
        name: "Kol Goreng",
        price: "Rp5.000",
        category: "lain"
    },
    {
        name: "Tahu Goreng",
        price: "Rp2.000",
        category: "lain"
    },
    {
        name: "Tempe Goreng",
        price: "Rp2.000",
        category: "lain"
    },


    // ================= COFFEE =================
    {
        name: "Kopi Susu Kinanthi Hot",
        price: "Rp22.000",
        category: "coffee"
    },
    {
        name: "Lime Coffee Hot",
        price: "Rp20.000",
        category: "coffee"
    },
    {
        name: "Kopi Susu Blueberry Hot / Ice",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Kopi Susu Caramel Hot / Ice",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Coffee Latte Hot / Ice",
        price: "Rp18.000 / Rp20.000",
        category: "coffee"
    },
    {
        name: "Americano Hot / Ice",
        price: "Rp15.000 / Rp17.000",
        category: "coffee"
    },


    // ================= CAMILAN =================
    {
        name: "Mix Platter",
        price: "Rp25.000",
        category: "camilan"
    },
    {
        name: "Onion Ring",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Tahu Cabai Garam",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Tahu Tuna",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Pisang Lumer",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Kentang Goreng",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Singkong Goreng",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Mendoan",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Cireng Goreng",
        price: "Rp10.000",
        category: "camilan"
    },
    {
        name: "Lumpia Goreng",
        price: "Rp15.000",
        category: "camilan"
    },


    // ================= MINUMAN =================
    {
        name: "Jahe Geprek",
        price: "Rp10.000",
        category: "minuman"
    },
    {
        name: "Jahe Serai",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jahe Susu",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Hot Coklat",
        price: "Rp15.000",
        category: "minuman"
    },
    {
        name: "Hot Matcha",
        price: "Rp20.000",
        category: "minuman"
    },
    {
        name: "Soda Gembira",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Lemon Squash",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Alpukat",
        price: "Rp14.000",
        category: "minuman"
    },
    {
        name: "Mangga",
        price: "Rp14.000",
        category: "minuman"
    },
    {
        name: "Es Teh Manis",
        price: "Rp6.000",
        category: "minuman"
    },
    {
        name: "Air Mineral",
        price: "Rp6.000",
        category: "minuman"
    }

];


/* =========================================================
   2. FOTO SETIAP KATEGORI
   SESUAI STRUKTUR FOLDER GITHUB
   ========================================================= */

const categoryImages = {

    bebek: [
        "assets/menu-bebek.png"
    ],

    ayam: [
        "assets/Menu-ayam.png"
    ],

    lain: [
        "assets/menu-lain.png"
    ],

    coffee: [
        "assets/menu-coffee.png"
    ],

    camilan: [
        "assets/menu-camilan.png"
    ],

    minuman: [
        "assets/menu-minuman-1.png",
        "assets/menu-minuman-2.png"
    ]

};


/* =========================================================
   3. NAMA KATEGORI
   ========================================================= */

const categoryNames = {

    bebek: "Menu Bebek",

    ayam: "Menu Ayam",

    lain: "Menu Lainnya",

    coffee: "Menu Coffee",

    camilan: "Menu Camilan",

    minuman: "Menu Minuman"

};


/* =========================================================
   4. CONTOH REVIEW
   Disimpan sementara di browser menggunakan localStorage.
   Tidak menggunakan database.
   ========================================================= */

const defaultReviews = [

    {
        name: "Pelanggan",
        rating: 5,
        message: "Makanannya enak dan menunya banyak."
    },

    {
        name: "Pelanggan",
        rating: 5,
        message: "Bebek gongsonya enak dan cocok untuk makan bersama."
    }

];


/* =========================================================
   5. RENDER FOTO KATEGORI
   ========================================================= */

function renderCategoryImages(category) {

    const container =
        document.getElementById("categoryImageContainer");

    if (!container) {
        return;
    }

    // Kalau pilih semua, tampilkan tidak ada foto khusus
    if (category === "semua") {

        container.innerHTML = "";

        return;
    }


    const images = categoryImages[category];

    if (!images) {

        container.innerHTML = "";

        return;
    }


    let html = "";

    html += `
        <div class="text-center mb-3">
            <h3 class="fw-bold">
                ${categoryNames[category]}
            </h3>
        </div>

        <div class="row g-4 justify-content-center">
    `;


    images.forEach(function(image) {

        html += `
            <div class="col-md-8 col-lg-6">
                <div class="card border-0 shadow-sm overflow-hidden">
                    <img
                        src="${image}"
                        alt="${categoryNames[category]}"
                        class="img-fluid menu-category-image"
                        onerror="this.style.display='none'"
                    >
                </div>
            </div>
        `;

    });


    html += `
        </div>
    `;


    container.innerHTML = html;
}


/* =========================================================
   6. RENDER DAFTAR MENU
   ========================================================= */

function renderMenus(category = "semua") {

    const container =
        document.getElementById("menuContainer");

    if (!container) {
        return;
    }


    let filteredMenus;


    if (category === "semua") {

        filteredMenus = menuData;

    } else {

        filteredMenus = menuData.filter(function(menu) {

            return menu.category === category;

        });

    }


    container.innerHTML = "";


    filteredMenus.forEach(function(menu) {

        const card = document.createElement("div");

        card.className = "col-sm-6 col-lg-4";


        card.innerHTML = `
            <div class="card menu-card h-100 border-0 shadow-sm">

                <div class="card-body">

                    <span class="badge bg-success mb-2">
                        ${categoryNames[menu.category]}
                    </span>

                    <h5 class="card-title fw-bold">
                        ${menu.name}
                    </h5>

                    <p class="menu-price mb-0">
                        ${menu.price}
                    </p>

                </div>

            </div>
        `;


        container.appendChild(card);

    });


    renderCategoryImages(category);

}


/* =========================================================
   7. FILTER / TOMBOL KATEGORI
   ========================================================= */

const menuButtons =
    document.querySelectorAll(".menu-filter");


menuButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const category =
            this.getAttribute("data-category");


        // Mengubah tombol aktif
        menuButtons.forEach(function(btn) {

            btn.classList.remove("active");

            btn.classList.remove("btn-hijau");

            btn.classList.add("btn-outline-success");

        });


        this.classList.add("active");

        this.classList.remove("btn-outline-success");

        this.classList.add("btn-hijau");


        // Menampilkan menu
        renderMenus(category);


        // Scroll ke bagian menu
        const menuSection =
            document.getElementById("menu");


        if (menuSection) {

            const navbarHeight = 70;

            const position =
                menuSection.getBoundingClientRect().top
                + window.scrollY
                - navbarHeight;


            window.scrollTo({

                top: position,

                behavior: "smooth"

            });

        }

    });

});


/* =========================================================
   8. AUTOSCROLL NAVBAR
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");


        if (targetId === "#") {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        const navbarHeight = 70;


        const position =
            target.getBoundingClientRect().top
            + window.scrollY
            - navbarHeight;


        window.scrollTo({

            top: position,

            behavior: "smooth"

        });


        // Menutup navbar pada tampilan mobile
        const navbar =
            document.getElementById("navbarNav");


        if (
            navbar &&
            navbar.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbar);


            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* =========================================================
   9. DATA REVIEW LOCAL STORAGE
   ========================================================= */

function getReviews() {

    const saved =
        localStorage.getItem("bebekGongsoReviews");


    if (!saved) {

        return defaultReviews;

    }


    try {

        return JSON.parse(saved);

    } catch (error) {

        return defaultReviews;

    }

}


/* =========================================================
   10. SIMPAN REVIEW
   ========================================================= */

function saveReviews(reviews) {

    localStorage.setItem(
        "bebekGongsoReviews",
        JSON.stringify(reviews)
    );

}


/* =========================================================
   11. MEMBUAT BINTANG RATING
   ========================================================= */

function createStars(rating) {

    let stars = "";


    for (let i = 1; i <= 5; i++) {

        if (i <= rating) {

            stars += "★";

        } else {

            stars += "☆";

        }

    }


    return stars;

}


/* =========================================================
   12. RENDER REVIEW
   ========================================================= */

function renderReviews() {

    const container =
        document.getElementById("reviewContainer");


    if (!container) {
        return;
    }


    const reviews = getReviews();


    container.innerHTML = "";


    reviews.forEach(function(review) {

        const item =
            document.createElement("div");


        item.className =
            "card border-0 shadow-sm mb-3";


        item.innerHTML = `

            <div class="card-body">

                <div class="d-flex justify-content-between align-items-start">

                    <div>

                        <h5 class="fw-bold mb-1">
                            ${review.name}
                        </h5>

                        <div class="text-warning">
                            ${createStars(Number(review.rating))}
                        </div>

                    </div>

                </div>

                <p class="mb-0 mt-3">
                    ${review.message}
                </p>

            </div>

        `;


        container.appendChild(item);

    });

}


/* =========================================================
   13. FORM REVIEW
   ========================================================= */

const reviewForm =
    document.getElementById("reviewForm");


if (reviewForm) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("reviewName")
                .value
                .trim();


        const rating =
            document.getElementById("reviewRating")
                .value;


        const message =
            document.getElementById("reviewMessage")
                .value
                .trim();


        const status =
            document.getElementById("reviewStatus");


        // Validasi
        if (
            name === "" ||
            rating === "" ||
            message === ""
        ) {

            status.innerHTML = `
                <div class="alert alert-danger">
                    Semua data review harus diisi.
                </div>
            `;

            return;

        }


        // Ambil review lama
        const reviews = getReviews();


        // Tambahkan review baru
        reviews.unshift({

            name: name,

            rating: Number(rating),

            message: message

        });


        // Simpan ke browser
        saveReviews(reviews);


        // Render ulang
        renderReviews();


        // Pesan berhasil
        status.innerHTML = `
            <div class="alert alert-success">
                Review berhasil ditambahkan!
            </div>
        `;


        // Reset form
        reviewForm.reset();

    });

}


/* =========================================================
   14. CHART JS
   ========================================================= */

function createMenuChart() {

    const canvas =
        document.getElementById("menuChart");


    if (!canvas) {
        return;
    }


    // Menghitung jumlah menu setiap kategori
    const categories = [
        "bebek",
        "ayam",
        "lain",
        "coffee",
        "camilan",
        "minuman"
    ];


    const labels = [
        "Bebek",
        "Ayam",
        "Lainnya",
        "Coffee",
        "Camilan",
        "Minuman"
    ];


    const data = categories.map(function(category) {

        return menuData.filter(function(menu) {

            return menu.category === category;

        }).length;

    });


    new Chart(canvas, {

        type: "bar",

        data: {

            labels: labels,

            datasets: [

                {

                    label: "Jumlah Menu",

                    data: data,

                    borderWidth: 1

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {

                        stepSize: 1

                    }

                }

            },

            plugins: {

                legend: {

                    display: true

                }

            }

        }

    });

}


/* =========================================================
   15. JALANKAN PROGRAM
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    // Tampilkan semua menu saat pertama dibuka
    renderMenus("semua");


    // Tampilkan review
    renderReviews();


    // Buat chart
    createMenuChart();

});
