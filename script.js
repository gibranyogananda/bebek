// ======================================================
// FIREBASE / FIRESTORE
// ======================================================

// Konfigurasi Firebase Web App
const firebaseConfig = {
    appId: "ISI_APP_ID_DARI_FIREBASE"
    authDomain: "bebek-gongso-kinanthi.firebaseapp.com",
    projectId: "bebek-gongso-kinanthi",
    storageBucket: "bebek-gongso-kinanthi.firebasestorage.app",
    messagingSenderId: "856389419837",
    appId: "ISI_APP_ID_DARI_FIREBASE"
};

// Jalankan Firebase
import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js")
    .then(async ({ initializeApp }) => {

        // Import Firestore
        const {
            getFirestore,
            collection,
            getDocs,
            addDoc,
            serverTimestamp,
            query,
            orderBy
        } = await import(
            "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
        );

        // Inisialisasi Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // ==================================================
        // DATABASE SECTION 1
        // MENU DARI FIRESTORE
        // ==================================================

        try {
            const menuSnapshot = await getDocs(
                collection(db, "menus")
            );

            if (!menuSnapshot.empty) {

                const databaseMenus = menuSnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));

                // Hapus data menu lokal
                menuData.length = 0;

                // Masukkan data dari Firestore
                databaseMenus.forEach(item => {
                    menuData.push({
                        name: item.name,
                        price: "Rp" + Number(item.price).toLocaleString("id-ID"),
                        category: String(item.category).toLowerCase()
                    });
                });

                // Tampilkan menu dari database
                renderMenus();
            }

        } catch (error) {
            console.log(
                "Data menu dari Firestore belum tersedia:",
                error
            );
        }


        // ==================================================
        // DATABASE SECTION 2
        // REVIEW DARI FIRESTORE
        // ==================================================

        try {

            const reviewQuery = query(
                collection(db, "reviews"),
                orderBy("createdAt", "desc")
            );

            const reviewSnapshot = await getDocs(reviewQuery);

            if (!reviewSnapshot.empty) {

                const databaseReviews = reviewSnapshot.docs.map(
                    doc => ({
                        id: doc.id,
                        ...doc.data()
                    })
                );

                renderReviews(databaseReviews);
            }

        } catch (error) {

            console.log(
                "Data review dari Firestore belum tersedia:",
                error
            );
        }


        // ==================================================
        // FORM REVIEW
        // Menyimpan review baru ke Firestore
        // ==================================================

        const reviewForm = document.getElementById("reviewForm");

        if (reviewForm) {

            reviewForm.addEventListener(
                "submit",
                async function (event) {

                    event.preventDefault();

                    const name =
                        document.getElementById(
                            "reviewName"
                        ).value.trim();

                    const rating =
                        Number(
                            document.getElementById(
                                "reviewRating"
                            ).value
                        );

                    const message =
                        document.getElementById(
                            "reviewMessage"
                        ).value.trim();

                    const status =
                        document.getElementById(
                            "reviewStatus"
                        );

                    try {

                        await addDoc(
                            collection(db, "reviews"),
                            {
                                name: name,
                                rating: rating,
                                message: message,
                                createdAt:
                                    serverTimestamp()
                            }
                        );

                        status.className =
                            "small mt-3 text-success";

                        status.textContent =
                            "Review berhasil dikirim.";

                        reviewForm.reset();

                    } catch (error) {

                        console.error(
                            "Error:",
                            error
                        );

                        status.className =
                            "small mt-3 text-danger";

                        status.textContent =
                            "Review gagal dikirim. Cek Firestore.";
                    }
                }
            );
        }

    })
    .catch(error => {

        console.error(
            "Firebase gagal dijalankan:",
            error
        );

    });
