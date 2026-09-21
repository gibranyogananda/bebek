/* =====================================================
   BEBEK GONGSO KINANTHI
   WEB-JS
===================================================== */


/* =====================================================
   1. ACTIVE MENU NAVBAR
===================================================== */

const sections = document.querySelectorAll(
    "section[id]"
);

const navLinks = document.querySelectorAll(
    ".navbar .nav-link"
);


function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (
            target === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveMenu
);


/* =====================================================
   2. AUTOSCROLL NAVBAR
===================================================== */

navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                event.preventDefault();


                const targetSection =
                    document.querySelector(
                        targetId
                    );


                if (targetSection) {

                    targetSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }


                /* Tutup navbar ketika
                   digunakan di HP */

                const navbarCollapse =
                    document.querySelector(
                        ".navbar-collapse"
                    );


                if (
                    navbarCollapse &&
                    navbarCollapse.classList.contains(
                        "show"
                    )
                ) {

                    const bsCollapse =
                        bootstrap.Collapse.getInstance(
                            navbarCollapse
                        );

                    if (bsCollapse) {
                        bsCollapse.hide();
                    }

                }

            }

        }
    );

});


/* =====================================================
   3. DATA MENU
===================================================== */

const menuData = {


    /* =================================================
       BEBEK
    ================================================= */

    bebek: {

        title: "Menu Bebek",

        images: [
            "assets/menu-bebek.png"
        ],

        items: [

            ["Bebek Goreng", "Rp. 27.000"],

            ["Bebek Kremes", "Rp. 30.000"],

            ["Bebek Gongso", "Rp. 30.000"],

            ["Bebek Lombok Ijo", "Rp. 32.000"],

            ["Bebek Bacem", "Rp. 32.000"],

            ["Kepala Bebek Goreng", "Rp. 15.000"],

            ["Kepala Bebek Gongso", "Rp. 18.000"],

            ["Bebek Utuh Goreng", "Rp. 130.000"],

            ["Bebek Utuh Kremes", "Rp. 135.000"],

            ["Bebek Utuh Gongso", "Rp. 135.000"],

            ["Bebek Utuh Lombok Ijo", "Rp. 135.000"]

        ]

    },


    /* =================================================
       AYAM
    ================================================= */

    ayam: {

        title: "Menu Ayam",

        images: [
            "assets/menu-ayam.png"
        ],

        items: [

            ["Ayam Kampung Goreng", "Rp. 27.000"],

            ["Ayam Kampung Kremes", "Rp. 30.000"],

            ["Ayam Kampung Gongso", "Rp. 30.000"],

            ["Ayam Kampung Lombok Ijo", "Rp. 32.000"],

            ["Ayam Negri Goreng", "Rp. 16.000"],

            ["Ayam Negri Kremes", "Rp. 20.000"],

            ["Ayam Negri Gongso", "Rp. 22.000"],

            ["Ayam Negri Lombok Ijo", "Rp. 22.000"],

            ["Ayam Kampung Utuh Goreng", "Rp. 135.000"],

            ["Ayam Kampung Utuh Kremes", "Rp. 140.000"],

            ["Ayam Kampung Utuh Gongso", "Rp. 140.000"],

            ["Ayam Kampung Utuh Lombok Ijo", "Rp. 140.000"]

        ]

    },


    /* =================================================
       MENU LAIN
    ================================================= */

    lain: {

        title: "Menu Lain",

        images: [
            "assets/menu-lain.png"
        ],

        items: [

            ["Pepes Nila", "Rp. 30.000"],

            ["Nila Telur Asin", "Rp. 35.000"],

            ["Nila Crispy", "Rp. 30.000"],

            ["Nila Goreng", "Rp. 16.000"],

            ["Lele Goreng", "Rp. 12.000"],

            ["Sup Iga", "Rp. 38.000"],

            ["Kangkung (Tumis/Ca)", "Rp. 10.000"],

            ["Tauge (Tumis/Ca)", "Rp. 10.000"],

            ["Terong Goreng", "Rp. 7.000"],

            ["Pete", "Rp. 7.000"],

            ["Kol Goreng", "Rp. 5.000"],

            ["Tahu Goreng", "Rp. 2.000"],

            ["Tempe Goreng", "Rp. 2.000"],

            ["Mix Tahu Tempe", "Rp. 4.000"],

            ["Nasi Sambal Lalap", "Rp. 6.000"]

        ]

    },


    /* =================================================
       COFFEE
    ================================================= */

    coffee: {

        title: "Coffee Series",

        images: [
            "assets/menu-coffee.png"
        ],

        items: [

            ["Kopi Susu Kinanthi Hot", "Rp. 22.000"],

            ["Lime Coffee Hot", "Rp. 20.000"],

            [
                "Kopi Susu Blueberry Hot",
                "Rp. 20.000"
            ],

            [
                "Kopi Susu Blueberry Ice",
                "Rp. 22.000"
            ],

            [
                "Kopi Susu Caramel Hot",
                "Rp. 20.000"
            ],

            [
                "Kopi Susu Caramel Ice",
                "Rp. 22.000"
            ],

            [
                "Coffee Latte Hot",
                "Rp. 18.000"
            ],

            [
                "Coffee Latte Ice",
                "Rp. 20.000"
            ],

            [
                "Americano Hot",
                "Rp. 15.000"
            ],

            [
                "Americano Ice",
                "Rp. 17.000"
            ],

            [
                "Kopi Tubruk Hot",
                "Rp. 15.000"
            ]

        ]

    },


    /* =================================================
       CAMILAN
    ================================================= */

    camilan: {

        title: "Camilan",

        images: [
            "assets/menu-camilan.png"
        ],

        items: [

            [
                "Mix Platter (Sosis, Kentang, Nugget)",
                "Rp. 25.000"
            ],

            ["Onion Ring", "Rp. 15.000"],

            ["Tahu Cabai Garam", "Rp. 15.000"],

            ["Tahu Tuna", "Rp. 15.000"],

            ["Pisang Lumer", "Rp. 15.000"],

            ["Kentang Goreng", "Rp. 15.000"],

            ["Singkong Goreng", "Rp. 12.000"],

            ["Singkong Keju", "Rp. 15.000"],

            ["Singkong Coklat", "Rp. 15.000"],

            ["Mendoan", "Rp. 12.000"],

            ["Jamur Tepung", "Rp. 12.000"],

            ["Sosis Goreng", "Rp. 12.000"],

            ["Cireng Goreng", "Rp. 10.000"],

            ["Lumpia Goreng", "Rp. 15.000"],

            ["Pastel Goreng", "Rp. 15.000"],

            ["Jenang", "Rp. 10.000"],

            ["Krasikan", "Rp. 10.000"]

        ]

    },


    /* =================================================
       MINUMAN
    ================================================= */

    minuman: {

        title: "Minuman",

        images: [
            "assets/menu-minuman-1.png",
            "assets/menu-minuman-2.png"
        ],

        items: [

            /* HOT SERIES */

            ["Jahe Geprek", "Rp. 10.000"],

            ["Jahe Serai", "Rp. 12.000"],

            ["Jahe Susu", "Rp. 12.000"],

            ["Kopi Jahe", "Rp. 12.000"],

            ["Hot Coklat", "Rp. 15.000"],

            ["Hot Matcha", "Rp. 20.000"],

            ["Hot Taro", "Rp. 18.000"],


            /* ICE SQUASH */

            ["Soda Gembira", "Rp. 12.000"],

            ["Lemon Squash", "Rp. 12.000"],

            ["Orange Squash", "Rp. 12.000"],

            ["Jeruk Kelapa Muda", "Rp. 12.000"],

            ["Kelapa Muda Gelas", "Rp. 12.000"],

            [
                "Kelapa Muda Utuh Murni",
                "Rp. 14.000"
            ],

            [
                "Kelapa Muda Utuh + Gula",
                "Rp. 15.000"
            ],


            /* JUS */

            ["Alpukat", "Rp. 14.000"],

            ["Mangga", "Rp. 14.000"],

            ["Jambu", "Rp. 12.000"],

            ["Sirsak", "Rp. 12.000"],

            ["Melon", "Rp. 12.000"],

            ["Semangka", "Rp. 10.000"],


            /* MINUMAN REGULER */

            ["Teh Tawar", "Rp. 3.000"],

            ["Teh Manis Panas", "Rp. 5.000"],

            ["Esteh Manis", "Rp. 6.000"],

            ["Teh Leci", "Rp. 15.000"],

            ["Jeruk Panas", "Rp. 6.000"],

            ["Es Jeruk", "Rp. 7.000"],

            [
                "Lemon Tea Panas",
                "Rp. 6.000"
            ],

            ["Es Lemon Tea", "Rp. 7.000"],

            ["Milo Hot", "Rp. 8.000"],

            ["Milo Es", "Rp. 10.000"],

            ["Air Mineral", "Rp. 6.000"],

            [
                "Air Putih / Air Es",
                "Rp. 2.000"
            ],

            ["Es Batu", "Rp. 2.000"],


            /* MILKSHAKE */

            ["Milkshake Coklat", "Rp. 18.000"],

            [
                "Milkshake Strawberry",
                "Rp. 18.000"
            ],

            ["Milkshake Vanila", "Rp. 18.000"],


            /* MILKBLEND */

            ["Milkblend Coklat", "Rp. 18.000"],

            [
                "Milkblend Strawberry",
                "Rp. 18.000"
            ],

            ["Milkblend Taro", "Rp. 20.000"],

            ["Milkblend Matcha", "Rp. 22.000"]

        ]

    }

};


