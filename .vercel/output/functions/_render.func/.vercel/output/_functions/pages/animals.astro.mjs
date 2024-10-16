import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$Animals = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "afgan copy.jpg",
    "animal 6b copy.jpg",
    "animal 7 copy.jpg",
    "animal 13 copy.jpg",
    "animal 16 copy.jpg",
    "animal 17 copy.jpg",
    "animal 21 copy.jpg",
    "animal 22 copy.jpg",
    "animal 27 copy.jpg",
    "animals 31 copy.jpg",
    "animals 35 copy.jpg",
    "Animals 39 copy.jpg",
    "animals 48 copy.jpg",
    "animals 51 copy.jpg",
    "animals 54 copy.jpg",
    "animals 55 copy.jpg",
    "animals 56 copy.jpg",
    "animals 58 copy.jpg",
    "animals 59 copy.jpg",
    "animals 60 copy.jpg",
    "animals left copy 2.jpg",
    "animals left copy.jpg",
    "Blue Blubber Jellyfish copy.jpg",
    "Comet and Panther Groupers copy.jpg",
    "Common Octopus copy.jpg",
    "Common Seahorses copy.jpg",
    "goldfish port copy.jpg",
    "hairless cat copy.jpg",
    "King Cobra 2 copy.jpg",
    "leopard copy.jpg",
    "Lion face copy.jpg",
    "Orange Moor Goldfish 1 copy.jpg",
    "page 02 copy.jpg",
    "page 05 copy.jpg",
    "page 12 copy.jpg",
    "page 13 copy.jpg",
    "page 14 copy.jpg",
    "page 15 copy.jpg",
    "page 19 copy.jpg",
    "page 20 copy.jpg",
    "page 25 copy.jpg",
    "Panther chameleon hanging copy.jpg",
    "Paper Chase DOGS p 2 copy.jpg",
    "Paper Chase DOGS p 3 copy.jpg",
    "Paper Chase DOGS p 6 copy.jpg",
    "Paper Chase promo Liquor pg 9 copy.jpg",
    "Red Junglefowl copy.jpg",
    "Ring-Necked Pheasant copy.jpg",
    "serpentine port page copy.jpg",
    "small dog copy.jpg",
    "spider copy 2.jpg",
    "spider copy.jpg",
    "spotted cat push up copy.jpg",
    "Spotted Jellyfish copy.jpg",
    "striped brown cat copy.jpg",
    "Vogel's Pit Viper Playing  copy.jpg",
    "Weimariner 5 copy 2.jpg",
    "WF Elephant copy.jpg",
    "WF Zebra copy.jpg",
    "white cat looking back copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `${"/"}images/photos/animals/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Animals", "description": "A gallery of animal photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/animals.astro", void 0);
const $$file = "G:/ml/src/pages/animals.astro";
const $$url = "/animals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Animals,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
