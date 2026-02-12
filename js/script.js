// ===== Toggle Mobile Menu =====
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// ===== Current Time =====
function updateTime() {
    const now = new Date();
    document.getElementById("currentTime").textContent = now.toString();
}
updateTime();

// ===== Form Submit =====
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("outNama").textContent =
        document.getElementById("nama").value;

    document.getElementById("outTanggal").textContent =
        document.getElementById("tanggal").value;

    document.getElementById("outGender").textContent =
        document.querySelector('input[name="gender"]:checked').value;

    document.getElementById("outPesan").textContent =
        document.getElementById("pesan").value;

    updateTime();
});

// ===== Fade In Animation On Scroll =====
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add("show");
        }
    });
});
