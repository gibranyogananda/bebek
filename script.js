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
            ["Bebek Bacem", "Rp32.000"],
            ["Kepala Bebek Goreng", "Rp15.000"],
            ["Kepala Bebek Gongso", "Rp18.000"],
            ["Bebek Utuh Goreng", "Rp130.000"],
            ["Bebek Utuh Kremes", "Rp135.000"],
            ["Bebek Utuh Gongso", "Rp135.000"],
            ["Bebek Utuh Lombok Ijo", "Rp135.000"]

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
            ["Ayam Negri Lombok Ijo", "Rp22.000"],
            ["Ayam Kampung Utuh Goreng", "Rp135.000"],
            ["Ayam Kampung Utuh Kremes", "Rp140.000"],
            ["Ayam Kampung Utuh Gongso", "Rp140.000"],
            ["Ayam Kampung Utuh Lombok Ijo", "Rp140.000"]

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
            ["Kangkung (Tumis/Ca)", "Rp10.000"],
            ["Tauge (Tumis/Ca)", "Rp10.000"],
            ["Terong Goreng", "Rp7.000"],
            ["Pete", "Rp7.000"],
            ["Kol Goreng", "Rp5.000"],
            ["Tahu Goreng", "Rp2.000"],
            ["Tempe Goreng", "Rp2.000"],
            ["Mix Tahu Tempe", "Rp4.000"],
            ["Nasi Sambal Lalap", "Rp6.000"]

        ]

    },


    coffee: {

        title: "Coffee",

        image: "assets/menu-coffee.png",

        items: [

            ["Kopi Susu Kinanthi Hot", "Rp22.000"],
            ["Lime Coffee Hot", "Rp20.000"],
            ["Kopi Susu Blueberry", "Hot / Ice — Rp20.000 / Rp22.000"],
            ["Kopi Susu Caramel", "Hot / Ice — Rp20.000 / Rp22.000"],
            ["Coffee Latte", "Hot / Ice — Rp18.000 / Rp20.000"],
            ["Americano", "Hot / Ice — Rp15.000 / Rp17.000"],
            ["Kopi Tubruk Hot", "Rp15.000"]

        ]

    },


    camilan: {

        title: "Camilan",

        image: "assets/menu-camilan.png",

        items: [

            ["Mix Platter (Sosis, Kentang, Nugget)", "Rp25.000"],
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


        groups: [

            {

                title: "Hot Series",

                items: [

                    ["Jahe Geprek", "Rp10.000"],
                    ["Jahe Serai", "Rp12.000"],
                    ["Jahe Susu", "Rp12.000"],
                    ["Kopi Jahe", "Rp12.000"],
                    ["Hot Coklat", "Rp15.000"],
                    ["Hot Matcha", "Rp20.000"],
                    ["Hot Taro", "Rp18.000"]

                ]

            },


            {

                title: "Ice Squash",

                items: [

                    ["Soda Gembira", "Rp12.000"],
                    ["Lemon Squash", "Rp12.000"],
                    ["Orange Squash", "Rp12.000"],
                    ["Jeruk Kelapa Muda", "Rp12.000"],
                    ["Kelapa Muda Gelas", "Rp12.000"],
                    ["Kelapa Muda Utuh Murni", "Rp14.000"],
                    ["Kelapa Muda Utuh + Gula", "Rp15.000"]

                ]

            },


            {

                title: "Jus",

                items: [

                    ["Alpukat", "Rp14.000"],
                    ["Mangga", "Rp14.000"],
                    ["Jambu", "Rp12.000"],
                    ["Sirsak", "Rp12.000"],
                    ["Melon", "Rp12.000"],
                    ["Semangka", "Rp10.000"]

                ]

            },


            {

                title: "Minuman Reguler",

                items: [

                    ["Teh Tawar", "Rp3.000"],
                    ["Teh Manis Panas", "Rp5.000"],
                    ["Es Teh Manis", "Rp6.000"],
                    ["Teh Leci", "Rp15.000"],
                    ["Jeruk Panas", "Rp6.000"],
                    ["Es Jeruk", "Rp7.000"],
                    ["Lemon Tea Panas", "Rp6.000"],
                    ["Es Lemon Tea", "Rp7.000"],
                    ["Milo (Hot / Es)", "Rp8.000 / Rp10.000"],
                    ["Air Mineral", "Rp6.000"],
                    ["Air Putih / Air Es", "Rp2.000"],
                    ["Es Batu", "Rp2.000"]

                ]

            },


            {

                title: "Milkshake",

                items: [

                    ["Coklat", "Rp18.000"],
                    ["Strawberry", "Rp18.000"],
                    ["Vanila", "Rp18.000"]

                ]

            },


            {

                title: "Milkblend",

                items: [

                    ["Coklat", "Rp18.000"],
                    ["Strawberry", "Rp18.000"],
                    ["Taro", "Rp20.000"],
                    ["Matcha", "Rp22.000"]

                ]

            }

        ]

    }

};



/* =====================================================
   BUAT DAFTAR MENU
===================================================== */

