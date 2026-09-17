// ======================================================
// BEBEK GONGSO KINANTHI
// JAVASCRIPT + FIREBASE FIRESTORE
// ======================================================


// ======================================================
// 1. KONFIGURASI FIREBASE
// ======================================================

// MASUKKAN CONFIG ASLI DARI FIREBASE
const firebaseConfig = {
    apiKey: "ISI_API_KEY_FIREBASE_KAMU",
    authDomain: "bebek-gongso-kinanthi.firebaseapp.com",
    projectId: "bebek-gongso-kinanthi",
    storageBucket: "bebek-gongso-kinanthi.firebasestorage.app",
    messagingSenderId: "856389419837",
    appId: "ISI_APP_ID_FIREBASE_KAMU"
};


// ======================================================
// 2. IMPORT FIREBASE
// ======================================================

import { initializeApp } from
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    serverTimestamp,
    onSnapshot
} from
    "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


// ======================================================
// 3. DATA MENU CADANGAN
// ======================================================

let menuData = [

    // ================= BEBEK =================

    {
        name: "Bebek Goreng",
        price: "Rp27.000",
        category: "bebek"
    },
    {
        name: "Bebek Kremes",
        price: "Rp30.000",
        category: "bebek"
    },
    {
        name: "Bebek Gongso",
        price: "Rp30.000",
        category: "bebek"
    },
    {
        name: "Bebek Lombok Ijo",
        price: "Rp32.000",
        category: "bebek"
    },
    {
        name: "Bebek Bacem",
        price: "Rp32.000",
        category: "bebek"
    },
    {
        name: "Kepala Bebek Goreng",
        price: "Rp15.000",
        category: "bebek"
    },
    {
        name: "Kepala Bebek Gongso",
        price: "Rp18.000",
        category: "bebek"
    },
    {
        name: "Bebek Utuh Goreng",
        price: "Rp130.000",
        category: "bebek"
    },
    {
        name: "Bebek Utuh Kremes",
        price: "Rp135.000",
        category: "bebek"
    },
    {
        name: "Bebek Utuh Gongso",
        price: "Rp135.000",
        category: "bebek"
    },
    {
        name: "Bebek Utuh Lombok Ijo",
        price: "Rp135.000",
        category: "bebek"
    },


    // ================= AYAM =================

    {
        name: "Ayam Kampung Goreng",
        price: "Rp27.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Kremes",
        price: "Rp30.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Gongso",
        price: "Rp30.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Lombok Ijo",
        price: "Rp32.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Goreng",
        price: "Rp16.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Kremes",
        price: "Rp20.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Gongso",
        price: "Rp22.000",
        category: "ayam"
    },
    {
        name: "Ayam Negri Lombok Ijo",
        price: "Rp22.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Utuh Goreng",
        price: "Rp135.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Utuh Kremes",
        price: "Rp140.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Utuh Gongso",
        price: "Rp140.000",
        category: "ayam"
    },
    {
        name: "Ayam Kampung Utuh Lombok Ijo",
        price: "Rp140.000",
        category: "ayam"
    },


    // ================= LAINNYA =================

    {
        name: "Pepes Nila",
        price: "Rp30.000",
        category: "lain"
    },
    {
        name: "Nila Telur Asin",
        price: "Rp35.000",
        category: "lain"
    },
    {
        name: "Nila Crispy",
        price: "Rp30.000",
        category: "lain"
    },
    {
        name: "Nila Goreng",
        price: "Rp16.000",
        category: "lain"
    },
    {
        name: "Lele Goreng",
        price: "Rp12.000",
        category: "lain"
    },
    {
        name: "Sup Iga",
        price: "Rp38.000",
        category: "lain"
    },
    {
        name: "Kangkung Tumis",
        price: "Rp10.000",
        category: "lain"
    },
    {
        name: "Tauge Tumis",
        price: "Rp10.000",
        category: "lain"
    },
    {
        name: "Terong Goreng",
        price: "Rp7.000",
        category: "lain"
    },
    {
        name: "Pete",
        price: "Rp7.000",
        category: "lain"
    },
    {
        name: "Kol Goreng",
        price: "Rp5.000",
        category: "lain"
    },
    {
        name: "Tahu Goreng",
        price: "Rp2.000",
        category: "lain"
    },
    {
        name: "Tempe Goreng",
        price: "Rp2.000",
        category: "lain"
    },
    {
        name: "Mix Tahu Tempe",
        price: "Rp4.000",
        category: "lain"
    },
    {
        name: "Nasi Sambal Lalap",
        price: "Rp6.000",
        category: "lain"
    },


    // ================= COFFEE =================

    {
        name: "Kopi Susu Kinanthi",
        price: "Rp22.000",
        category: "coffee"
    },
    {
        name: "Lime Coffee",
        price: "Rp20.000",
        category: "coffee"
    },
    {
        name: "Kopi Susu Blueberry",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Kopi Susu Caramel",
        price: "Rp20.000 / Rp22.000",
        category: "coffee"
    },
    {
        name: "Coffee Latte",
        price: "Rp18.000 / Rp20.000",
        category: "coffee"
    },
    {
        name: "Americano",
        price: "Rp15.000 / Rp17.000",
        category: "coffee"
    },
    {
        name: "Kopi Tubruk",
        price: "Rp15.000",
        category: "coffee"
    },


    // ================= CAMILAN =================

    {
        name: "Mix Platter",
        price: "Rp25.000",
        category: "camilan"
    },
    {
        name: "Onion Ring",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Tahu Cabai Garam",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Tahu Tuna",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Pisang Lumer",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Kentang Goreng",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Singkong Goreng",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Singkong Keju",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Singkong Coklat",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Mendoan",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Jamur Tepung",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Sosis Goreng",
        price: "Rp12.000",
        category: "camilan"
    },
    {
        name: "Cireng Goreng",
        price: "Rp10.000",
        category: "camilan"
    },
    {
        name: "Lumpia Goreng",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Pastel Goreng",
        price: "Rp15.000",
        category: "camilan"
    },
    {
        name: "Jenang",
        price: "Rp10.000",
        category: "camilan"
    },
    {
        name: "Krasikan",
        price: "Rp10.000",
        category: "camilan"
    },


    // ================= MINUMAN =================

    {
        name: "Jahe Geprek",
        price: "Rp10.000",
        category: "minuman"
    },
    {
        name: "Jahe Serai",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jahe Susu",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Kopi Jahe",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Hot Coklat",
        price: "Rp15.000",
        category: "minuman"
    },
    {
        name: "Hot Matcha",
        price: "Rp20.000",
        category: "minuman"
    },
    {
        name: "Hot Taro",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Soda Gembira",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Lemon Squash",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Orange Squash",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jeruk Kelapa Muda",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Kelapa Muda Gelas",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Kelapa Muda Utuh Murni",
        price: "Rp14.000",
        category: "minuman"
    },
    {
        name: "Kelapa Muda Utuh + Gula",
        price: "Rp15.000",
        category: "minuman"
    },
    {
        name: "Jus Alpukat",
        price: "Rp14.000",
        category: "minuman"
    },
    {
        name: "Jus Mangga",
        price: "Rp14.000",
        category: "minuman"
    },
    {
        name: "Jus Jambu",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jus Sirsak",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jus Melon",
        price: "Rp12.000",
        category: "minuman"
    },
    {
        name: "Jus Semangka",
        price: "Rp10.000",
        category: "minuman"
    },
    {
        name: "Teh Tawar",
        price: "Rp3.000",
        category: "minuman"
    },
    {
        name: "Teh Manis Panas",
        price: "Rp5.000",
        category: "minuman"
    },
    {
        name: "Es Teh Manis",
        price: "Rp6.000",
        category: "minuman"
    },
    {
        name: "Teh Leci",
        price: "Rp15.000",
        category: "minuman"
    },
    {
        name: "Jeruk Panas",
        price: "Rp6.000",
        category: "minuman"
    },
    {
        name: "Es Jeruk",
        price: "Rp7.000",
        category: "minuman"
    },
    {
        name: "Lemon Tea Panas",
        price: "Rp6.000",
        category: "minuman"
    },
    {
        name: "Es Lemon Tea",
        price: "Rp7.000",
        category: "minuman"
    },
    {
        name: "Milo Hot",
        price: "Rp8.000",
        category: "minuman"
    },
    {
        name: "Milo Es",
        price: "Rp10.000",
        category: "minuman"
    },
    {
        name: "Air Mineral",
        price: "Rp6.000",
        category: "minuman"
    },
    {
        name: "Air Putih / Air Es",
        price: "Rp2.000",
        category: "minuman"
    },
    {
        name: "Es Batu",
        price: "Rp2.000",
        category: "minuman"
    },
    {
        name: "Milkshake Coklat",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Milkshake Strawberry",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Milkshake Vanila",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Milkblend Coklat",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Milkblend Strawberry",
        price: "Rp18.000",
        category: "minuman"
    },
    {
        name: "Milkblend Taro",
        price: "Rp20.000",
        category: "minuman"
    },
    {
        name: "Milkblend Matcha",
        price: "Rp22.000",
        category: "minuman"
    }

];


