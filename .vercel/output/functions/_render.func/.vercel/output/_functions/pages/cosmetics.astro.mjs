import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$Cosmetics = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "07  BCounter_14_lip gloss_ copy.jpg",
    "Amore Pacific copy.jpg",
    "bc d copy.jpg",
    "BC Dew Skin Test copy.jpg",
    "BC Tint_Skin copy 2.jpg",
    "BCounter_10_18818_ip6 copy.jpg",
    "BCounter_10_Baby Box_ip2 copy.jpg",
    "BCounter_tint_skin_single_ip20 copy.jpg",
    "Beauty Counter_492363_ip2 copy.jpg",
    "Blue mu crumbles copy.jpg",
    "broken pastels as face copy.jpg",
    "Bubble globe copy.jpg",
    "Bulgari bottle copy.jpg",
    "Clinique ChubbySticks copy.jpg",
    "Clinique lipsticks w berries copy.jpg",
    "Clinique M Lotion PORT copy.jpg",
    "Clinique Superprimer tubes copy.jpg",
    "clinique tubes in wave(revised) copy.jpg",
    "clinique tubes w_ bubbles 2 copy.jpg",
    "cos 5 copy.jpg",
    "cosmetics 11 copy.jpg",
    "cosmetics 17 copy.jpg",
    "cosmetics 21 copy.jpg",
    "cosmetics 22 copy.jpg",
    "Cosmetics 23 copy.jpg",
    "Cosmetics 24 copy.jpg",
    "cosmetics 40 copy.jpg",
    "cosmetics 44 copy.jpg",
    "cosmetics 45 copy.jpg",
    "cosmetics 46 copy.jpg",
    "cosmetics 47 copy.jpg",
    "cosmetics 51 copy.jpg",
    "cosmetics 59b copy.jpg",
    "cosmetics 63 copy.jpg",
    "cosmetics PDF intro copy.jpg",
    "Derma_DailySuperfoliant_2_112176 copy.jpg",
    "Dermalogica_Phyto_Grass ip2 copy.jpg",
    "Dove DryOil Shampoo splash copy.jpg",
    "Fahrenheit copy.jpg",
    "Givenchy logo copy.jpg",
    "Hourglass Aa copy.jpg",
    "Hourglass lipstick copy.jpg",
    "Laura Mercier B copy.jpg",
    "Laura Mercier ip2 copy.jpg",
    "Laura Mrcier flawless skin copy.jpg",
    "Lip Shear bullets_port copy.jpg",
    "Lipstick pieces copy.jpg",
    "Marathon COS sd copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/cosmetics/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Cosmetics", "description": "A gallery of cosmetics photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/cosmetics.astro", void 0);

const $$file = "G:/ml/src/pages/cosmetics.astro";
const $$url = "/cosmetics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cosmetics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
