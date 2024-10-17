import './hoisted.KFj_0oDy.js';
import './Gallery.astro_astro_type_script_index_0_lang.DWNpJo17.js';

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-image");
  images.forEach((img, index) => {
    if (img instanceof HTMLImageElement) {
      img.addEventListener("error", function() {
        console.error(`Failed to load image ${index + 1}: ${this.src}`);
        this.src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23eee%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-size%3D%2214%22%20fill%3D%22%23aaa%22%3EError%3C%2Ftext%3E%3C%2Fsvg%3E";
        this.alt = "Error loading image";
      });
      img.addEventListener("load", function() {
        console.log(`Successfully loaded image ${index + 1}: ${this.src}`);
      });
    }
  });
});
function checkImages() {
  const images = document.querySelectorAll(".gallery-image");
  images.forEach((img, index) => {
    if (img instanceof HTMLImageElement) {
      fetch(img.src).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.blob();
      }).then(() => console.log(`Image ${index + 1} is accessible`)).catch((e) => console.error(`Error with image ${index + 1}: ${e.message}`));
    }
  });
}
setTimeout(checkImages, 2e3);
