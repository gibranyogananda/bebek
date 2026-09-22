/* =====================================================
   DATA MENU
===================================================== */

const menus = {

    bebek: {
        title: "Menu Bebek",
        image: "assets/menu-bebek.png",

        items: [
            ["Bebek Goreng", "Rp27.000"],
            ["Bebek Kremes", "Rp30.000"],
            ["Bebek Gongso", "Rp30.000"],
            ["Bebek Lombok Ijo", "Rp32.000"],
            ["Bebek Bacem", "Rp32.000"]
        ]
    },


    ayam: {
        title: "Menu Ayam",
        image: "assets/Menu-ayam.png",

        items: [
            ["Ayam Kampung Goreng", "Rp27.000"],
            ["Ayam Kampung Kremes", "Rp30.000"],
            ["Ayam Kampung Gongso", "Rp30.000"],
            ["Ayam Kampung Lombok Ijo", "Rp32.000"],
            ["Ayam Negri Goreng", "Rp16.000"],
            ["Ayam Negri Kremes", "Rp20.000"],
            ["Ayam Negri Gongso", "Rp22.000"],
            ["Ayam Negri Lombok Ijo", "Rp22.000"]
        ]
    },


    lain: {
        title: "Menu Lain",
        image: "assets/menu-lain.png",

        items: [
            ["Pepes Nila", "Rp30.000"],
            ["Nila Telur Asin", "Rp35.000"],
            ["Nila Crispy", "Rp30.000"],
            ["Nila Goreng", "Rp16.000"],
            ["Lele Goreng", "Rp12.000"],
            ["Sup Iga", "Rp38.000"],
            ["Kangkung", "Rp10.000"],
            ["Tauge", "Rp10.000"],
            ["Terong Goreng", "Rp7.000"]
        ]
    },


    coffee: {
        title: "Coffee",
        image: "assets/menu-coffee.png",

        items: [
            ["Kopi Susu Kinanthi Hot", "Rp22.000"],
            ["Lime Coffee Hot", "Rp20.000"],
            ["Kopi Susu Blueberry Hot", "Rp20.000"],
            ["Kopi Susu Blueberry Ice", "Rp22.000"],
            ["Kopi Susu Caramel Hot", "Rp20.000"],
            ["Kopi Susu Caramel Ice", "Rp22.000"],
            ["Coffee Latte Hot", "Rp18.000"]
        ]
    },


    camilan: {
        title: "Camilan",
        image: "assets/menu-camilan.png",

        items: [
            ["Mix Platter", "Rp25.000"],
            ["Onion Ring", "Rp15.000"],
            ["Tahu Cabai Garam", "Rp15.000"],
            ["Tahu Tuna", "Rp15.000"],
            ["Pisang Lumer", "Rp15.000"],
            ["Kentang Goreng", "Rp15.000"],
            ["Singkong Goreng", "Rp12.000"],
            ["Singkong Keju", "Rp15.000"],
            ["Singkong Coklat", "Rp15.000"],
            ["Mendoan", "Rp12.000"],
            ["Jamur Tepung", "Rp12.000"],
            ["Sosis Goreng", "Rp12.000"],
            ["Cireng Goreng", "Rp10.000"],
            ["Lumpia Goreng", "Rp15.000"],
            ["Pastel Goreng", "Rp15.000"],
            ["Jenang", "Rp10.000"],
            ["Krasikan", "Rp10.000"]
        ]
    },


    minuman: {
        title: "Minuman",

        images: [
            "assets/menu-minuman-1.png",
            "assets/menu-minuman-2.png"
        ],

        items: [
            ["Jahe Geprek", "Rp10.000"],
            ["Jahe Serai", "Rp12.000"],
            ["Jahe Susu", "Rp12.000"],
            ["Kopi Jahe", "Rp12.000"],
            ["Hot Coklat", "Rp15.000"],
            ["Hot Matcha", "Rp20.000"],
            ["Hot Taro", "Rp18.000"],
            ["Soda Gembira", "Rp12.000"],
            ["Lemon Squash", "Rp12.000"],
            ["Orange Squash", "Rp12.000"],
            ["Jeruk Kelapa Muda", "Rp12.000"],
            ["Kelapa Muda Gelas", "Rp12.000"],
            ["Kelapa Muda Utuh", "Rp14.000"],
            ["Alpukat", "Rp14.000"],
            ["Mangga", "Rp14.000"],
            ["Jambu", "Rp12.000"],
            ["Sirsak", "Rp12.000"],
            ["Melon", "Rp12.000"],
            ["Semangka", "Rp10.000"],
            ["Teh Tawar", "Rp3.000"],
            ["Teh Manis Panas", "Rp5.000"],
            ["Es Teh Manis", "Rp6.000"],
            ["Teh Leci", "Rp15.000"],
            ["Jeruk Panas", "Rp6.000"],
            ["Es Jeruk", "Rp7.000"],
            ["Lemon Tea", "Rp7.000"],
            ["Air Mineral", "Rp6.000"]
        ]
    }

};


/* =====================================================
   TAMPILKAN MENU
===================================================== */

