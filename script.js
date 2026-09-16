// ======================================================
// DATA MENU
// Data lokal ini digunakan sebagai tampilan awal.
// Untuk tugas database, data dapat dipindahkan ke Firestore.
// ======================================================

const menuData = [
    { name: "Bebek Goreng", price: "Rp27.000", category: "bebek" },
    { name: "Bebek Kremes", price: "Rp30.000", category: "bebek" },
    { name: "Bebek Gongso", price: "Rp30.000", category: "bebek" },
    { name: "Bebek Lombok Ijo", price: "Rp32.000", category: "bebek" },
    { name: "Bebek Bacem", price: "Rp32.000", category: "bebek" },
    { name: "Kepala Bebek Goreng", price: "Rp15.000", category: "bebek" },
    { name: "Kepala Bebek Gongso", price: "Rp18.000", category: "bebek" },

    { name: "Ayam Kampung Goreng", price: "Rp27.000", category: "ayam" },
    { name: "Ayam Kampung Kremes", price: "Rp30.000", category: "ayam" },
    { name: "Ayam Kampung Gongso", price: "Rp30.000", category: "ayam" },
    { name: "Ayam Kampung Lombok Ijo", price: "Rp32.000", category: "ayam" },
    { name: "Ayam Negri Goreng", price: "Rp16.000", category: "ayam" },
    { name: "Ayam Negri Kremes", price: "Rp20.000", category: "ayam" },
    { name: "Ayam Negri Gongso", price: "Rp22.000", category: "ayam" },
    { name: "Ayam Negri Lombok Ijo", price: "Rp22.000", category: "ayam" },

    { name: "Pepes Nila", price: "Rp30.000", category: "lain" },
    { name: "Nila Telur Asin", price: "Rp35.000", category: "lain" },
    { name: "Nila Crispy", price: "Rp30.000", category: "lain" },
    { name: "Nila Goreng", price: "Rp16.000", category: "lain" },
    { name: "Lele Goreng", price: "Rp12.000", category: "lain" },
    { name: "Sup Iga", price: "Rp38.000", category: "lain" },
    { name: "Kangkung Tumis/Ca", price: "Rp10.000", category: "lain" },
    { name: "Tauge Tumis/Ca", price: "Rp10.000", category: "lain" },
    { name: "Terong Goreng", price: "Rp7.000", category: "lain" },
    { name: "Pete", price: "Rp7.000", category: "lain" },
    { name: "Kol Goreng", price: "Rp5.000", category: "lain" },
    { name: "Tahu Goreng", price: "Rp2.000", category: "lain" },
    { name: "Tempe Goreng", price: "Rp2.000", category: "lain" },

    { name: "Kopi Susu Kinanthi Hot", price: "Rp22.000", category: "coffee" },
    { name: "Lime Coffee Hot", price: "Rp20.000", category: "coffee" },
    { name: "Kopi Susu Blueberry Hot/Ice", price: "Rp20.000 / Rp22.000", category: "coffee" },
    { name: "Kopi Susu Caramel Hot/Ice", price: "Rp20.000 / Rp22.000", category: "coffee" },
    { name: "Coffee Latte Hot/Ice", price: "Rp18.000 / Rp20.000", category: "coffee" },
    { name: "Americano Hot/Ice", price: "Rp15.000 / Rp17.000", category: "coffee" },

    { name: "Mix Platter", price: "Rp25.000", category: "camilan" },
    { name: "Onion Ring", price: "Rp15.000", category: "camilan" },
    { name: "Tahu Cabai Garam", price: "Rp15.000", category: "camilan" },
    { name: "Tahu Tuna", price: "Rp15.000", category: "camilan" },
    { name: "Pisang Lumer", price: "Rp15.000", category: "camilan" },
    { name: "Kentang Goreng", price: "Rp15.000", category: "camilan" },
    { name: "Singkong Goreng", price: "Rp12.000", category: "camilan" },
    { name: "Mendoan", price: "Rp12.000", category: "camilan" },
    { name: "Cireng Goreng", price: "Rp10.000", category: "camilan" },
    { name: "Lumpia Goreng", price: "Rp15.000", category: "camilan" },

    { name: "Jahe Geprek", price: "Rp10.000", category: "minuman" },
    { name: "Jahe Serai", price: "Rp12.000", category: "minuman" },
    { name: "Jahe Susu", price: "Rp12.000", category: "minuman" },
    { name: "Hot Coklat", price: "Rp15.000", category: "minuman" },
    { name: "Hot Matcha", price: "Rp20.000", category: "minuman" },
    { name: "Soda Gembira", price: "Rp12.000", category: "minuman" },
    { name: "Lemon Squash", price: "Rp12.000", category: "minuman" },
    { name: "Alpukat", price: "Rp14.000", category: "minuman" },
    { name: "Mangga", price: "Rp14.000", category: "minuman" },
    { name: "Es Teh Manis", price: "Rp6.000", category: "minuman" },
    { name: "Air Mineral", price: "Rp6.000", category: "minuman" }
];

