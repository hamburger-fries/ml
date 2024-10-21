const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

document.addEventListener(
  "astro:before-swap",
  (e) => [
    ...e.newDocument.head.querySelectorAll(
      'link[as="font"]'
    )
  ].forEach((link) => link.remove())
);