function createMenuList(items) {

    return `

        <ul class="menu-list">

            ${items.map(item => `

                <li>

                    <span class="menu-name">
                        ${item[0]}
                    </span>

                    <span class="menu-price">
                        ${item[1]}
                    </span>

                </li>

            `).join("")}

        </ul>

    `;

}



/* =====================================================
   BUAT GROUP MENU
===================================================== */

function createMenuGroups(groups) {

    return groups.map(group => `

        <div class="menu-group">

            <h4 class="menu-group-title">
                ${group.title}
            </h4>

            ${createMenuList(group.items)}

        </div>

    `).join("");

}



/* =====================================================
   BUAT POSTER MENU
===================================================== */

function createPosters(menu) {

    const images = menu.images
        ? menu.images
        : [menu.image];


    return `

        <div class="menu-posters">

            ${images.map(image => `

                <img

                    src="${image}"

                    alt="${menu.title}"

                    class="menu-poster"

                    onclick="openImage('${image}')"

                >

            `).join("")}

        </div>

    `;

}



/* =====================================================
   TAMPILKAN MENU
===================================================== */

function showMenu(category, clickedButton) {

    const menu = menus[category];

    if (!menu) {
        return;
    }


    /* Hapus active dari semua tombol */

    document
        .querySelectorAll(".menu-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    /* Tambahkan active ke tombol yang diklik */

    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    const menuContent =
        document.getElementById("menuContent");


    if (!menuContent) {
        return;
    }


    let menuListHTML;


    if (menu.groups) {

        menuListHTML =
            createMenuGroups(menu.groups);

    } else {

        menuListHTML =
            createMenuList(menu.items);

    }


    menuContent.innerHTML = `

        <div class="menu-display">

            <div class="row g-4 align-items-start">


                <div class="col-lg-6">

                    <h3>
                        ${menu.title}
                    </h3>

                    ${menuListHTML}

                </div>


                <div class="col-lg-6">

                    ${createPosters(menu)}

                </div>


            </div>

        </div>

    `;

}



/* =====================================================
   MODAL GAMBAR
===================================================== */

function openImage(src) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");


    if (!modal || !image) {
        return;
    }


    image.src = src;

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



function pilihWhatsApp() {
    const pilihan = prompt(
        "Pilih nomor WhatsApp:\n\n" +
        "1. 081226956567\n" +
        "2. 08139869925\n\n" +
        "Ketik 1 atau 2:"
    );

    if (pilihan === "1") {
        window.open(
            "https://wa.me/6281226956567",
            "_blank"
        );
    } else if (pilihan === "2") {
        window.open(
            "https://wa.me/628139869925",
            "_blank"
        );
    } else if (pilihan !== null) {
        alert("Pilihan tidak valid. Silakan pilih 1 atau 2.");
    }
}

/* =====================================================
   DOM READY
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =============================================
           TAMPILKAN MENU BEBEK PERTAMA
        ============================================= */

        const firstMenuButton =
            document.querySelector(".menu-btn");


        if (firstMenuButton) {

            showMenu(
                "bebek",
                firstMenuButton
            );

        }



        /* =============================================
           NAVBAR SMOOTH SCROLL
        ============================================= */

        const navLinks =
            document.querySelectorAll(
                ".navbar .nav-link"
            );


        navLinks.forEach(link => {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");


                    if (
                        targetId &&
                        targetId.startsWith("#")
                    ) {

                        const target =
                            document.querySelector(
                                targetId
                            );


                        if (target) {

                            event.preventDefault();


                            const navbar =
                                document.querySelector(
                                    ".navbar"
                                );


                            const navbarHeight =
                                navbar
                                    ? navbar.offsetHeight
                                    : 80;


                            const targetPosition =

                                target
                                    .getBoundingClientRect()
                                    .top +

                                window.scrollY -

                                navbarHeight;


                            window.scrollTo({

                                top: targetPosition,

                                behavior: "smooth"

                            });

                        }

                    }

                }
            );

        });



        /* =============================================
           ACTIVE NAVBAR SAAT SCROLL
        ============================================= */

        const sections =
            document.querySelectorAll(
                "section[id]"
            );


        function updateActiveNav() {

            const scrollPosition =
                window.scrollY + 120;


            let currentSection = "";


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

                    currentSection =
                        section.getAttribute("id");

                }

            });


            navLinks.forEach(link => {

                link.classList.remove("active");


                if (

                    link.getAttribute("href") ===
                    `#${currentSection}`

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



        /* =============================================
           CHART JS
        ============================================= */

        const canvas =
            document.getElementById("menuChart");


        if (
            canvas &&
            typeof Chart !== "undefined"
        ) {

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

                    datasets: [{

                        label: "Jumlah Menu",

                        data: [

                            11,
                            12,
                            15,
                            7,
                            17,
                            39

                        ],

                        borderWidth: 1

                    }]

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

    }
);



/* =====================================================
   ESC UNTUK MENUTUP GAMBAR
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeImage();

        }

    }
);