const sampleReviews = [
    { name: "Pelanggan", rating: 5, message: "Tempatnya nyaman dan menunya banyak." },
    { name: "Pelanggan", rating: 5, message: "Bebek gongsonya enak, cocok untuk makan bersama." },
    { name: "Pelanggan", rating: 4, message: "Parkir luas dan ada banyak pilihan minuman." }
];

const menuContainer = document.getElementById("menuContainer");
const reviewContainer = document.getElementById("reviewContainer");

function renderMenus(category = "semua") {
    const filtered = category === "semua"
        ? menuData
        : menuData.filter(item => item.category === category);

    menuContainer.innerHTML = filtered.map(item => `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card menu-card shadow-sm">
                <div class="card-body p-4">
                    <div class="d-flex justify-content-between align-items-start gap-3">
                        <h5 class="fw-bold mb-2">${item.name}</h5>
                        <span class="menu-price text-nowrap">${item.price}</span>
                    </div>
                    <small class="text-muted">Bebek Gongso Kinanthi</small>
                </div>
            </div>
        </div>
    `).join("");
}

function renderReviews(data) {
    reviewContainer.innerHTML = data.map(item => {
        const rating = Number(item.rating) || 5;
        return `
            <div class="col-12">
                <div class="card border-0 shadow-sm">
                    <div class="card-body">
                        <div class="d-flex justify-content-between gap-3">
                            <h5 class="fw-bold mb-1">${item.name}</h5>
                            <span class="text-warning">${"★".repeat(rating)}${"☆".repeat(5-rating)}</span>
                        </div>
                        <p class="mb-0 text-muted">${item.message}</p>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}

document.querySelectorAll(".menu-filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".menu-filter").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderMenus(button.dataset.category);
    });
});

renderMenus();
renderReviews(sampleReviews);


// ======================================================
// FIREBASE / FIRESTORE
// Bagian ini adalah koneksi database.
// Isi konfigurasi Firebase jika sudah membuat project.
// ======================================================

const firebaseConfig = {
    apiKey: "ISI_API_KEY",
    authDomain: "ISI_PROJECT_ID.firebaseapp.com",
    projectId: "ISI_PROJECT_ID",
    storageBucket: "ISI_PROJECT_ID.appspot.com",
    messagingSenderId: "ISI_SENDER_ID",
    appId: "ISI_APP_ID"
};

const firebaseSudahDiisi = !firebaseConfig.apiKey.startsWith("ISI_");

if (firebaseSudahDiisi) {
    import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")
        .then(async ({ initializeApp }) => {
            const { getFirestore, collection, getDocs, addDoc, serverTimestamp, query, orderBy } =
                await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");

            const app = initializeApp(firebaseConfig);
            const db = getFirestore(app);

            // DATABASE SECTION 1: menu
            try {
                const snapshot = await getDocs(collection(db, "menus"));
                if (!snapshot.empty) {
                    const databaseMenus = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                    menuData.length = 0;
                    databaseMenus.forEach(item => menuData.push(item));
                    renderMenus();
                }
            } catch (error) {
                console.log("Menu Firestore belum tersedia:", error);
            }

            // DATABASE SECTION 2: reviews
            try {
                const reviewQuery = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
                const snapshot = await getDocs(reviewQuery);
                if (!snapshot.empty) {
                    renderReviews(snapshot.docs.map(doc => doc.data()));
                }
            } catch (error) {
                console.log("Review Firestore belum tersedia:", error);
            }

            document.getElementById("reviewForm").addEventListener("submit", async (event) => {
                event.preventDefault();

                const name = document.getElementById("reviewName").value.trim();
                const rating = Number(document.getElementById("reviewRating").value);
                const message = document.getElementById("reviewMessage").value.trim();
                const status = document.getElementById("reviewStatus");

                try {
                    await addDoc(collection(db, "reviews"), {
                        name,
                        rating,
                        message,
                        createdAt: serverTimestamp()
                    });

                    status.className = "small mt-3 text-success";
                    status.textContent = "Review berhasil dikirim.";
                    event.target.reset();
                } catch (error) {
                    status.className = "small mt-3 text-danger";
                    status.textContent = "Review gagal dikirim. Cek konfigurasi Firestore.";
                }
            });
        })
        .catch(error => console.log("Firebase belum aktif:", error));
} else {
    document.getElementById("reviewStatus").className = "small mt-3 text-muted";
    document.getElementById("reviewStatus").textContent =
        "Mode demo aktif. Isi konfigurasi Firebase pada script.js agar review tersimpan ke database.";
}
