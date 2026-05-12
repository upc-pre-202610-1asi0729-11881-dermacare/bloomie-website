let currentLang = localStorage.getItem("lang") || "en";

async function loadLanguage(lang) {
  try {
    const res = await fetch(`i18n/${lang}.json`);

    if (!res.ok) {
      console.error("No se encontró el JSON:", lang);
      return;
    }

    const translations = await res.json();

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");

      if (translations[key]) {
        el.innerHTML = translations[key];
      } else {
        console.warn("Falta traducción para:", key);
      }
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

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});