// ======================================================
// 4. DATA REVIEW
// ======================================================

// Tidak ada review contoh.
// Review hanya berasal dari Firestore.
let sampleReviews = [];


// ======================================================
// 5. RENDER MENU
// ======================================================

function renderMenus(category = "semua") {

    const container =
        document.getElementById("menuContainer");

    if (!container) {
        return;
    }

    let filteredMenus;

    if (category === "semua") {
        filteredMenus = menuData;
    } else {
        filteredMenus =
            menuData.filter(
                menu => menu.category === category
            );
    }

    container.innerHTML = "";

    if (filteredMenus.length === 0) {

        container.innerHTML = `
            <div class="col-12 text-center">
                <div class="alert alert-warning">
                    Menu belum tersedia.
                </div>
            </div>
        `;

        return;
    }

    filteredMenus.forEach(menu => {

        container.innerHTML += `
            <div class="col-md-6 col-lg-4">

                <div class="card h-100 border-0 shadow-sm menu-card">

                    <div class="card-body p-4">

                        <div class="d-flex justify-content-between align-items-start">

                            <h5 class="fw-bold mb-2">
                                ${escapeHTML(menu.name)}
                            </h5>

                            <i class="bi bi-egg-fried text-success fs-4"></i>

                        </div>

                        <p class="text-muted mb-0">
                            Pilihan menu Bebek Gongso Kinanthi
                        </p>

                        <h5 class="text-success fw-bold mt-3 mb-0">
                            ${escapeHTML(formatPrice(menu.price))}
                        </h5>

                    </div>

                </div>

            </div>
        `;

    });

}


