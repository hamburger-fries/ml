function changeTheme() {
  const element = document.documentElement
  const isDark = element.classList.contains("dark")
  const newTheme = isDark ? "light" : "dark"

  const css = document.createElement("style")
  css.appendChild(
    document.createTextNode(
      `* {
           -webkit-transition: none !important;
           -moz-transition: none !important;
           -o-transition: none !important;
           -ms-transition: none !important;
           transition: none !important;
        }`,
    ),
  )
  document.head.appendChild(css)

  if (newTheme === "dark") {
    element.classList.add("dark")
  } else {
    element.classList.remove("dark")
  }

  // Force a reflow
  void window.getComputedStyle(css).opacity
  document.head.removeChild(css)
  localStorage.theme = newTheme

  // Update button states
  updateThemeButtonStates()
}

function updateThemeButtonStates() {
  const isDark = document.documentElement.classList.contains("dark")
  const headerThemeButton = document.getElementById("header-theme-button")
  const drawerThemeButton = document.getElementById("drawer-theme-button")

  if (headerThemeButton) {
    headerThemeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme")
    headerThemeButton.innerHTML = isDark
      ? '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>'
      : '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>'
  }

  if (drawerThemeButton) {
    drawerThemeButton.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme")
    drawerThemeButton.innerHTML = isDark ? "Switch to light theme" : "Switch to dark theme"
  }
}

function initializeTheme() {
  const storedTheme = localStorage.theme
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }

  localStorage.theme = document.documentElement.classList.contains("dark") ? "dark" : "light"
  updateThemeButtonStates()
}

function initializeThemeButtons() {
  const headerThemeButton = document.getElementById("header-theme-button")
  const drawerThemeButton = document.getElementById("drawer-theme-button")
  headerThemeButton?.addEventListener("click", changeTheme)
  drawerThemeButton?.addEventListener("click", changeTheme)
}

// Initialize theme on page load
initializeTheme()

// Set up event listeners
window.addEventListener("load", initializeThemeButtons)
document.addEventListener("astro:after-swap", initializeTheme)
document.addEventListener("astro:after-swap", initializeThemeButtons)
