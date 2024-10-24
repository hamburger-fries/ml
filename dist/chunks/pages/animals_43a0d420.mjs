import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Picture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const { imgUrl, alt, sizes, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imgUrl, "src")}${addAttribute(alt, "alt")}${addAttribute(sizes || "(max-width: 1200px) 100vw, 1200px", "sizes")}${addAttribute(className, "class")} loading="lazy">`;
}, "G:/ml/src/components/Picture.astro", void 0);

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full mt-8"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[18px]"> ${images.map((image) => renderTemplate`<div class="w-full"> ${renderComponent($$result, "Picture", $$Picture, { "imgUrl": image.imgUrl, "alt": image.alt, "sizes": "(max-width: 270px) 100vw, 270px", "class": "w-full h-full object-cover rounded-lg cursor-pointer gallery-image" })} </div>`)} </div> </div> <div id="imageModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hidden opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer"> <img id="modalImage" src="" alt="" class="max-w-[90vw] max-h-[90vh] object-contain"> </div> `;
}, "G:/ml/src/components/Gallery.astro", void 0);

const $$Animals = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "afgan_.jpg",
    "animal_6b_.jpg",
    "animal_7_.jpg",
    "animal_13_.jpg",
    "animal_16_.jpg",
    "animal_17_.jpg",
    "animal_21_.jpg",
    "animal_22_.jpg",
    "animal_27_.jpg",
    "animals_31_.jpg",
    "animals_35_.jpg",
    "Animals_39_.jpg",
    "animals_48_.jpg",
    "animals_51_.jpg",
    "animals_54_.jpg",
    "animals_55_.jpg",
    "animals_56_.jpg",
    "animals_58_.jpg",
    "animals_59_.jpg",
    "animals_60_.jpg",
    "animals_left__2.jpg",
    "animals_left_.jpg",
    "Blue_Blubber_Jellyfish_.jpg",
    "Comet_and_Panther_Groupers_.jpg",
    "Common_Octopus_.jpg",
    "Common_Seahorses_.jpg",
    "goldfish_port_.jpg",
    "hairless_cat_.jpg",
    "King_Cobra_2_.jpg",
    "leopard_.jpg",
    "Lion_face_.jpg",
    "Orange_Moor_Goldfish_1_.jpg",
    "page_02_.jpg",
    "page_05_.jpg",
    "page_12_.jpg",
    "page_13_.jpg",
    "page_14_.jpg",
    "page_15_.jpg",
    "page_19_.jpg",
    "page_20_.jpg",
    "page_25_.jpg",
    "Panther_chameleon_hanging_.jpg",
    "Paper_Chase_DOGS_p_2_.jpg",
    "Paper_Chase_DOGS_p_3_.jpg",
    "Paper_Chase_DOGS_p_6_.jpg",
    "Paper_Chase_promo_Liquor_pg_9_.jpg",
    "Red_Junglefowl_.jpg",
    "Ring-Necked_Pheasant_.jpg",
    "serpentine_port_page_.jpg",
    "small_dog_.jpg",
    "spider__2.jpg",
    "spider_.jpg",
    "spotted_cat_push_up_.jpg",
    "Spotted_Jellyfish_.jpg",
    "striped_brown_cat_.jpg",
    "Vogels_Pit_Viper_Playing__.jpg",
    "Weimariner_5__2.jpg",
    "WF_Elephant_.jpg",
    "WF_Zebra_.jpg",
    "white_cat_looking_back_.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/animals/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim()
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Animals", "description": "A gallery of animal photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-[60px]"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })} `;
}, "G:/ml/src/pages/animals.astro", void 0);

const $$file = "G:/ml/src/pages/animals.astro";
const $$url = "/animals";

const animals = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Animals,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Gallery as $, animals as a };
