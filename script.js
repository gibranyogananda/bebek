/* =========================================================
   DATA MENU
========================================================= */

const dataMenu = {

    bebek: {
        judul: "Menu Bebek",
        poster: "assets/menu-bebek.png",

        items: [
            {
                nama: "Bebek",
                harga: "Lihat Poster"
            },
            {
                nama: "Bebek Gongso",
                harga: "Lihat Poster"
            },
            {
                nama: "Bebek Goreng",
                harga: "Lihat Poster"
            }
        ]
    },


    ayam: {
        judul: "Menu Ayam",
        poster: "assets/menu-ayam.png",

        items: [
            {
                nama: "Ayam",
                harga: "Lihat Poster"
            },
            {
                nama: "Ayam Gongso",
                harga: "Lihat Poster"
            },
            {
                nama: "Ayam Goreng",
                harga: "Lihat Poster"
            }
        ]
    },


    lainnya: {
        judul: "Menu Lain",
        poster: "assets/menu-lain.png",

        items: [
            {
                nama: "Menu Lainnya",
                harga: "Lihat Poster"
            },
            {
                nama: "Seafood",
                harga: "Lihat Poster"
            }
        ]
    },


    coffee: {
        judul: "Coffee",
        poster: "assets/menu-coffee.png",

        items: [
            {
                nama: "Coffee",
                harga: "Lihat Poster"
            },
            {
                nama: "Aneka Coffee",
                harga: "Lihat Poster"
            }
        ]
    },


    camilan: {
        judul: "Camilan",
        poster: "assets/menu-camilan.png",

        items: [
            {
                nama: "Camilan",
                harga: "Lihat Poster"
            },
            {
                nama: "Aneka Camilan",
                harga: "Lihat Poster"
            }
        ]
    },


    minuman: {
        judul: "Minuman",
        poster: "assets/menu-minuman-1.png",

        items: [
            {
                nama: "Minuman",
                harga: "Lihat Poster"
            },
            {
                nama: "Aneka Minuman",
                harga: "Lihat Poster"
            }
        ]
    }

};


/* =========================================================
   TAMPILKAN MENU
========================================================= */

function tampilkanMenu(kategori, tombol) {

    const data = dataMenu[kategori];

    if (!data) {
        return;
    }


    /* Judul */

    document.getElementById("judulKategori").textContent =
        data.judul;


    /* Poster */

    const poster = document.getElementById("posterMenu");

    poster.src = data.poster;
    poster.alt = data.judul;


    /* Daftar */

    const daftar = document.getElementById("daftarMenu");

    daftar.innerHTML = "";


    data.items.forEach(function(item) {

        const div = document.createElement("div");

        div.className = "menu-item";

        div.innerHTML = `
            <span class="menu-name">
                ${item.nama}
            </span>

            <span class="menu-price">
                ${item.harga}
            </span>
        `;

        daftar.appendChild(div);

    });


    /* Active kategori */

    document.querySelectorAll(".menu-category").forEach(function(button) {

        button.classList.remove("active");

    });


    tombol.classList.add("active");

}


/* =========================================================
   POSTER MENU DIPERBESAR
========================================================= */

function perbesarPosterMenu() {

    const poster = document.getElementById("posterMenu");

    tampilkanPoster(
        poster.src,
        poster.alt
    );

}


/* =========================================================
   TAMPILKAN POSTER MODAL
========================================================= */

function tampilkanPoster(gambar, judul) {

    const modalImage =
        document.getElementById("posterModalImage");

    const modalTitle =
        document.getElementById("posterModalTitle");


    modalImage.src = gambar;

    modalImage.alt = judul;

    modalTitle.textContent = judul;


    const modalElement =
        document.getElementById("posterModal");


    const modal =
        bootstrap.Modal.getOrCreateInstance(modalElement);


    modal.show();

}


/* =========================================================
   MENU DEFAULT
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const tombolPertama =
        document.querySelector(".menu-category");

    tampilkanMenu(
        "bebek",
        tombolPertama
    );

});


/* =========================================================
   ACTIVE NAVBAR + SMOOTH SCROLL
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const navLinks =
        document.querySelectorAll(".navbar .nav-link");

    const sections =
        document.querySelectorAll("section[id]");


    /* Klik menu */

    navLinks.forEach(function(link) {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                event.preventDefault();


                const target =
                    document.querySelector(targetId);


                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }


                /* Tutup navbar mobile */

                const navbar =
                    document.getElementById("navbarNav");


                if (
                    navbar &&
                    navbar.classList.contains("show")
                ) {

                    bootstrap.Collapse
                        .getOrCreateInstance(navbar)
                        .hide();

                }

            }

        });

    });


    /* Active berdasarkan posisi scroll */

    function updateActiveNav() {

        let currentSection = "home";


        sections.forEach(function(section) {

            const sectionTop =
                section.offsetTop - 120;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(function(link) {

            link.classList.remove("active");


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add("active");

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav
    );


    updateActiveNav();

});


/* =========================================================
   CHART JS
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const canvas =
        document.getElementById("menuChart");


    if (!canvas) {
        return;
    }


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
                    label: "Jumlah",

                    data: [
                        5,
                        8,
                        9,
                        7,
                        17,
                        27
                    ],

                    borderWidth: 1
                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    ticks: {
                        stepSize: 5
                    }

                }

            }

        }

    });

});
