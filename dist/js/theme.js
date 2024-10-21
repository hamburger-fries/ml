function changeTheme() {
  const element = document.documentElement;
  const isDark = element.classList.contains("dark");
  const newTheme = isDark ? "light" : "dark";

  console.log("Changing theme to:", newTheme);

  if (newTheme === "dark") {
    element.classList.add("dark");
  } else {
    element.classList.remove("dark");
  }

  localStorage.theme = newTheme;
  updateThemeButtonStates();
}

function updateThemeButtonStates() {
  const isDark = document.documentElement.classList.contains("dark");
  const headerThemeButton = document.getElementById("header-theme-button");

  console.log("Updating button states, isDark:", isDark);

  if (headerThemeButton) {
    headerThemeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    headerThemeButton.innerHTML = isDark
      ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" /></svg>';
  } else {
    console.log("Header theme button not found");
  }
}

function initializeTheme() {
  const storedTheme = localStorage.theme;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  console.log("Initializing theme, storedTheme:", storedTheme, "prefersDark:", prefersDark);

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  if (!storedTheme) {
    localStorage.theme = prefersDark ? "dark" : "light";
  }

  console.log("Theme set to:", localStorage.theme);

  updateThemeButtonStates();
}

function initializeThemeToggle() {
  const headerThemeButton = document.getElementById("header-theme-button");
  
  if (headerThemeButton) {
    headerThemeButton.addEventListener("click", changeTheme);
    console.log("Header theme button initialized");
  } else {
    console.log("Header theme button not found");
  }
}

function handleThemeToggle() {
  initializeTheme();
  initializeThemeToggle();
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", handleThemeToggle);

// Set up event listeners for Astro page transitions
document.addEventListener("astro:after-swap", handleThemeToggle);

console.log("theme.js loaded");
