// ======================================================
// BEBEK GONGSO KINANTHI
// JAVASCRIPT + FIREBASE FIRESTORE
// ======================================================


// ======================================================
// 1. KONFIGURASI FIREBASE
// ======================================================

// PENTING:
// Ganti API KEY dan APP ID dengan milik project Firebase kamu.

const firebaseConfig = {
    apiKey: "ISI_API_KEY_FIREBASE_KAMU",
    authDomain: "bebek-gongso-kinanthi.firebaseapp.com",
    projectId: "bebek-gongso-kinanthi",
    storageBucket: "bebek-gongso-kinanthi.firebasestorage.app",
    messagingSenderId: "856389419837",
    appId: "ISI_APP_ID_FIREBASE_KAMU"
};


// ======================================================
// 2. DATA MENU
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
// 3. REVIEW CADANGAN
// ======================================================

let sampleReviews = [
    {
        name: "Pelanggan",
        rating: 5,
        message: "Makanannya enak dan tempatnya nyaman."
    },

    {
        name: "Pelanggan",
        rating: 5,
        message: "Bebek gongsonya mantap. Cocok untuk makan bersama keluarga."
    }
];


// ======================================================
// 4. RENDER MENU
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
                                ${menu.name}
                            </h5>

                            <i class="bi bi-egg-fried text-success fs-4"></i>

                        </div>

                        <p class="text-muted mb-0">
                            Pilihan menu Bebek Gongso Kinanthi
                        </p>

                        <h5 class="text-success fw-bold mt-3 mb-0">
                            ${menu.price}
                        </h5>

                    </div>

                </div>

            </div>
        `;

    });

}


// ======================================================
// 5. RENDER REVIEW
// ======================================================

function renderReviews(reviews) {

    const container =
        document.getElementById("reviewContainer");

    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (!reviews || reviews.length === 0) {

        container.innerHTML = `
            <div class="col-12">

                <div class="alert alert-info">
                    Belum ada review pelanggan.
                </div>

            </div>
        `;

        return;
    }


    reviews.forEach(review => {

        const rating =
            Number(review.rating) || 5;


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
                            "${escapeHTML(review.message || "")}"
                        </p>

                        <strong>
                            ${escapeHTML(review.name || "Pelanggan")}
                        </strong>

                    </div>

                </div>

            </div>
        `;

    });

}


// ======================================================
// 6. MENCEGAH HTML INJECTION
// ======================================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ======================================================
// 7. FIREBASE
// ======================================================

let db = null;

let firebaseFunctions = null;


const firebaseReady = Promise.all([

    import(
        "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js"
    ),

    import(
        "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
    )

])

.then(async ([firebaseApp, firestore]) => {

    const {
        initializeApp
    } = firebaseApp;


    const {
        getFirestore,
        collection,
        getDocs,
        addDoc,
        serverTimestamp
    } = firestore;


    // Buat aplikasi Firebase
    const app =
        initializeApp(firebaseConfig);


    // Hubungkan Firestore
    db =
        getFirestore(app);


    firebaseFunctions = {

        collection,
        addDoc,
        serverTimestamp

    };


    console.log(
        "Firebase berhasil terhubung."
    );


    // ==================================================
    // AMBIL MENU DARI FIRESTORE
    // ==================================================

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
                            "Rp" +
                            Number(
                                data.price || 0
                            ).toLocaleString("id-ID"),

                        category:
                            normalisasiKategori(
                                data.category
                            )

                    };

                });


            menuData =
                databaseMenus;


            renderMenus("semua");


            console.log(
                "Menu berhasil diambil dari Firestore."
            );

        }

    }

    catch (error) {

        console.error(
            "Menu Firestore tidak dapat dibaca:",
            error
        );

    }


    // ==================================================
    // AMBIL REVIEW DARI FIRESTORE
    // ==================================================

    try {

        const reviewSnapshot =
            await getDocs(
                collection(db, "reviews")
            );


        const databaseReviews =
            reviewSnapshot.docs.map(doc => {

                return {

                    id: doc.id,

                    ...doc.data()

                };

            });


        if (databaseReviews.length > 0) {

            databaseReviews.sort((a, b) => {

                const timeA =
                    a.createdAt?.seconds || 0;

                const timeB =
                    b.createdAt?.seconds || 0;

                return timeB - timeA;

            });


            sampleReviews =
                databaseReviews;


            renderReviews(
                databaseReviews
            );

        }


        console.log(
            "Review berhasil dibaca dari Firestore."
        );

    }

    catch (error) {

        console.error(
            "Review Firestore tidak dapat dibaca:",
            error
        );

    }


    return true;

})

.catch(error => {

    console.error(
        "Firebase gagal dijalankan:",
        error
    );

    return false;

});


// ======================================================
// 8. DOM CONTENT LOADED
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // Tampilkan menu awal
        renderMenus("semua");


        // Tampilkan review awal
        renderReviews(sampleReviews);


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


                // Mencegah halaman refresh
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


                const name =
                    nameInput.value.trim();


                const rating =
                    Number(
                        ratingInput.value
                    );


                const message =
                    messageInput.value.trim();


                // ==================================================
                // VALIDASI
                // ==================================================

                if (name === "") {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Nama wajib diisi.";

                    return;

                }


                if (message === "") {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Pesan review wajib diisi.";

                    return;

                }


                if (
                    rating < 1 ||
                    rating > 5
                ) {

                    status.className =
                        "small mt-3 text-danger";

                    status.textContent =
                        "Rating harus 1 sampai 5.";

                    return;

                }


                // ==================================================
                // STATUS
                // ==================================================

                status.className =
                    "small mt-3 text-primary";

                status.textContent =
                    "Mengirim review...";


                try {

                    // Tunggu Firebase
                    const firebaseOK =
                        await firebaseReady;


                    // Firebase gagal
                    if (
                        !firebaseOK ||
                        !db ||
                        !firebaseFunctions
                    ) {

                        throw new Error(
                            "Firebase belum terhubung."
                        );

                    }


                    // ==================================================
                    // SIMPAN KE FIRESTORE
                    // ==================================================

                    const docRef =
                        await firebaseFunctions.addDoc(

                            firebaseFunctions.collection(
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
                                    firebaseFunctions.serverTimestamp()

                            }

                        );


                    console.log(
                        "Review berhasil disimpan:",
                        docRef.id
                    );


                    // ==================================================
                    // TAMPILKAN REVIEW BARU
                    // ==================================================

                    const newReview = {

                        id:
                            docRef.id,

                        name:
                            name,

                        rating:
                            rating,

                        message:
                            message

                    };


                    sampleReviews = [

                        newReview,

                        ...sampleReviews

                    ];


                    renderReviews(
                        sampleReviews
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

                }


                catch (error) {

                    console.error(
                        "ERROR FIREBASE:",
                        error
                    );


                    status.className =
                        "small mt-3 text-danger";


                    if (
                        error.code ===
                        "permission-denied"
                    ) {

                        status.textContent =
                            "Review ditolak. Periksa Firestore Rules.";

                    }

                    else if (
                        error.code ===
                        "invalid-api-key"
                    ) {

                        status.textContent =
                            "API Key Firebase salah.";

                    }

                    else {

                        status.textContent =
                            "Review gagal dikirim. Periksa konfigurasi Firebase.";

                    }

                }

            }

        );

    }

);


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


    if (
        kategori.includes("bebek")
    ) {

        return "bebek";

    }


    if (
        kategori.includes("ayam")
    ) {

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
