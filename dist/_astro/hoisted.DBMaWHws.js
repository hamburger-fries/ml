import './hoisted.KFj_0oDy.js';

function createDot() {
  const dot = document.createElement("div");
  dot.className = "absolute w-2 h-2 bg-gray-300 rounded-full";
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.top = `${Math.random() * 100}%`;
  dot.style.animation = `float ${5 + Math.random() * 5}s linear infinite`;
  return dot;
}
function animateDots() {
  const container = document.getElementById("animatedDots");
  if (container) {
    for (let i = 0; i < 50; i++) {
      container.appendChild(createDot());
    }
  }
}
document.addEventListener("astro:page-load", animateDots);
