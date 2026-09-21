/* =========================================================
   BEBEK GONGSO KINANTHI
   WEB-JS FINAL
   TANPA FIREBASE / DATABASE
   ========================================================= */


/* =========================
   DATA MENU
   ========================= */

const menuData = [

    // BEBEK
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


    // AYAM
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


    // LAINNYA
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


    // COFFEE
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


    // CAMILAN
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


    // MINUMAN
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


/* =========================
   FOTO KATEGORI
   SESUAI FILE GITHUB KAMU
   ========================= */

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


/* =========================
   NAMA KATEGORI
   ========================= */

const categoryNames = {

    semua: "Semua Menu",
    bebek: "Bebek",
    ayam: "Ayam",
    lain: "Lainnya",
    coffee: "Coffee",
    camilan: "Camilan",
    minuman: "Minuman"

};


/* =========================
   ELEMENT HTML
   ========================= */

const menuContainer =
    document.getElementById("menuContainer");

const menuInfo =
    document.getElementById("menuInfo");

const menuImageContainer =
    document.getElementById("menuImageContainer");


/* =========================
   TAMPILKAN MENU
   ========================= */

function tampilkanMenu(category) {

    if (!menuContainer) {
        return;
    }


    let dataMenu;


    if (category === "semua") {

        dataMenu = menuData;

    } else {

        dataMenu = menuData.filter(function(menu) {

            return menu.category === category;

        });

    }


    /* INFORMASI JUMLAH MENU */

    if (menuInfo) {

        menuInfo.innerHTML = `
            <h4 class="fw-bold mb-1">
                ${categoryNames[category]}
            </h4>

            <p class="text-muted mb-0">
                ${dataMenu.length} pilihan menu
            </p>
        `;

    }


    /* FOTO KATEGORI */

    if (menuImageContainer) {

        if (category === "semua") {

            menuImageContainer.innerHTML = "";

        } else {

            const images =
                categoryImages[category] || [];

            menuImageContainer.innerHTML =
                images.map(function(image) {

                    return `
                        <div class="text-center mb-3">

                            <img
                                src="${image}"
                                alt="${categoryNames[category]}"
                                class="img-fluid rounded shadow-sm menu-category-image">

                        </div>
                    `;

                }).join("");

        }

    }


    /* DAFTAR MENU */

    menuContainer.innerHTML =
        dataMenu.map(function(menu) {

            return `
                <div class="col-md-6 col-lg-4">

                    <div class="card h-100 border-0 shadow-sm menu-card">

                        <div class="card-body">

                            <div class="d-flex justify-content-between align-items-start gap-2">

                                <h5 class="fw-bold mb-2">
                                    ${menu.name}
                                </h5>

                                <span class="fw-bold text-warning text-nowrap">
                                    ${menu.price}
                                </span>

                            </div>

                            <p class="text-muted small mb-0">
                                Bebek Gongso Kinanthi
                            </p>

                        </div>

                    </div>

                </div>
            `;

        }).join("");

}


/* =========================
   FILTER KATEGORI
   ========================= */

const filterButtons =
    document.querySelectorAll(".menu-filter");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* hapus active */

        filterButtons.forEach(function(btn) {

            btn.classList.remove("active");

        });


        /* aktifkan tombol yang diklik */

        this.classList.add("active");


        /* ambil kategori */

        const category =
            this.getAttribute("data-category");


        /* tampilkan menu */

        tampilkanMenu(category);


        /* scroll ke bagian menu */

        const menuSection =
            document.getElementById("menu");

        if (menuSection) {

            menuSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================
   CHART JS
   ========================= */

function buatChart() {

    const canvas =
        document.getElementById("menuChart");

    if (!canvas || typeof Chart === "undefined") {
        return;
    }


    const jumlahBebek =
        menuData.filter(menu =>
            menu.category === "bebek"
        ).length;

    const jumlahAyam =
        menuData.filter(menu =>
            menu.category === "ayam"
        ).length;

    const jumlahLain =
        menuData.filter(menu =>
            menu.category === "lain"
        ).length;

    const jumlahCoffee =
        menuData.filter(menu =>
            menu.category === "coffee"
        ).length;

    const jumlahCamilan =
        menuData.filter(menu =>
            menu.category === "camilan"
        ).length;

    const jumlahMinuman =
        menuData.filter(menu =>
            menu.category === "minuman"
        ).length;


    new Chart(canvas, {

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
                        jumlahBebek,
                        jumlahAyam,
                        jumlahLain,
                        jumlahCoffee,
                        jumlahCamilan,
                        jumlahMinuman
                    ],

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

            }

        }

    });

}


/* =========================
   REVIEW
   TANPA DATABASE
   MENGGUNAKAN LOCAL STORAGE
   ========================= */

const reviewDefault = [

    {
        name: "Pelanggan",
        rating: 5,
        message: "Makanannya enak dan tempatnya nyaman."
    },

    {
        name: "Pelanggan",
        rating: 5,
        message: "Bebek gongsonya enak dan cocok untuk makan bersama."
    }

];


function ambilReview() {

    const data =
        localStorage.getItem("reviewBebekGongso");

    if (!data) {

        return reviewDefault;

    }

    try {

        return JSON.parse(data);

    } catch (error) {

        return reviewDefault;

    }

}


function simpanReview(data) {

    localStorage.setItem(
        "reviewBebekGongso",
        JSON.stringify(data)
    );

}


function tampilkanReview() {

    const container =
        document.getElementById("reviewContainer");

    if (!container) {
        return;
    }


    const reviews =
        ambilReview();


    container.innerHTML =
        reviews.map(function(review) {

            const stars =
                "★".repeat(review.rating) +
                "☆".repeat(5 - review.rating);


            return `
                <div class="col-md-6">

                    <div class="card border-0 shadow-sm h-100">

                        <div class="card-body p-4">

                            <h5 class="fw-bold">
                                ${review.name}
                            </h5>

                            <div class="text-warning mb-2">
                                ${stars}
                            </div>

                            <p class="text-muted mb-0">
                                ${review.message}
                            </p>

                        </div>

                    </div>

                </div>
            `;

        }).join("");

}


/* =========================
   FORM REVIEW
   ========================= */

const reviewForm =
    document.getElementById("reviewForm");


if (reviewForm) {

    reviewForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("reviewName").value.trim();

        const rating =
            Number(
                document.getElementById("reviewRating").value
            );

        const message =
            document.getElementById("reviewMessage").value.trim();

        const status =
            document.getElementById("reviewStatus");


        if (!name || !message) {

            status.innerHTML = `
                <span class="text-danger">
                    Nama dan pesan harus diisi.
                </span>
            `;

            return;

        }


        const reviews =
            ambilReview();


        reviews.unshift({

            name: name,

            rating: rating,

            message: message

        });


        simpanReview(reviews);

        tampilkanReview();


        reviewForm.reset();


        status.innerHTML = `
            <span class="text-success">
                Review berhasil ditambahkan!
            </span>
        `;


        setTimeout(function() {

            status.innerHTML = "";

        }, 3000);

    });

}


/* =========================
   AUTOSCROLL NAVBAR
   ========================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (!target) {
            return;
        }


        event.preventDefault();


        target.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    });

});


/* =========================
   JALANKAN SAAT HALAMAN SIAP
   ========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        tampilkanMenu("semua");

        tampilkanReview();

        buatChart();

    }
);