// ======================================================
// 6. FORMAT HARGA
// ======================================================

function formatPrice(price) {

    if (price === null || price === undefined) {
        return "Harga belum tersedia";
    }

    // Kalau sudah berupa string Rp
    if (typeof price === "string") {

        const text = price.trim();

        if (text.toLowerCase().includes("rp")) {
            return text;
        }

        // Contoh: "27000"
        const number = Number(
            text.replace(/\D/g, "")
        );

        if (!isNaN(number) && number > 0) {

            return "Rp" +
                number.toLocaleString("id-ID");

        }

        return text;
    }

    // Kalau berupa angka
    const number = Number(price);

    if (!isNaN(number)) {

        return "Rp" +
            number.toLocaleString("id-ID");

    }

    return "Harga belum tersedia";
}


// ======================================================
// 7. RENDER REVIEW
// ======================================================

function renderReviews(reviews) {

    const container =
        document.getElementById("reviewContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    // Hanya tampilkan review yang valid
    const validReviews =
        (reviews || []).filter(review => {

            const name =
                String(review.name || "").trim();

            const message =
                String(review.message || "").trim();

            const rating =
                Number(review.rating);

            return (
                name !== "" &&
                message !== "" &&
                rating >= 1 &&
                rating <= 5
            );

        });

    if (validReviews.length === 0) {

        container.innerHTML = `
            <div class="col-12">

                <div class="alert alert-info">
                    Belum ada review pelanggan.
                </div>

            </div>
        `;

        return;
    }


    validReviews.forEach(review => {

        const rating =
            Number(review.rating);

        let stars = "";

        for (let i = 1; i <= 5; i++) {

            if (i <= rating) {
                stars += "★";
            } else {
                stars += "☆";
            }

        }

        container.innerHTML += `
            <div class="col-md-6">

                <div class="card border-0 shadow-sm h-100">

                    <div class="card-body p-4">

                        <div class="text-warning fs-5 mb-2">
                            ${stars}
                        </div>

                        <p class="mb-3">
                            "${escapeHTML(review.message)}"
                        </p>

                        <strong>
                            ${escapeHTML(review.name)}
                        </strong>

                    </div>

                </div>

            </div>
        `;

    });

}


// ======================================================
// 8. MENCEGAH HTML INJECTION
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = String(text);

    return div.innerHTML;

}


// ======================================================
// 9. NORMALISASI KATEGORI
// ======================================================

function normalisasiKategori(category) {

    if (!category) {
        return "lain";
    }

    const kategori =
        String(category)
            .toLowerCase()
            .trim();

    if (kategori.includes("bebek")) {
        return "bebek";
    }

    if (kategori.includes("ayam")) {
        return "ayam";
    }

    if (
        kategori.includes("coffee") ||
        kategori.includes("kopi")
    ) {
        return "coffee";
    }

    if (
        kategori.includes("camilan") ||
        kategori.includes("snack")
    ) {
        return "camilan";
    }

    if (
        kategori.includes("minuman") ||
        kategori.includes("drink") ||
        kategori.includes("jus")
    ) {
        return "minuman";
    }

    return "lain";
}