/* =====================================================
   4. ELEMENT MENU
===================================================== */

const menuButtons =
    document.querySelectorAll(".btn-menu");

const menuList =
    document.getElementById("menuList");

const menuTitle =
    document.getElementById("menuTitle");

const menuImages =
    document.getElementById("menuImages");


/* =====================================================
   5. MENAMPILKAN MENU
===================================================== */

function tampilkanMenu(category) {

    const menu = menuData[category];

    if (!menu) {
        return;
    }


    /* -----------------------------
       JUDUL
    ----------------------------- */

    menuTitle.textContent =
        menu.title;


    /* -----------------------------
       BERSIHKAN LIST
    ----------------------------- */

    menuList.innerHTML = "";


    /* -----------------------------
       BUAT LIST MENU
    ----------------------------- */

    menu.items.forEach((item) => {

        const row =
            document.createElement("div");

        row.className =
            "menu-row";


        const name =
            document.createElement("span");

        name.className =
            "menu-name";

        name.textContent =
            item[0];


        const dots =
            document.createElement("span");

        dots.className =
            "menu-dots";


        const price =
            document.createElement("span");

        price.className =
            "menu-price";

        price.textContent =
            item[1];


        row.appendChild(name);

        row.appendChild(dots);

        row.appendChild(price);

        menuList.appendChild(row);

    });


    /* -----------------------------
       BERSIHKAN FOTO
    ----------------------------- */

    menuImages.innerHTML = "";


    /* -----------------------------
       TAMPILKAN FOTO
    ----------------------------- */

    menu.images.forEach((image) => {

        const img =
            document.createElement("img");

        img.src = image;

        img.alt =
            menu.title;

        menuImages.appendChild(img);

    });

}


