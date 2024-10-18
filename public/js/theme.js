// Function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// Function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately set the theme to light on page load
setTheme('theme-light');

// Bind the toggle to the button click event
if (document.getElementById('themeButton')) {
    document.getElementById('themeButton').addEventListener('click', toggleTheme);
}