// ======================================================
// 10. FIREBASE INITIALIZATION
// ======================================================

let db = null;

let firebaseAktif = false;


// Cek apakah config sudah diisi
const firebaseConfigValid =
    firebaseConfig.apiKey &&
    firebaseConfig.appId &&
    firebaseConfig.apiKey !== "ISI_API_KEY_FIREBASE_KAMU" &&
    firebaseConfig.appId !== "ISI_APP_ID_FIREBASE_KAMU";


async function mulaiFirebase() {

    if (!firebaseConfigValid) {

        console.warn(
            "Firebase belum dikonfigurasi. API Key dan App ID belum diisi."
        );

        return false;
    }

    try {

        // Inisialisasi Firebase
        const app =
            initializeApp(firebaseConfig);

        // Hubungkan Firestore
        db =
            getFirestore(app);

        firebaseAktif = true;

        console.log(
            "Firebase berhasil terhubung."
        );

        return true;

    }

    catch (error) {

        console.error(
            "Firebase gagal diinisialisasi:",
            error
        );

        return false;
    }
}


// ======================================================
// 11. AMBIL MENU DARI FIRESTORE
// ======================================================

async function ambilMenuFirestore() {

    if (!firebaseAktif || !db) {
        return;
    }

    try {

        const menuSnapshot =
            await getDocs(
                collection(db, "menus")
            );

        if (!menuSnapshot.empty) {

            const databaseMenus =
                menuSnapshot.docs.map(doc => {

                    const data =
                        doc.data();

                    return {

                        name:
                            data.name || "Menu",

                        price:
                            formatPrice(data.price),

                        category:
                            normalisasiKategori(
                                data.category
                            )

                    };

                });

            // Ganti menu cadangan dengan menu Firestore
            menuData =
                databaseMenus;

            renderMenus("semua");

            console.log(
                "Menu berhasil diambil dari Firestore."
            );

        } else {

            console.log(
                "Collection menus kosong. Menggunakan menu cadangan."
            );

        }

    }

    catch (error) {

        console.error(
            "Menu Firestore tidak dapat dibaca:",
            error
        );

        // Kalau gagal, tetap tampilkan menu cadangan
        renderMenus("semua");
    }

}


// ======================================================
// 12. AMBIL REVIEW REAL-TIME
// ======================================================

function pantauReviewFirestore() {

    if (!firebaseAktif || !db) {
        return;
    }

    try {

        const reviewRef =
            collection(db, "reviews");


        // onSnapshot membuat tampilan otomatis berubah
        // ketika review ditambah atau dihapus di Firestore
        onSnapshot(

            reviewRef,

            snapshot => {

                const databaseReviews =
                    snapshot.docs.map(doc => {

                        return {

                            id: doc.id,

                            ...doc.data()

                        };

                    });


                // Urutkan review terbaru di atas
                databaseReviews.sort((a, b) => {

                    const timeA =
                        a.createdAt?.seconds || 0;

                    const timeB =
                        b.createdAt?.seconds || 0;

                    return timeB - timeA;

                });


                // Simpan data terbaru
                sampleReviews =
                    databaseReviews;


                // Tampilkan ulang
                renderReviews(
                    databaseReviews
                );


                console.log(
                    "Review diperbarui dari Firestore."
                );

            },

            error => {

                console.error(
                    "Review Firestore tidak dapat dibaca:",
                    error
                );

                renderReviews([]);

            }

        );

    }

    catch (error) {

        console.error(
            "Gagal memantau review:",
            error
        );

    }

}


