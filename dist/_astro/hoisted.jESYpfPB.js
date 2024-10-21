import './hoisted.O59icRPW.js';

function setupGallery() {
  const images = document.querySelectorAll(".gallery-image");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById(
    "modalImage"
  );
  function openModal() {
    modal?.classList.remove("hidden");
    setTimeout(() => modal?.classList.remove("opacity-0"), 10);
  }
  function closeModal() {
    modal?.classList.add("opacity-0");
    setTimeout(() => modal?.classList.add("hidden"), 300);
  }
  function setImageSize() {
    if (modalImage) {
      const viewportWidth = window.innerWidth * 0.9;
      const viewportHeight = window.innerHeight * 0.9;
      const imgAspectRatio = modalImage.naturalWidth / modalImage.naturalHeight;
      const viewportAspectRatio = viewportWidth / viewportHeight;
      if (imgAspectRatio > viewportAspectRatio) {
        modalImage.style.width = "90vw";
        modalImage.style.height = "auto";
      } else {
        modalImage.style.width = "auto";
        modalImage.style.height = "90vh";
      }
    }
  }
  images.forEach((img) => {
    img.addEventListener("click", () => {
      if (img instanceof HTMLImageElement && modalImage) {
        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalImage.onload = setImageSize;
        openModal();
      }
    });
  });
  modal?.addEventListener("click", closeModal);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
  window.addEventListener("resize", setImageSize);
}
setupGallery();
document.addEventListener("astro:page-load", setupGallery);