function showMenu(category, clickedButton) {

    const content = document.getElementById("menuContent");
    const menu = menus[category];

    if (!content || !menu) {
        return;
    }


    /* -----------------------------
       ACTIVE BUTTON
    ----------------------------- */

    document
        .querySelectorAll(".menu-btn")
        .forEach(button => {
            button.classList.remove("active");
        });


    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    /* -----------------------------
       DAFTAR MENU
    ----------------------------- */

    let list = "";

    menu.items.forEach(item => {

        list += `
            <li>
                <span class="menu-name">
                    ${item[0]}
                </span>

                <span class="menu-price">
                    ${item[1]}
                </span>
            </li>
        `;

    });


    /* -----------------------------
       POSTER
    ----------------------------- */

    let posters = "";


    /*
       Kategori Minuman memiliki
       dua poster.
    */

    if (menu.images && Array.isArray(menu.images)) {

        posters = `
            <div class="row g-3">

                ${menu.images.map(image => `

                    <div class="col-12">

                        <img
                            src="${image}"
                            alt="${menu.title}"
                            class="menu-poster"
                            onclick="openImage(
                                '${image}',
                                '${menu.title}'
                            )"
                        >

                    </div>

                `).join("")}

            </div>
        `;

    }


    /*
       Kategori lain memiliki
       satu poster.
    */

    else if (menu.image) {

        posters = `

            <img
                src="${menu.image}"
                alt="${menu.title}"
                class="menu-poster"
                onclick="openImage(
                    '${menu.image}',
                    '${menu.title}'
                )"
            >

        `;

    }


    /* -----------------------------
       TAMPILKAN KONTEN
    ----------------------------- */

    content.innerHTML = `

        <div class="menu-display">

            <div class="row g-4">

                <!-- DAFTAR NAMA + HARGA -->

                <div class="col-lg-6">

                    <h3>
                        ${menu.title}
                    </h3>

                    <ul class="menu-list">

                        ${list}

                    </ul>

                </div>


                <!-- POSTER -->

                <div class="col-lg-6">

                    ${posters}

                </div>

            </div>

        </div>

    `;
}


/* =====================================================
   MODAL FOTO
===================================================== */

function openImage(src, alt) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");


    if (!modal || !image) {
        return;
    }


    image.src = src;
    image.alt = alt || "Preview";


    /*
       Jika gambar gagal dimuat,
       modal tidak dibiarkan kosong.
    */

    image.onerror = function() {

        console.error(
            "Gambar tidak ditemukan:",
            src
        );

        image.alt =
            "Gambar tidak ditemukan: " + src;

    };


    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =====================================================
   TUTUP MODAL
===================================================== */

function closeImage(event) {

    if (event) {
        event.stopPropagation();
    }


    const modal =
        document.getElementById("imageModal");


    if (!modal) {
        return;
    }


    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =====================================================
   TUTUP MODAL DENGAN ESC
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeImage();
        }

    }
);


/* =====================================================
   NAVBAR
   ACTIVE + SMOOTH SCROLL
===================================================== */

const navLinks =
    document.querySelectorAll(
        ".navbar .nav-link"
    );


const sections =
    document.querySelectorAll(
        "section[id]"
    );


/* -----------------------------
   KLIK NAVBAR
----------------------------- */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        function(event) {

            const targetId =
                this.getAttribute("href");


            /*
               Hanya jalankan smooth scroll
               untuk link menuju section.
            */

            if (
                !targetId ||
                !targetId.startsWith("#")
            ) {
                return;
            }


            const target =
                document.querySelector(targetId);


            if (!target) {
                return;
            }


            event.preventDefault();


            const navbar =
                document.querySelector(".navbar");


            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 70;


            const position =
                target.offsetTop -
                navbarHeight;


            window.scrollTo({

                top: position,

                behavior: "smooth"

            });


            /*
               Update active menu
               langsung ketika diklik.
            */

            navLinks.forEach(item => {

                item.classList.remove(
                    "active"
                );

            });


            this.classList.add("active");


            /*
               Tutup navbar Bootstrap
               ketika dibuka di HP.
            */

            const navbarMenu =
                document.getElementById(
                    "navbarMenu"
                );


            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {

                const collapse =
                    bootstrap.Collapse
                        .getInstance(
                            navbarMenu
                        );


                if (collapse) {
                    collapse.hide();
                }

            }

        }
    );

});


/* =====================================================
   UPDATE ACTIVE NAVBAR SAAT SCROLL
===================================================== */

function updateActiveNav() {

    let current = "home";


    const scrollPosition =
        window.scrollY + 150;


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;


        const sectionHeight =
            section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            current = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =====================================================
   CHART JS
===================================================== */

function createMenuChart() {

    const canvas =
        document.getElementById(
            "menuChart"
        );


    if (!canvas) {
        return;
    }


    /*
       Jika chart sudah dibuat,
       jangan dibuat ulang.
    */

    if (
        typeof Chart === "undefined"
    ) {

        console.error(
            "Chart.js belum berhasil dimuat."
        );

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

                    label: "Jumlah Menu",

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
                    display: false
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

}


/* =====================================================
   INITIALIZATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        /*
           Tampilkan menu Bebek
           ketika website pertama dibuka.
        */

        const firstMenuButton =
            document.querySelector(
                ".menu-btn"
            );


        showMenu(
            "bebek",
            firstMenuButton
        );


        /*
           Buat grafik.
        */

        createMenuChart();


        /*
           Set navbar active
           sesuai posisi awal.
        */

        updateActiveNav();

    }
);
