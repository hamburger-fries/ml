import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$Technology = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "Apple Watch_ip68 copy.jpg",
    "b&o beach 2a copy.jpg",
    "b&o blue copy.jpg",
    "B&O ear copy.jpg",
    "b&o H2 olive copy.jpg",
    "b&o H8 v2 copy.jpg",
    "b&o_A1 copy.jpg",
    "corningware crab copy.jpg",
    "Corningware pig copy.jpg",
    "Danze Kitchen spring ip 3 copy.jpg",
    "Danze shower head ip 3 copy.jpg",
    "environment a.jpg",
    "environment b.jpg",
    "environment e.jpg",
    "environment f.jpg",
    "environment g.jpg",
    "environment h.jpg",
    "Feather-Phone copy.jpg",
    "giro ad-PPP copy.jpg",
    "giro breathe copy 2.jpg",
    "giro contrail copy.jpg",
    "Giro Runway final.jpg",
    "Giro Space ad copy 2.jpg",
    "Grohe shower head green copy.jpg",
    "Grohe showerheads copy 2.jpg",
    "Honda Shadow final copy.jpg",
    "Mini ad boxing glove copy.jpg",
    "Nike blue shoe cu ip2 copy.jpg",
    "Nike green shoe copy.jpg",
    "Nike magenta shoe cu copy.jpg",
    "Nike white shoe copy.jpg",
    "P van cleef 2 copy.jpg",
    "P van cleef pea pod copy.jpg",
    "Ricoh_Theta copy.jpg",
    "rolo blue copy 2.jpg",
    "rolo green copy.jpg",
    "rolo pink copy.jpg",
    "rolo silver copy 2.jpg",
    "Samsung skies copy.jpg",
    "SimonG Fashion 2 ip 5 copy.jpg",
    "SimonG Set A ip 6 copy.jpg",
    "SimonG_Engagement_A copy.jpg",
    "sport left copy.jpg",
    "stienway ad Sml copy.jpg",
    "stienway bridge ad Sml copy.jpg",
    "STUDIO_70682_White_ip12 copy.jpg",
    "Symantek sample D copy.jpg",
    "tech 12 copy.jpg",
    "TECH 13 copy.jpg",
    "TECH 29 copy.jpg",
    "tech 37 copy.jpg",
    "tech 39 copy.jpg",
    "tech 40 copy.jpg",
    "TECH 42 copy.jpg",
    "TECH 50 AA copy.jpg",
    "TECH 50 B copy.jpg",
    "TECH 50 copy.jpg",
    "TECH 51 copy.jpg",
    "tech 54 copy.jpg",
    "tech 58 copy.jpg",
    "Tech 62 copy.jpg",
    "Tech 63 copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/technology/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Technology", "description": "A gallery of technology photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/technology.astro", void 0);

const $$file = "G:/ml/src/pages/technology.astro";
const $$url = "/technology";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Technology,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
