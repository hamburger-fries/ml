import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';
import { $ as $$Gallery } from './animals_43a0d420.mjs';

const $$StillLife = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "a-Coral_Tree_Flower_.jpg",
    "a-Dahlia_Snowbound_rear_.jpg",
    "a-Dahlia_underside_.jpg",
    "a-Dahlia_Winsome_.jpg",
    "a-Flaming_Parrot_Tulip_.jpg",
    "a-Jade_Vine_ip6_.jpg",
    "a-page_08_.jpg",
    "a-Passiflora_Quadrangularis_.jpg",
    "a-Picotee_Cosmos_2_.jpg",
    "a-Pink_and_White_dahlia__2.jpg",
    "a-Rooster_Cocks_Comb_.jpg",
    "a-twist_orchid_.jpg",
    "a-Vulcan_Magnolia_.jpg",
    "b-Ephemera_106_.jpg",
    "b-Ephemera_672_.jpg",
    "b-Ephemera_913_.jpg",
    "b-ephemera_1245_.jpg",
    "b-page__.jpg",
    "c-eph_jj_.jpg",
    "c-paint_dd_.jpg",
    "c-Paint_ribbon_.jpg",
    "c-Paint_ribbon_3_.jpg",
    "d-Green_Rounds_ip2_.jpg",
    "d-page_18_.jpg",
    "d-Still_Life_38_.jpg",
    "l_aeonium_.jpg",
    "l-c_.jpg",
    "l-New_Port_image_6_.jpg",
    "l-New_Port_image_8_.jpg",
    "l-page_17_.jpg",
    "m-New_Port_image_6__2.jpg",
    "m-page_16_.jpg",
    "p-New_Port_image_3_.jpg",
    "p-post_it_green_.jpg",
    "p-post_it_magenta_.jpg",
    "q_hourglass_.jpg",
    "q_shell_.jpg",
    "q-ballon_molds_a_.jpg",
    "w-Red_Tail_Boa_Skeleton_.jpg",
    "x-iron_shoe_lasts_.jpg",
    "x-pulley__2.jpg",
    "x-wrench_.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/still-life/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim()
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Still Life", "description": "A gallery of still life photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-[60px]"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })} `;
}, "G:/ml/src/pages/still-life.astro", void 0);

const $$file = "G:/ml/src/pages/still-life.astro";
const $$url = "/still-life";

export { $$StillLife as default, $$file as file, $$url as url };
