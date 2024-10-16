import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$StillLife = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "ballon molds a copy.jpg",
    "c copy.jpg",
    "Coral Tree Flower copy.jpg",
    "Dahlia 'Snowbound' rear copy.jpg",
    "Dahlia 'Winsome' copy.jpg",
    "Dahlia underside copy.jpg",
    "eph jj copy.jpg",
    "Ephemera 106 copy.jpg",
    "Ephemera 672 copy.jpg",
    "Ephemera 913 copy.jpg",
    "ephemera 1245 copy.jpg",
    "Flaming Parrot Tulip copy.jpg",
    "Green Rounds ip2 copy.jpg",
    "iron shoe lasts copy.jpg",
    "Jade Vine ip6 copy.jpg",
    "New Port image 3 copy.jpg",
    "New Port image 6 copy 2.jpg",
    "New Port image 6 copy.jpg",
    "New Port image 8 copy.jpg",
    "P aeonium copy.jpg",
    "P hourglass copy.jpg",
    "P shell copy.jpg",
    "page  copy.jpg",
    "page 08 copy.jpg",
    "page 16 copy.jpg",
    "page 17 copy.jpg",
    "page 18 copy.jpg",
    "paint dd copy.jpg",
    "Paint ribbon 3 copy.jpg",
    "Paint ribbon copy.jpg",
    "Passiflora Quadrangularis copy.jpg",
    "Picotee Cosmos 2 copy.jpg",
    "Pink and White dahlia copy 2.jpg",
    "post it green copy.jpg",
    "post it magenta copy.jpg",
    "pulley copy 2.jpg",
    "Red Tail Boa Skeleton copy.jpg",
    "Rooster Cock's Comb copy.jpg",
    "Still Life 38 copy.jpg",
    "tech 64 copy.jpg",
    "tech 65 copy.jpg",
    "twist orchid copy.jpg",
    "Vulcan Magnolia copy.jpg",
    "wrench copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/still-life/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Still Life", "description": "A gallery of still life photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/still-life.astro", void 0);

const $$file = "G:/ml/src/pages/still-life.astro";
const $$url = "/still-life";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$StillLife,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
