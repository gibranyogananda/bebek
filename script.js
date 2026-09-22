/* =====================================================
   WEB-JS BEBEK GONGSO KINANTHI
===================================================== */


/* =====================================================
   1. MENU CATEGORY
   Klik Bebek / Ayam / Coffee / dll
===================================================== */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuContents = document.querySelectorAll(".menu-content");

menuTabs.forEach(function(tab) {

    tab.addEventListener("click", function() {

        const selectedMenu = this.getAttribute("data-menu");

        // Hapus active dari semua tombol
        menuTabs.forEach(function(item) {
            item.classList.remove("active");
        });

        // Tambahkan active ke tombol yang dipilih
        this.classList.add("active");

        // Sembunyikan semua menu
        menuContents.forEach(function(content) {
            content.classList.remove("active");
        });

        // Tampilkan menu yang dipilih
        const selectedContent =
            document.getElementById("menu-" + selectedMenu);

        if (selectedContent) {
            selectedContent.classList.add("active");
        }

    });

});


/* =====================================================
   2. SMOOTH AUTOSCROLL NAVBAR
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // Tutup navbar Bootstrap pada HP
            const navbarMenu =
                document.getElementById("navbarNav");

            if (
                navbarMenu &&
                navbarMenu.classList.contains("show")
            ) {

                const navbarButton =
                    document.querySelector(".navbar-toggler");

                if (navbarButton) {
                    navbarButton.click();
                }

            }

        }

    });

});


/* =====================================================
   3. ACTIVE NAVBAR BERDASARKAN SECTION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);

window.addEventListener(
    "load",
    updateActiveNavigation
);


/* =====================================================
   4. CHART JS
===================================================== */

const chartCanvas =
    document.getElementById("salesChart");

if (chartCanvas) {

    const salesChart =
        new Chart(chartCanvas, {

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
                        label: "Penjualan (Juta Rupiah)",

                        data: [
                            1.5,
                            1.8,
                            1.4,
                            1.7,
                            2.0,
                            4.0,
                            4.5
                        ],

                        borderWidth: 1

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: true,

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


/* =====================================================
   5. LOG
===================================================== */

console.log(
    "Bebek Gongso Kinanthi Web-JS berhasil dijalankan."
);
