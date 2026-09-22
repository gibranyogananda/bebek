/* ==========================================
   DATA MENU
========================================== */

const menus = {

    /* ================= BEBEK ================= */

    bebek: {

        title: "Menu Bebek",

        poster: "assets/menu-bebek.png",

        sections: [

            {
                title: "",
                items: [
                    ["Bebek Goreng", "Rp. 27.000"],
                    ["Bebek Kremes", "Rp. 30.000"],
                    ["Bebek Gongso", "Rp. 30.000"],
                    ["Bebek Lombok Ijo", "Rp. 32.000"],
                    ["Bebek Bacem", "Rp. 32.000"]
                ]
            },

            {
                title: "Kepala Bebek",
                items: [
                    ["Kepala Bebek Goreng", "Rp. 15.000"],
                    ["Kepala Bebek Gongso", "Rp. 18.000"]
                ]
            },

            {
                title: "Bebek Utuh",
                items: [
                    ["Bebek Utuh Goreng", "Rp. 130.000"],
                    ["Bebek Utuh Kremes", "Rp. 135.000"],
                    ["Bebek Utuh Gongso", "Rp. 135.000"],
                    ["Bebek Utuh Lombok Ijo", "Rp. 135.000"]
                ]
            }

        ]

    },


    /* ================= AYAM ================= */

    ayam: {

        title: "Menu Ayam",

        /*
         * PENTING:
         * Nama file di GitHub kamu adalah
         * Menu-ayam.png
         * huruf M besar.
         */
        poster: "assets/Menu-ayam.png",

        sections: [

            {
                title: "Ayam Kampung / Negri",

                items: [
                    ["Ayam Kampung Goreng", "Rp. 27.000"],
                    ["Ayam Kampung Kremes", "Rp. 30.000"],
                    ["Ayam Kampung Gongso", "Rp. 30.000"],
                    ["Ayam Kampung Lombok Ijo", "Rp. 32.000"],

                    ["Ayam Negri Goreng", "Rp. 16.000"],
                    ["Ayam Negri Kremes", "Rp. 20.000"],
                    ["Ayam Negri Gongso", "Rp. 22.000"],
                    ["Ayam Negri Lombok Ijo", "Rp. 22.000"]
                ]
            },

            {
                title: "Ayam Kampung Utuh",

                items: [
                    ["Ayam Kampung Utuh Goreng", "Rp. 135.000"],
                    ["Ayam Kampung Utuh Kremes", "Rp. 140.000"],
                    ["Ayam Kampung Utuh Gongso", "Rp. 140.000"],
                    ["Ayam Kampung Utuh Lombok Ijo", "Rp. 140.000"]
                ]
            }

        ]

    },


    /* ================= MENU LAIN ================= */

    lain: {

        title: "Menu Lain",

        poster: "assets/menu-lain.png",

        sections: [

            {
                title: "",

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
            }

        ]

    },


    /* ================= COFFEE ================= */

    coffee: {

        title: "Coffee Series",

        poster: "assets/menu-coffee.png",

        sections: [

            {
                title: "",

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
            }

        ]

    },


    /* ================= CAMILAN ================= */

    camilan: {

        title: "Camilan",

        poster: "assets/menu-camilan.png",

        sections: [

            {
                title: "",

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
            }

        ]

    },


    /* ================= MINUMAN ================= */

    minuman: {

        title: "Minuman",

        posters: [
            "assets/menu-minuman-1.png",
            "assets/menu-minuman-2.png"
        ],

        sections: [

            {
                title: "Hot Series",

                items: [
                    ["Jahe Geprek", "Rp. 10.000"],
                    ["Jahe Serai", "Rp. 12.000"],
                    ["Jahe Susu", "Rp. 12.000"],
                    ["Kopi Jahe", "Rp. 12.000"],
                    ["Hot Coklat", "Rp. 15.000"],
                    ["Hot Matcha", "Rp. 20.000"],
                    ["Hot Taro", "Rp. 18.000"]
                ]
            },

            {
                title: "Ice Squash",

                items: [
                    ["Soda Gembira", "Rp. 12.000"],
                    ["Lemon Squash", "Rp. 12.000"],
                    ["Orange Squash", "Rp. 12.000"],
                    ["Jeruk Kelapa Muda", "Rp. 12.000"],
                    ["Kelapa Muda Gelas", "Rp. 12.000"],
                    ["Kelapa Muda Utuh Murni", "Rp. 14.000"],
                    ["Kelapa Muda Utuh + Gula", "Rp. 15.000"]
                ]
            },

            {
                title: "Jus",

                items: [
                    ["Alpukat", "Rp. 14.000"],
                    ["Mangga", "Rp. 14.000"],
                    ["Jambu", "Rp. 12.000"],
                    ["Sirsak", "Rp. 12.000"],
                    ["Melon", "Rp. 12.000"],
                    ["Semangka", "Rp. 10.000"]
                ]
            },

            {
                title: "Minuman Reguler",

                items: [
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
                    ["Es Batu", "Rp. 2.000"]
                ]
            },

            {
                title: "Milkshake",

                items: [
                    ["Milkshake Coklat", "Rp. 18.000"],
                    ["Milkshake Strawberry", "Rp. 18.000"],
                    ["Milkshake Vanila", "Rp. 18.000"]
                ]
            },

            {
                title: "Milkblend",

                items: [
                    ["Milkblend Coklat", "Rp. 18.000"],
                    ["Milkblend Strawberry", "Rp. 18.000"],
                    ["Milkblend Taro", "Rp. 20.000"],
                    ["Milkblend Matcha", "Rp. 22.000"]
                ]
            }

        ]

    }

};


