import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';
import { $ as $$Gallery } from './animals_43a0d420.mjs';

const $$Technology = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "a-1-Apple_Watch_ip68_.jpg",
    "a-1-TECH_50_AA_.jpg",
    "a-2-olo_blue__2.jpg",
    "a-2-rolo_green_.jpg",
    "a-2-rolo_pink_.jpg",
    "a-2-rolo_silver__2.jpg",
    "a-TECH_50_.jpg",
    "a-TECH_50_B_.jpg",
    "a-TECH_51_.jpg",
    "b-b&o_A1_.jpg",
    "b-b&o_beach_2a_.jpg",
    "b-b&o_blue_.jpg",
    "b-B&O_ear_.jpg",
    "b-b&o_H2_olive_.jpg",
    "b-b&o_H8_v2_.jpg",
    "c-corningware_crab_.jpg",
    "c-Corningware_pig_.jpg",
    "d-2-Grohe_shower_head_green_.jpg",
    "d-2-Grohe_showerheads__2.jpg",
    "d-Danze_Kitchen_spring_ip_3_.jpg",
    "d-Danze_shower_head_ip_3_.jpg",
    "d-tech_58_.jpg",
    "e-1-environment_f.jpg",
    "e-1-environment_g.jpg",
    "e-1-environment_h.jpg",
    "e-environment_a.jpg",
    "e-environment_b.jpg",
    "e-environment_e.jpg",
    "e-Symantek_sample_D_.jpg",
    "f-Feather-Phone_.jpg",
    "f-Samsung_skies_.jpg",
    "g-.jpg",
    "g-giro_ad-PPP_.jpg",
    "g-giro_contrail_.jpg",
    "g-Giro_Runway_final.jpg",
    "g-Giro_Space_ad__2.jpg",
    "h-Nike_blue_shoe_cu_ip2_.jpg",
    "h-Nike_green_shoe_.jpg",
    "h-Nike_magenta_shoe_cu_.jpg",
    "h-Nike_white_shoe_.jpg",
    "Honda_Shadow_final_.jpg",
    "Mini_ad_boxing_glove_.jpg",
    "P_van_cleef_2_.jpg",
    "P_van_cleef_pea_pod_.jpg",
    "Ricoh_Theta_.jpg",
    "SimonG_Engagement_A_.jpg",
    "SimonG_Fashion_2_ip_5_.jpg",
    "SimonG_Set_A_ip_6_.jpg",
    "sport_left_.jpg",
    "stienway_ad_Sml_.jpg",
    "stienway_bridge_ad_Sml_.jpg",
    "STUDIO_70682_White_ip12_.jpg",
    "tech_12_.jpg",
    "TECH_13_.jpg",
    "TECH_29_.jpg",
    "tech_37_.jpg",
    "tech_39_.jpg",
    "tech_40_.jpg",
    "TECH_42_.jpg",
    "tech_54_.jpg",
    "Tech_62_.jpg",
    "Tech_63_.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/technology/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim()
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Technology", "description": "A gallery of technology photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-[60px]"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/technology.astro", void 0);

const $$file = "G:/ml/src/pages/technology.astro";
const $$url = "/technology";

export { $$Technology as default, $$file as file, $$url as url };
