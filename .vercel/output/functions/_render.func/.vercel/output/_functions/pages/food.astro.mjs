import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$Food = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "AFRICA Coffee copy.JPG",
    "Balsamic Roasted Carrots 2 copy.jpg",
    "Balsamic Salad copy.jpg",
    "Berries and cream 2 ip2 copy.jpg",
    "berries_stitched copy 2.jpg",
    "Broccoli Romanesco and radishes copy.jpg",
    "Chloe's_Chocolate.jpg",
    "Chloe's_Mango copy.jpg",
    "Chloe's_Pineapple copy.jpg",
    "Chloe's_Raspberry.jpg",
    "Chloe's_Tangerine copy.jpg",
    "Chloes_Raspberry copy.jpg",
    "Chocolate copy.jpg",
    "Colored pasta copy.jpg",
    "food 16 copy.jpg",
    "food 22 copy.jpg",
    "food 32 copy.jpg",
    "food 33 copy.jpg",
    "food 35 copy.jpg",
    "food 37 copy.jpg",
    "food 38 copy.jpg",
    "food 43 copy.jpg",
    "food 45 copy.jpg",
    "food 47 copy.jpg",
    "food 48 copy.jpg",
    "food 49 copy.jpg",
    "food 51 copy.jpg",
    "food 54 copy.jpg",
    "Food 55 copy.jpg",
    "food 57 copy.jpg",
    "food 58 copy.jpg",
    "food 59 copy.jpg",
    "food 60 copy.jpg",
    "food 61 copy.jpg",
    "food 62 copy.jpg",
    "food 63 copy.jpg",
    "food 64 copy.jpg",
    "food 65 copy.jpg",
    "food 66 copy.jpg",
    "food 67 copy.jpg",
    "food 71 copy.jpg",
    "food left copy.jpg",
    "Global Knife Bread copy.jpg",
    "Global Knife TOMATO copy.jpg",
    "Global Knife w Sweet Potato copy.jpg",
    "Heirloom Tomato 1 copy.jpg",
    "Heirloom tomatoes Heart copy.jpg",
    "Heirloom_Tomoato_cu copy.jpg",
    "ITALY Spaghetti copy.jpg",
    "K-Candy copy.jpg",
    "K-Tomatoes copy.jpg",
    "Marie's HEART  final copy.jpg",
    "New Port image 4 copy.jpg",
    "P bolthouse copy.jpg",
    "P breville espresso copy.jpg",
    "P breville juicer copy.jpg",
    "P cooktop copy.jpg",
    "P ice tray copy.jpg",
    "P jitb lettuce copy.jpg",
    "P maries copy.jpg",
    "P maries sink copy.jpg",
    "P pasta copy.jpg",
    "P pear copy.jpg",
    "P sandwich copy.jpg",
    "P toast copy.jpg",
    "P tomatoes copy.jpg",
    "page 10 copy.jpg",
    "page 11 copy.jpg",
    "pub burger copy.jpg",
    "spagetti 1B copy.jpg",
    "Steak 2a.jpg",
    "strawberries 2a copy.jpg",
    "sunlit eggs copy.jpg",
    "Vitamix berry v2 copy.jpg",
    "Vitamix pea soup.jpg",
    "Vitamix Salsa v2 copy.jpg",
    "Vitamix tomato.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/food/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Food", "description": "A gallery of food photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/food.astro", void 0);

const $$file = "G:/ml/src/pages/food.astro";
const $$url = "/food";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Food,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
