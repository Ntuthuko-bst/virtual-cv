const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Ntuthuko Simelane | Portfolio Website`;

// Smooth scroll when clicking navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
