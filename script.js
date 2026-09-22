/* =====================================================
   DATA MENU
===================================================== */

const menus = {

    /* ================= BEBEK ================= */

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


    /* ================= AYAM ================= */

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


    /* ================= MENU LAIN ================= */

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


    /* ================= COFFEE ================= */

    coffee: {
        title: "Coffee",
        image: "assets/menu-coffee.png",

        items: [
            ["Kopi Susu Kinanthi Hot", "Rp22.000"],
            ["Lime Coffee Hot", "Rp20.000"],
            ["Kopi Susu Blueberry — Hot / Ice", "Rp20.000 / Rp22.000"],
            ["Kopi Susu Caramel — Hot / Ice", "Rp20.000 / Rp22.000"],
            ["Coffee Latte — Hot / Ice", "Rp18.000 / Rp20.000"],
            ["Americano — Hot / Ice", "Rp15.000 / Rp17.000"],
            ["Kopi Tubruk Hot", "Rp15.000"]
        ]
    },


    /* ================= CAMILAN ================= */

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


    /* ================= MINUMAN ================= */

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
   TAMPILKAN DAFTAR ITEM
===================================================== */

function createMenuList(items) {

    let list = "";

    items.forEach(item => {

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

    return list;
}


/* =====================================================
   TAMPILKAN GROUP MINUMAN
===================================================== */

function createMenuGroups(groups) {

    let result = "";

    groups.forEach(group => {

        result += `
            <div class="menu-group">

                <h4 class="menu-group-title">
                    ${group.title}
                </h4>

                <ul class="menu-list">
                    ${createMenuList(group.items)}
                </ul>

            </div>
        `;

    });

    return result;
}


/* =====================================================
   TAMPILKAN POSTER
===================================================== */

function createPosters(menu) {

    if (menu.images) {

        return `
            <div class="menu-posters">

                ${menu.images.map(image => `
                    <img
                        src="${image}"
                        alt="${menu.title}"
                        class="menu-poster"
                        onclick="openImage('${image}', '${menu.title}')"
                    >
                `).join("")}

            </div>
        `;

    }


    return `
        <img
            src="${menu.image}"
            alt="${menu.title}"
            class="menu-poster"
            onclick="openImage('${menu.image}', '${menu.title}')"
        >
    `;
}


/* =====================================================
   SHOW MENU
===================================================== */

function showMenu(category, clickedButton) {

    const content =
        document.getElementById("menuContent");

    const menu =
        menus[category];

    if (!content || !menu) {
        return;
    }


    /* Tombol aktif */

    document
        .querySelectorAll(".menu-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    if (clickedButton) {
        clickedButton.classList.add("active");
    }


    /* Daftar menu */

    let menuHTML = "";


    if (menu.groups) {

        menuHTML = createMenuGroups(menu.groups);

    } else {

        menuHTML = `
            <h3>${menu.title}</h3>

            <ul class="menu-list">
                ${createMenuList(menu.items)}
            </ul>
        `;

    }


    /* Tampilkan */

    content.innerHTML = `

        <div class="menu-display">

            <div class="row g-4 align-items-start">

                <!-- DAFTAR MENU -->

                <div class="col-lg-6">

                    ${menuHTML}

                </div>


                <!-- POSTER -->

                <div class="col-lg-6">

                    ${createPosters(menu)}

                </div>

            </div>

        </div>

    `;
}


/* =====================================================
   FOTO BESAR / MODAL
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
    image.alt = alt;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeImage(event) {

    if (event) {
        event.stopPropagation();
    }

    const modal =
        document.getElementById("imageModal");

    if (modal) {
        modal.classList.remove("show");
    }

    document.body.style.overflow = "";
}


/* Klik Escape untuk menutup modal */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImage();
    }

});


/* =====================================================
   NAVBAR ACTIVE + SMOOTH SCROLL
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const navLinks =
        document.querySelectorAll(".navbar .nav-link");

    const sections =
        document.querySelectorAll("section[id]");


    /* Smooth scroll */

    navLinks.forEach(link => {

        link.addEventListener("click", function(event) {

            const targetId =
                this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const position =
                target.offsetTop - 70;

            window.scrollTo({
                top: position,
                behavior: "smooth"
            });


            navLinks.forEach(item => {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* Menu pertama otomatis tampil */

    const firstMenuButton =
        document.querySelector(".menu-btn");

    if (firstMenuButton) {

        showMenu(
            "bebek",
            firstMenuButton
        );

    }


    /* Update navbar ketika scroll */

    function updateActiveNav() {

        let current = "home";

        sections.forEach(section => {

            const top =
                section.offsetTop - 130;

            if (window.scrollY >= top) {
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


    updateActiveNav();


    /* =================================================
       CHART JS
    ================================================= */

    const canvas =
        document.getElementById("menuChart");

    if (canvas && typeof Chart !== "undefined") {

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
                            11,
                            12,
                            15,
                            7,
                            17,
                            39
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

});
