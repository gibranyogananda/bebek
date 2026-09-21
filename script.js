/* =========================================
   WEB-JS
   Bebek Gongso Kinanthi
========================================= */


/* =========================================
   1. ACTIVE MENU NAVBAR
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar .nav-link");

function updateActiveMenu() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        const linkTarget = link.getAttribute("href");

        if (linkTarget === "#" + currentSection) {
            link.classList.add("active");
        }

    });
}

window.addEventListener("scroll", updateActiveMenu);


/* =========================================
   2. AUTOSCROLL NAVBAR
========================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            event.preventDefault();

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


/* =========================================
   3. MENU KATEGORI
========================================= */

const menuButtons = document.querySelectorAll(".btn-menu");
const menuItems = document.querySelectorAll(".menu-item");

menuButtons.forEach((button) => {

    button.addEventListener("click", function() {

        const selectedCategory = this.getAttribute("data-menu");


        // Mengubah tombol aktif
        menuButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        this.classList.add("active");


        // Menampilkan menu sesuai kategori
        menuItems.forEach((item) => {

            const itemCategory = item.getAttribute("data-category");

            if (itemCategory === selectedCategory) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* =========================================
   4. CHART.JS
========================================= */

const chartElement = document.getElementById("pendapatanChart");

if (chartElement) {

    const ctx = chartElement.getContext("2d");

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
                    label: "Pendapatan (Juta Rupiah)",

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
                        text: "Juta Rupiah"
                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Hari"
                    }

                }

            }

        }

    });

}


/* =========================================
   5. SAAT HALAMAN PERTAMA DIBUKA
   TAMPILKAN MENU BEBEK
========================================= */

document.addEventListener("DOMContentLoaded", function() {

    const defaultCategory = "bebek";

    menuItems.forEach((item) => {

        if (item.getAttribute("data-category") === defaultCategory) {

            item.style.display = "block";

        } else {

            item.style.display = "none";

        }

    });

    updateActiveMenu();

});