/* ==========================================
   FUNGSI MENAMPILKAN MENU
========================================== */

function showMenu(category, button) {

    const menu = menus[category];

    if (!menu) {
        return;
    }


    /* ==========================
       ACTIVE BUTTON
    ========================== */

    document.querySelectorAll(".menu-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }


    /* ==========================
       BUAT HTML DAFTAR MENU
    ========================== */

    let listHTML = "";

    menu.sections.forEach(section => {

        if (section.title !== "") {

            listHTML += `
                <h4 class="menu-subtitle">
                    ${section.title}
                </h4>
            `;
        }


        listHTML += `
            <ul class="menu-list">
        `;


        section.items.forEach(item => {

            listHTML += `
                <li>
                    <span>${item[0]}</span>
                    <span class="menu-price">${item[1]}</span>
                </li>
            `;

        });


        listHTML += `
            </ul>
        `;

    });


    /* ==========================
       POSTER
    ========================== */

    let posterHTML = "";


    if (menu.posters) {

        posterHTML = `
            <div class="row g-4 mt-3">

                ${menu.posters.map(poster => `
                    <div class="col-md-6">
                        <img
                            src="${poster}"
                            class="menu-poster"
                            alt="${menu.title}"
                            onerror="this.style.display='none'"
                        >
                    </div>
                `).join("")}

            </div>
        `;

    } else {

        posterHTML = `
            <div class="mt-4 text-center">

                <img
                    src="${menu.poster}"
                    class="menu-poster"
                    alt="${menu.title}"
                    onerror="this.style.display='none'"
                >

            </div>
        `;
    }


    /* ==========================
       MASUKKAN KE HALAMAN
    ========================== */

    document.getElementById("menuContent").innerHTML = `

        <div class="menu-result-box">

            <h3 class="menu-result-title">
                ${menu.title}
            </h3>

            <div class="row g-4">

                <div class="col-lg-6">

                    ${listHTML}

                </div>

                <div class="col-lg-6">

                    ${posterHTML}

                </div>

            </div>

        </div>

    `;


    /* ==========================
       SCROLL HALUS KE HASIL
    ========================== */

    setTimeout(() => {

        document.getElementById("menuContent").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);

}


/* ==========================================
   MENU DEFAULT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    const firstButton = document.querySelector(".menu-btn");

    showMenu("bebek", firstButton);

});


/* ==========================================
   ACTIVE NAVBAR
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});
