// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// Tutup menu setelah link diklik

document.querySelectorAll(".navbar nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


// ===============================
// REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".section-head, " +
    ".intro-panel, " +
    ".war-card, " +
    ".portrait-frame, " +
    ".person, " +
    ".location-card, " +
    ".wide-image, " +
    ".factor-grid article, " +
    ".timeline-item, " +
    ".process-photo, " +
    ".impact-statement, " +
    ".impact-list > div, " +
    ".archive-image, " +
    ".archive-copy, " +
    ".source-card, " +
    ".source-note"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// NAVBAR SHADOW
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 40) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(16,29,43,.10)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


// ===============================
// IMAGE ERROR HANDLING
// ===============================

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", () => {

        console.warn(
            "Gambar tidak ditemukan:",
            image.getAttribute("src")
        );

    });

});


// ===============================
// CONSOLE
// ===============================

console.log(
    "ARSIP BALI — Perlawanan Kerajaan-Kerajaan di Bali 1846–1849"
);