/* =====================================================
   6. KLIK KATEGORI
===================================================== */

menuButtons.forEach((button) => {

    button.addEventListener(
        "click",
        function() {


            /* Hapus active */

            menuButtons.forEach((btn) => {

                btn.classList.remove(
                    "active"
                );

            });


            /* Tambahkan active */

            this.classList.add(
                "active"
            );


            /* Ambil kategori */

            const category =
                this.getAttribute(
                    "data-menu"
                );


            /* Tampilkan */

            tampilkanMenu(
                category
            );

        }
    );

});


/* =====================================================
   7. CHART JS
===================================================== */

const chartElement =
    document.getElementById(
        "pendapatanChart"
    );


if (chartElement) {

    const ctx =
        chartElement.getContext(
            "2d"
        );


    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Senin",
                "Selasa",
                "Rabu",
                "Kamis",
                "Jumat",
                "Sabtu",
                "Minggu"
            ],

            datasets: [

                {

                    label:
                        "Pendapatan (Juta Rupiah)",

                    data: [
                        1.2,
                        1.5,
                        1.3,
                        1.8,
                        2.0,
                        3.5,
                        4.2
                    ],

                    borderWidth: 1

                }

            ]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {
                    display: true
                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    title: {

                        display: true,

                        text:
                            "Juta Rupiah"

                    }

                },

                x: {

                    title: {

                        display: true,

                        text:
                            "Hari"

                    }

                }

            }

        }

    });

}


/* =====================================================
   8. SAAT WEBSITE DIBUKA
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /* Menu default = Bebek */

        tampilkanMenu(
            "bebek"
        );


        /* Active navbar */

        updateActiveMenu();

    }
);
