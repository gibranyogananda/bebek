/* =====================================================
   DATA MENU
===================================================== */

const menus = {

    bebek: {
        title: "Menu Bebek",
        image: "assets/menu-bebek.png",

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


    ayam: {
        title: "Menu Ayam",
        image: "assets/Menu-ayam.png",

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
            ["Ayam Kampung Utuh Lombol Ijo", "Rp. 140.000"]
        ]
    },


    lain: {
        title: "Menu Lain",
        image: "assets/menu-lain.png",

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


    coffee: {
        title: "Coffee Series",
        image: "assets/menu-coffee.png",

        items: [
            ["Kopi Susu Kinanthi Hot", "Rp. 22.000"],
            ["Lime Coffee Hot", "Rp. 20.000"],
            ["Kopi Susu Blueberry Hot", "Rp. 20.000"],
            ["Kopi Susu Blueberry Ice", "Rp. 22.000"],
            ["Kopi Susu Caramel Hot", "Rp. 20.000"],
            ["Kopi Susu Caramel Ice", "Rp. 22.000"],
            ["Coffee Latte Hot", "Rp. 18.000"],
            ["Coffee Latte Ice", "Rp. 20.000"],
            ["Americano Hot", "Rp. 15.000"],
            ["Americano Ice", "Rp. 17.000"],
            ["Kopi Tubruk Hot", "Rp. 15.000"]
        ]
    },


    camilan: {
        title: "Camilan",
        image: "assets/menu-camilan.png",

        items: [
            ["Mix Platter (Sosis, Kentang, Nugget)", "Rp. 25.000"],
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


    minuman: {
        title: "Minuman",
        image: "assets/menu-minuman-1.png",

        extraImages: [
            "assets/menu-minuman-1.png",
            "assets/menu-minuman-2.png"
        ],

        items: [
            ["Jahe Geprek", "Rp. 10.000"],
            ["Jahe Serai", "Rp. 12.000"],
            ["Jahe Susu", "Rp. 12.000"],
            ["Kopi Jahe", "Rp. 12.000"],
            ["Hot Coklat", "Rp. 15.000"],
            ["Hot Matcha", "Rp. 20.000"],
            ["Hot Taro", "Rp. 18.000"],

            ["Soda Gembira", "Rp. 12.000"],
            ["Lemon Squash", "Rp. 12.000"],
            ["Orange Squash", "Rp. 12.000"],
            ["Jeruk Kelapa Muda", "Rp. 12.000"],
            ["Kelapa Muda Gelas", "Rp. 12.000"],
            ["Kelapa Muda Utuh Murni", "Rp. 14.000"],
            ["Kelapa Muda Utuh + Gula", "Rp. 15.000"],

            ["Alpukat", "Rp. 14.000"],
            ["Mangga", "Rp. 14.000"],
            ["Jambu", "Rp. 12.000"],
            ["Sirsak", "Rp. 12.000"],
            ["Melon", "Rp. 12.000"],
            ["Semangka", "Rp. 10.000"],

            ["Teh Tawar", "Rp. 3.000"],
            ["Teh Manis Panas", "Rp. 5.000"],
            ["Esteh Manis", "Rp. 6.000"],
            ["Teh Leci", "Rp. 15.000"],
            ["Jeruk Panas", "Rp. 6.000"],
            ["Es Jeruk", "Rp. 7.000"],
            ["Lemon Tea Panas", "Rp. 6.000"],
            ["Es Lemon Tea", "Rp. 7.000"],
            ["Milo Hot", "Rp. 8.000"],
            ["Milo Es", "Rp. 10.000"],
            ["Air Mineral", "Rp. 6.000"],
            ["Air Putih / Air Es", "Rp. 2.000"],
            ["Es Batu", "Rp. 2.000"],

            ["Milkshake Coklat", "Rp. 18.000"],
            ["Milkshake Strawberry", "Rp. 18.000"],
            ["Milkshake Vanila", "Rp. 18.000"],

            ["Milkblend Coklat", "Rp. 18.000"],
            ["Milkblend Strawberry", "Rp. 18.000"],
            ["Milkblend Taro", "Rp. 20.000"],
            ["Milkblend Matcha", "Rp. 22.000"]
        ]
    }

};


/* =====================================================
   MENAMPILKAN MENU
===================================================== */

function showMenu(category, button) {

    const menuContent =
        document.getElementById("menuContent");

    const menu = menus[category];

    if (!menu) {
        return;
    }


    /* ACTIVE BUTTON */

    document
        .querySelectorAll(".menu-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    if (button) {
        button.classList.add("active");
    }


    /* DAFTAR MENU */

    let listHTML = "";

    menu.items.forEach(item => {

        listHTML += `
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


    /* POSTER */

    let postersHTML = "";

    if (menu.extraImages) {

        postersHTML = `
            <div class="row g-3">

                ${menu.extraImages.map(image => `
                    <div class="col-md-6">

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

    } else {

        postersHTML = `
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


    /* TAMPILKAN */

    menuContent.innerHTML = `

        <div class="menu-display">

            <div class="row g-4 align-items-start">

                <div class="col-lg-6">

                    <h3>
                        ${menu.title}
                    </h3>

                    <ul class="menu-list">
                        ${listHTML}
                    </ul>

                </div>

                <div class="col-lg-6">

                    ${postersHTML}

                </div>

            </div>

        </div>

    `;
}


/* =====================================================
   DEFAULT MENU
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const firstButton =
        document.querySelector(".menu-btn");

    showMenu("bebek", firstButton);

});


/* =====================================================
   MODAL FOTO BESAR
===================================================== */

function openImage(imageSrc, imageAlt) {

    const modal =
        document.getElementById("imageModal");

    const image =
        document.getElementById("modalImage");

    image.src = imageSrc;
    image.alt = imageAlt;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeImage(event) {

    if (event) {
        event.stopPropagation();
    }

    const modal =
        document.getElementById("imageModal");

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* ESC UNTUK MENUTUP FOTO */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImage();
    }

});


/* =====================================================
   NAVBAR ACTIVE MENU
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar .nav-link");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

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


/* =====================================================
   AUTOSCROLL NAVBAR
===================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        const targetID =
            this.getAttribute("href");

        if (!targetID.startsWith("#")) {
            return;
        }

        const target =
            document.querySelector(targetID);

        if (!target) {
            return;
        }

        event.preventDefault();

        const offset = 70;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            offset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });


        /* Tutup navbar mobile */

        const navbarCollapse =
            document.getElementById("navbarMenu");

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bsCollapse) {
                bsCollapse.hide();
            }

        }

    });

});


/* =====================================================
   CHART JS
===================================================== */

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
                "Menu Lain",
                "Coffee",
                "Camilan",
                "Minuman"
            ],

            datasets: [

                {
                    label: "Jumlah Menu",

                    data: [
                        menus.bebek.items.length,
                        menus.ayam.items.length,
                        menus.lain.items.length,
                        menus.coffee.items.length,
                        menus.camilan.items.length,
                        menus.minuman.items.length
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
