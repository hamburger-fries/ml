import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$Drinks = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "42 Below lights.jpg",
    "42 Below Passion lights.jpg",
    "44 North copy.jpg",
    "Budweiser bottle_P copy.jpg",
    "Coke effervescence copy.jpg",
    "Coors_Cheers copy 3.jpg",
    "Coors_Open with C_ip2 copy 3.jpg",
    "Coors_Open_ip2 copy 3.jpg",
    "Coors_Pour copy 2.jpg",
    "Corona_comp copy2.jpg",
    "Corzo bottle copy.jpg",
    "Corzo snake copy.jpg",
    "Cream pour into whisky copy.jpg",
    "Crown Royal cu1 copy.jpg",
    "Crown_Royal_left copy.jpg",
    "Crown_Royal_StraightwBag copy.jpg",
    "danzka freezer copy.jpg",
    "dr 5 copy.jpg",
    "dr 6 copy.jpg",
    "dr 7 copy.jpg",
    "dr 9 copy.jpg",
    "dr 12 copy.jpg",
    "dr 13 copy.jpg",
    "dr 15 copy.jpg",
    "dr 18 copy.jpg",
    "dr 22 copy.jpg",
    "dr 23 copy.jpg",
    "dr 24 copy.jpg",
    "dr 25 copy.jpg",
    "dr 27 copy.jpg",
    "dr 28 copy.jpg",
    "dr 32 copy.jpg",
    "dr 34 copy.jpg",
    "dr 35 copy.jpg",
    "dr 36a copy.jpg",
    "dr 38 copy.jpg",
    "dr 47 copy.jpg",
    "dr 48 copy.jpg",
    "dr 54 copy.jpg",
    "dr 55 copy.jpg",
    "dr 60 copy.jpg",
    "dr 64 copy.jpg",
    "dr 68 copy.jpg",
    "dr 73 copy.jpg",
    "dr 74 copy.jpg",
    "dr 76 copy.jpg",
    "dr 80 copy.jpg",
    "drinks 2 left copy.jpg",
    "drinks right copy 2.jpg",
    "drinks right copy 3.jpg",
    "drinks right copy.jpg",
    "Gatorade copy.jpg",
    "Guinness Series copy.jpg",
    "HONEY_BUILD copy.jpg",
    "HONEY_BUILD3 copy.jpg",
    "HONEY_BUILD4 copy.jpg",
    "Jagermeister Xmas Flattene copy.jpg",
    "JDaniels_20524_ip3 copy.jpg",
    "Justin_Icoc pour copy.jpg",
    "lipstick drink-PPP revised copy.jpg",
    "Lolea Red copy.jpg",
    "Lolea White copy.jpg",
    "Makers Mark copy.jpg",
    "P bud beer cu copy.jpg",
    "P coffee copy.jpg",
    "P coke cu copy.jpg",
    "P Grapefruit juice copy.jpg",
    "P ice copy.jpg",
    "P jb & coke copy.jpg",
    "P Knob Creek copy.jpg",
    "P liqour ads copy.jpg",
    "P Michelob bottle copy.jpg",
    "P molson splash copy.jpg",
    "P newcastle copy 2.jpg",
    "P newcastle copy.jpg",
    "P orange splash copy.jpg",
    "P palm beer glass copy.jpg",
    "P patron ad copy.jpg",
    "P sapporo copy.jpg",
    "P tropicana lemon copy.jpg",
    "P water drop copy d copy.jpg",
    "P water drop copy.jpg",
    "Paper Chase promo Liquor pg 5 copy 3.jpg",
    "PATRON_GranBurdeos_2016_Bottle_FrontAngle_SKY copy.jpg",
    "Pepsi Bottle HERO Horizontal copy.jpg",
    "Perrier bubbles copy.jpg",
    "Simply_fruit punch_ip19_V1 copy.jpg",
    "Smirnoff Raspberry Sorbet copy 4b copy.jpg",
    "steinlager bottle copy.jpg",
    "Tilted Glass copy.jpg",
    "White wine pour copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/drinks/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Drinks", "description": "A gallery of drink photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/drinks.astro", void 0);

const $$file = "G:/ml/src/pages/drinks.astro";
const $$url = "/drinks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Drinks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
