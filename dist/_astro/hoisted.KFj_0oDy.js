const savedTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const theme = savedTheme || systemTheme;
if (theme === "dark") {
  document.documentElement.classList.add("dark");
}

function setupThemeToggle() {
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenuToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });
  const themeToggleButton = document.getElementById("header-theme-button");
  function setTheme(theme) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }
  const savedTheme = localStorage.getItem("theme");
  setTheme(savedTheme || "light");
  themeToggleButton?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("theme")) {
      setTheme("light");
    }
  });
}
document.addEventListener("DOMContentLoaded", setupThemeToggle);
document.addEventListener("astro:after-swap", setupThemeToggle);

document.addEventListener(
  "astro:before-swap",
  (e) => [
    ...e.newDocument.head.querySelectorAll(
      'link[as="font"]'
    )
  ].forEach((link) => link.remove())
);
