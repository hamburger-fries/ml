import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';
import { $ as $$Gallery } from './animals_43a0d420.mjs';

const $$Food = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "c-Chloes_Chocolate.jpg",
    "c-Chloes_Mango_.jpg",
    "c-Chloes_Pineapple_.jpg",
    "c-Chloes_Raspberry.jpg",
    "c-Chloes_Tangerine_.jpg",
    "c-x-food_35_.jpg",
    "c-x-food_37_.jpg",
    "c-x-P_pear_.jpg",
    "d-k-a-strawberries_2a_.jpg",
    "d-k-food_22_.jpg",
    "d-page_10_.jpg",
    "d-page_11_.jpg",
    "d-z-Vitamix_berry_v2_.jpg",
    "d-z-Vitamix_pea_soup.jpg",
    "d-z-Vitamix_Salsa_v2_.jpg",
    "d-z-Vitamix_tomato.jpg",
    "e-Chocolate_.jpg",
    "e-food_33_.jpg",
    "e-Food_55_.jpg",
    "f-Balsamic_Roasted_Carrots_2_.jpg",
    "f-Balsamic_Salad_.jpg",
    "f-Broccoli_Romanesco_and_radishes_.jpg",
    "f-food_16_.jpg",
    "f-food_38_.jpg",
    "f-food_57_.jpg",
    "f-food_58_.jpg",
    "f-food_59_.jpg",
    "f-Maries_HEART__final_.jpg",
    "f-P_jitb_lettuce_.jpg",
    "f-P_maries_.jpg",
    "f-z-food_32_.jpg",
    "f-z-food_43_.jpg",
    "f-z-food_71_.jpg",
    "f-z-P_toast_.jpg",
    "food_66_.jpg",
    "g-z-food_63_.jpg",
    "h-Heirloom_Tomato_1_.jpg",
    "h-Heirloom_tomatoes_Heart_.jpg",
    "h-Heirloom_Tomoato_cu_.jpg",
    "h-K-Tomatoes_.jpg",
    "h-P_tomatoes_.jpg",
    "i-Global_Knife_Bread_.jpg",
    "i-Global_Knife_TOMATO_.jpg",
    "i-Global_Knife_w_Sweet_Potato_.jpg",
    "j-food_64_.jpg",
    "j-food_65_.jpg",
    "j-food_67_.jpg",
    "k-1-food_45_.jpg",
    "k-1-food_left_.jpg",
    "k-2-pub_burger_.jpg",
    "k-2-sandwich_.jpg",
    "k-4-food_48_.jpg",
    "k-4-Steak_2a.jpg",
    "k-food_47_.jpg",
    "k-food_49_.jpg",
    "k-food_51_.jpg",
    "P_bolthouse_.jpg",
    "v-AFRICA_Coffee_.JPG",
    "v-Colored_pasta_.jpg",
    "v-ITALY_Spaghetti_.jpg",
    "v-New_Port_image_4_.jpg",
    "v-P_pasta_.jpg",
    "v-spagetti_1B_.jpg",
    "x-3-food_62_.jpg",
    "x-3-P_ice_tray_.jpg",
    "x-food_60_.jpg",
    "x0sunlit_eggs_.jpg",
    "z-a-1-Berries_and_cream_2_ip2_.jpg",
    "z-a-1-food_54_.jpg",
    "z-a-berries_stitched__2.jpg",
    "z-a-Chloes_Raspberry_.jpg",
    "z-Candy_.jpg",
    "z-food_61_.jpg",
    "z-P_breville_espresso_.jpg",
    "z-P_breville_juicer_.jpg",
    "z-P_maries_sink_.jpg",
    "z-p-0P_cooktop_.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/food/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim()
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Food", "description": "A gallery of food photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-[60px]"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })} `;
}, "G:/ml/src/pages/food.astro", void 0);

const $$file = "G:/ml/src/pages/food.astro";
const $$url = "/food";

export { $$Food as default, $$file as file, $$url as url };
