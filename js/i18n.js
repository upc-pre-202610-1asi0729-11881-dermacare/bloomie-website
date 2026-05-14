let currentLang = localStorage.getItem("lang") || "en";

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMenu() {
  const toggle = document.getElementById("nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;

  const isOpen = links.classList.toggle("active");
  toggle.classList.toggle("open", isOpen);
  toggle.setAttribute("aria-expanded", isOpen);
  document.body.style.overflow = isOpen ? "hidden" : "";
}

// Close menu when a nav link is clicked (mobile)
document.addEventListener("click", (e) => {
  const links  = document.querySelector(".nav-links");
  const toggle = document.getElementById("nav-toggle");
  if (!links || !toggle) return;

  if (e.target.closest(".nav-links a")) {
    links.classList.remove("active");
    toggle.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
});

// Scrolled shadow on nav
window.addEventListener("scroll", () => {
  const nav = document.getElementById("site-nav");
  if (nav) nav.classList.toggle("scrolled", window.scrollY > 10);
}, { passive: true });

// ── LANGUAGE ──────────────────────────────────────────────────
async function loadLanguage(lang) {
  try {
    const res = await fetch(`i18n/${lang}.json`);
    if (!res.ok) { console.error("No se encontró el JSON:", lang); return; }
    const translations = await res.json();
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[key]) el.innerHTML = translations[key];
      else console.warn("Falta traducción para:", key);
    });
    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error("Error cargando idioma:", error);
  }
}

function toggleLanguage() {
  currentLang = currentLang === "en" ? "es" : "en";
  loadLanguage(currentLang);
  const btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = currentLang.toUpperCase();
}

document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
  const btn = document.getElementById("lang-btn");
  if (btn) btn.textContent = currentLang.toUpperCase();

  // Wire up toggle button (in case onclick attr not present)
  const toggle = document.getElementById("nav-toggle");
  if (toggle) toggle.addEventListener("click", toggleMenu);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
