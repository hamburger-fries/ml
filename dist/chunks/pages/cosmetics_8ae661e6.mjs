import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';
import { $ as $$Gallery } from './animals_43a0d420.mjs';

const $$Cosmetics = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "07__BCounter_14_lip_gloss__.jpg",
    "Amore_Pacific_.jpg",
    "bc_d_.jpg",
    "BC_Dew_Skin_Test_.jpg",
    "BC_Tint_Skin__2.jpg",
    "BCounter_10_18818_ip6_.jpg",
    "BCounter_10_Baby_Box_ip2_.jpg",
    "BCounter_tint_skin_single_ip20_.jpg",
    "Beauty_Counter_492363_ip2_.jpg",
    "Blue_mu_crumbles_.jpg",
    "broken_pastels_as_face_.jpg",
    "Bubble_globe_.jpg",
    "Bulgari_bottle_.jpg",
    "Clinique_ChubbySticks_.jpg",
    "Clinique_lipsticks_w_berries_.jpg",
    "Clinique_M_Lotion_PORT_.jpg",
    "Clinique_Superprimer_tubes_.jpg",
    "clinique_tubes_in_wave_.jpg",
    "clinique_tubes_w__bubbles_2_.jpg",
    "cos_5_.jpg",
    "cosmetics_11_.jpg",
    "cosmetics_17_.jpg",
    "cosmetics_21_.jpg",
    "cosmetics_22_.jpg",
    "Cosmetics_23_.jpg",
    "Cosmetics_24_.jpg",
    "cosmetics_40_.jpg",
    "cosmetics_44_.jpg",
    "cosmetics_45_.jpg",
    "cosmetics_46_.jpg",
    "cosmetics_47_.jpg",
    "cosmetics_51_.jpg",
    "cosmetics_59b_.jpg",
    "cosmetics_63_.jpg",
    "cosmetics_PDF_intro_.jpg",
    "Derma_DailySuperfoliant_2_112176_.jpg",
    "Dermalogica_Phyto_Grass_ip2_.jpg",
    "Dove_DryOil_Shampoo_splash_.jpg",
    "Fahrenheit_.jpg",
    "Givenchy_logo_.jpg",
    "Hourglass_Aa_.jpg",
    "Hourglass_lipstick_.jpg",
    "Laura_Mercier_B_.jpg",
    "Laura_Mercier_ip2_.jpg",
    "Laura_Mrcier_flawless_skin_.jpg",
    "Lip_Shear_bullets_port_.jpg",
    "Lipstick_pieces_.jpg",
    "Marathon_COS_sd_.jpg",
    "Marathon_COS_spread_09_.jpg",
    "Marathon_COS_spread_10_.jpg",
    "Marathon_COS_spread_15_.jpg",
    "Marathon_COS_spread_24_.jpg",
    "Marathon_COS_spread_26_.jpg",
    "Marathon_COS_spread_29_.jpg",
    "Marathon_COS_spread_31_.jpg",
    "Marathon_COS_spread_32_.jpg",
    "Marc_Jacobs_berries.jpg",
    "mu_smears_23_ip2_.jpg",
    "mu_smears_reds.jpg",
    "Nars_stacked_tubs_.jpg",
    "New_Port_image_7_.jpg",
    "P_5S_brushes_.jpg",
    "P_chanel_compact_.jpg",
    "P_ipsa_ad_.jpg",
    "P_pink_smear_.jpg",
    "P_shaved_soap_.jpg",
    "P_shiseido_make-up.jpg",
    "P_shiseido_vocalise_.jpg",
    "page_03_.jpg",
    "page_21_.jpg",
    "Paint_in_water_frame_3_.jpg",
    "paint_port_.jpg",
    "paint_spots_1_.jpg",
    "Pantene_2_110572__2.jpg",
    "Pantene_2_110809_.jpg",
    "PANTENE_OIL+CREAM_B3_.jpg",
    "Plaster_rounds_bg_.jpg",
    "Pureology_1_.jpg",
    "Pureology_2_.jpg",
    "Pureology_3_ip2_.jpg",
    "red_swipe_.jpg",
    "Shiseido_Bio_Performance_A_ip3_.jpg",
    "Shiseido_Bio_Performance_B_ip3_.jpg",
    "Shiseido_Bio_Performance_in_water_B_PORT_.jpg",
    "Shiseido_Future_Solution_ip2_.jpg",
    "Shiseido_Ultimune_.jpg",
    "Shiseido_White_Lucent_ip2_.jpg",
    "Turquiose_frame_ip3_.jpg",
    "White_Lotion_smear_.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/cosmetics/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/[_-]/g, " ").replace(/\s+/g, " ").trim()
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Cosmetics", "description": "A gallery of cosmetics photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-[60px]"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })} `;
}, "G:/ml/src/pages/cosmetics.astro", void 0);

const $$file = "G:/ml/src/pages/cosmetics.astro";
const $$url = "/cosmetics";

export { $$Cosmetics as default, $$file as file, $$url as url };