// ======================================================
// 13. DOM CONTENT LOADED
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    async function () {


        // ==================================================
        // TAMPILKAN DATA AWAL
        // ==================================================

        renderMenus("semua");

        renderReviews([]);


        // ==================================================
        // FILTER MENU
        // ==================================================

        const filterButtons =
            document.querySelectorAll(
                ".menu-filter"
            );


        filterButtons.forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    filterButtons.forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                        btn.classList.remove(
                            "btn-hijau"
                        );

                        btn.classList.add(
                            "btn-outline-success"
                        );

                    });


                    this.classList.add(
                        "active"
                    );

                    this.classList.remove(
                        "btn-outline-success"
                    );

                    this.classList.add(
                        "btn-hijau"
                    );


                    const category =
                        this.getAttribute(
                            "data-category"
                        );


                    renderMenus(category);

                }
            );

        });


        // ==================================================
        // JALANKAN FIREBASE
        // ==================================================

        const firebaseOK =
            await mulaiFirebase();


        if (firebaseOK) {

            // Ambil menu dari Firestore
            await ambilMenuFirestore();

            // Pantau review secara real-time
            pantauReviewFirestore();

        }


        // ==================================================
        // FORM REVIEW
        // ==================================================

        const reviewForm =
            document.getElementById(
                "reviewForm"
            );


        if (!reviewForm) {

            console.warn(
                "Form review tidak ditemukan."
            );

            return;
        }


        reviewForm.addEventListener(
            "submit",
            async function (event) {

                // Jangan refresh halaman
                event.preventDefault();


                const nameInput =
                    document.getElementById(
                        "reviewName"
                    );


                const ratingInput =
                    document.getElementById(
                        "reviewRating"
                    );


                const messageInput =
                    document.getElementById(
                        "reviewMessage"
                    );


                const status =
                    document.getElementById(
                        "reviewStatus"
                    );


                const submitButton =
                    reviewForm.querySelector(
                        'button[type="submit"]'
                    );


                const name =
                    nameInput.value.trim();


                const rating =
                    Number(
                        ratingInput.value
                    );


                const message =
                    messageInput.value.trim();


                // ==================================================
                // VALIDASI NAMA
                // ==================================================

                if (name === "") {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Nama wajib diisi.";

                    nameInput.focus();

                    return;
                }


                // ==================================================
                // VALIDASI PESAN
                // ==================================================

                if (message === "") {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Pesan review wajib diisi.";

                    messageInput.focus();

                    return;
                }


                // ==================================================
                // VALIDASI RATING
                // ==================================================

                if (
                    !Number.isInteger(rating) ||
                    rating < 1 ||
                    rating > 5
                ) {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Rating harus 1 sampai 5.";

                    ratingInput.focus();

                    return;
                }


                // ==================================================
                // CEK FIREBASE
                // ==================================================

                if (!firebaseAktif || !db) {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Firebase belum terhubung. Periksa konfigurasi Firebase.";

                    return;
                }


                // ==================================================
                // STATUS MENGIRIM
                // ==================================================

                status.className =
                    "small mt-3 text-primary";

                status.textContent =
                    "Mengirim review...";


                // Matikan tombol sementara
                if (submitButton) {
                    submitButton.disabled = true;
                }


                try {

                    // ==================================================
                    // SIMPAN REVIEW KE FIRESTORE
                    // ==================================================

                    const docRef =
                        await addDoc(

                            collection(
                                db,
                                "reviews"
                            ),

                            {

                                name:
                                    name,

                                rating:
                                    rating,

                                message:
                                    message,

                                createdAt:
                                    serverTimestamp()

                            }

                        );


                    console.log(
                        "Review berhasil disimpan:",
                        docRef.id
                    );


                    // ==================================================
                    // SUKSES
                    // ==================================================

                    status.className =
                        "small mt-3 text-success";

                    status.textContent =
                        "Review berhasil dikirim!";


                    // Bersihkan form
                    reviewForm.reset();


                    // onSnapshot akan otomatis
                    // menampilkan review baru

                }


                catch (error) {

                    console.error(
                        "ERROR FIREBASE:",
                        error
                    );


                    status.className =
                        "small mt-3 text-danger";


                    // ==================================================
                    // ERROR PERMISSION
                    // ==================================================

                    if (
                        error.code ===
                        "permission-denied"
                    ) {

                        status.textContent =
                            "Review ditolak. Periksa Firestore Rules.";

                    }


                    // ==================================================
                    // ERROR API KEY
                    // ==================================================

                    else if (
                        error.code ===
                        "auth/invalid-api-key" ||
                        error.code ===
                        "invalid-api-key"
                    ) {

                        status.textContent =
                            "API Key Firebase salah.";

                    }


                    // ==================================================
                    // FIRESTORE BELUM AKTIF
                    // ==================================================

                    else if (
                        error.code ===
                        "failed-precondition"
                    ) {

                        status.textContent =
                            "Firestore belum siap. Periksa database Firebase.";

                    }


                    // ==================================================
                    // INTERNET
                    // ==================================================

                    else if (
                        error.code ===
                        "unavailable"
                    ) {

                        status.textContent =
                            "Koneksi internet bermasalah. Coba lagi.";

                    }


                    // ==================================================
                    // ERROR LAIN
                    // ==================================================

                    else {

                        status.textContent =
                            "Review gagal dikirim. Periksa Firebase dan Firestore Rules.";

                    }

                }


                finally {

                    // Aktifkan tombol kembali
                    if (submitButton) {
                        submitButton.disabled = false;
                    }

                }

            }
        );

    }
);
