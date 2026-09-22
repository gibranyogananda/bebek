/* =========================================================
   DATA MENU
========================================================= */

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



/* =========================================================
   MEMBUAT LIST MENU
========================================================= */

function createMenuList(items) {

    let html = '<ul class="menu-list">';


    items.forEach(function(item) {

        html += `

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


    html += "</ul>";


    return html;

}



/* =========================================================
   MEMBUAT GROUP MENU
========================================================= */

function createMenuGroups(groups) {

    let html = "";


    groups.forEach(function(group) {

        html += `

            <h4 class="menu-group-title">
                ${group.title}
            </h4>

        `;


        html += createMenuList(
            group.items
        );

    });


    return html;

}



/* =========================================================
   MEMBUAT POSTER
========================================================= */

function createPosters(menu) {

    const images = menu.images
        ? menu.images
        : [menu.image];


    let html = `

        <div class="menu-posters-wrapper">

    `;


    images.forEach(function(image) {

        html += `

            <img

                src="${image}"

                alt="${menu.title}"

                class="menu-poster"

                onclick="openImage('${image}')"

            >

        `;

    });


    html += `

        </div>

    `;


    return html;

}



/* =========================================================
   MENAMPILKAN MENU
========================================================= */

function showMenu(
    category,
    clickedButton
) {

    const menu = menus[category];


    if (!menu) {

        return;

    }


    /* Active button */

    document
        .querySelectorAll(".menu-btn")
        .forEach(function(button) {

            button.classList.remove("active");

        });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    /* Isi menu */

    let menuHTML = "";


    if (menu.groups) {

        menuHTML =
            createMenuGroups(
                menu.groups
            );

    } else {

        menuHTML =
            createMenuList(
                menu.items
            );

    }


    const content =
        document.getElementById(
            "menuContent"
        );


    if (!content) {

        return;

    }


    content.innerHTML = `

        <div class="menu-content-row">


            <div class="menu-list-wrapper">


                <h3>
                    ${menu.title}
                </h3>


                ${menuHTML}


            </div>


            ${createPosters(menu)}


        </div>

    `;

}



/* =========================================================
   IMAGE MODAL
========================================================= */

function openImage(src) {

    const modal =
        document.getElementById(
            "imageModal"
        );


    const image =
        document.getElementById(
            "modalImage"
        );


    if (!modal || !image) {

        return;

    }


    image.src = src;


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}



function closeImage(event) {

    if (

        event &&

        event.target &&

        event.target.id !==
            "imageModal" &&

        !event.target.classList.contains(
            "modal-close"
        )

    ) {

        return;

    }


    const modal =
        document.getElementById(
            "imageModal"
        );


    if (!modal) {

        return;

    }


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}



/* =========================================================
   WHATSAPP
========================================================= */

/*
    NOMOR WHATSAPP:

    1. 081226956567
    2. 08139869925
*/


function pilihWhatsApp() {

    const pilihan = prompt(

        "Pilih nomor WhatsApp:\n\n" +

        "1. 081226956567\n" +

        "2. 08139869925\n\n" +

        "Ketik 1 atau 2:"

    );


    if (pilihan === "1") {

        chatWA1();

    }


    else if (pilihan === "2") {

        chatWA2();

    }


    else if (pilihan !== null) {

        alert(

            "Pilihan tidak valid.\n" +

            "Silakan pilih nomor 1 atau 2."

        );

    }

}



/* WhatsApp nomor 1 */

function chatWA1() {

    window.open(

        "https://wa.me/6281226956567",

        "_blank"

    );

}



/* WhatsApp nomor 2 */

function chatWA2() {

    window.open(

        "https://wa.me/628139869925",

        "_blank"

    );

}



/* =========================================================
   NAVBAR SMOOTH SCROLL
========================================================= */

document
    .querySelectorAll(".nav-link")
    .forEach(function(link) {


        link.addEventListener(
            "click",
            function(event) {


                const href =
                    this.getAttribute(
                        "href"
                    );


                const target =
                    document.querySelector(
                        href
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth"

                    });


                    /*
                       Tutup navbar mobile
                       setelah menu diklik.
                    */

                    const navbarCollapse =
                        document.getElementById(
                            "navbarNav"
                        );


                    if (

                        navbarCollapse &&

                        navbarCollapse.classList.contains(
                            "show"
                        )

                    ) {

                        const bsCollapse =
                            bootstrap.Collapse
                                .getInstance(
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



/* =========================================================
   ACTIVE NAVBAR SAAT SCROLL
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    function() {


        let current = "";


        sections.forEach(
            function(section) {


                const sectionTop =
                    section.offsetTop - 120;


                const sectionHeight =
                    section.offsetHeight;


                if (

                    window.scrollY >=
                        sectionTop &&

                    window.scrollY <
                        sectionTop +
                        sectionHeight

                ) {

                    current =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        document
            .querySelectorAll(
                ".nav-link"
            )
            .forEach(
                function(link) {


                    link.classList.remove(
                        "active"
                    );


                    if (

                        link.getAttribute(
                            "href"
                        ) ===
                        "#" + current

                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                }
            );

    }
);



/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {


        /* =================================================
           TAMPILKAN MENU BEBEK PERTAMA
        ================================================= */


        const firstButton =
            document.querySelector(
                ".menu-btn"
            );


        if (firstButton) {

            showMenu(
                "bebek",
                firstButton
            );

        }



        /* =================================================
           CHART JS
        ================================================= */


        const chartElement =
            document.getElementById(
                "menuChart"
            );


        if (

            chartElement &&

            typeof Chart !==
                "undefined"

        ) {


            new Chart(

                chartElement,

                {


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

                                label:
                                    "Jumlah Pilihan Menu",


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


                        maintainAspectRatio:
                            false,


                        plugins: {


                            legend: {

                                display: true

                            }

                        },


                        scales: {


                            x: {

                                ticks: {

                                    autoSkip: false

                                }

                            },


                            y: {

                                beginAtZero: true,

                                ticks: {

                                    stepSize: 5

                                }

                            }

                        }

                    }

                }

            );

        }

    }

);



/* =========================================================
   TOMBOL ESC UNTUK MENUTUP FOTO
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {


        if (
            event.key === "Escape"
        ) {


            const modal =
                document.getElementById(
                    "imageModal"
                );


            if (

                modal &&

                modal.classList.contains(
                    "show"
                )

            ) {


                modal.classList.remove(
                    "show"
                );


                document.body.style.overflow =
                    "";

            }

        }

    }
);
