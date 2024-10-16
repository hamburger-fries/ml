import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$Gallery } from '../chunks/Gallery_BR-_zUNl.mjs';
export { renderers } from '../renderers.mjs';

const $$People = createComponent(($$result, $$props, $$slots) => {
  const imageFiles = [
    "_K9V6781 copy.jpg",
    "adidas man green ip 2 copy.jpg",
    "AdidasWoman copy 3.jpg",
    "Andrew A copy 3.jpg",
    "Angel Blanco Jr_SKY_ip6 copy.jpg",
    "archive ad 1 revised copy.jpg",
    "archive ad 2 revised copy.jpg",
    "archive ad 3 revised copy.jpg",
    "archive ad 4 revised copy.jpg",
    "B&O Claudine copy.jpg",
    "bertoia chair copy.jpg",
    "BiancaSilva_1 copy.jpg",
    "BiancaSilva_3 copy.jpg",
    "Blue Demon Jr_SKY copy.jpg",
    "bullfighter_bullrider copy.jpg",
    "callalily Jamie copy 3.jpg",
    "Celestine w hat & scarf copy.jpg",
    "Claudine 4 copy.jpg",
    "Claudine B&O 2 copy.jpg",
    "Deleon test B (wo bottle) copy.JPG",
    "dying flower copy 4.jpg",
    "Epson Painted Lady copy.jpg",
    "eye-butterfly print copy.jpg",
    "Feather Katie copy.jpg",
    "Franziska hair copy.jpg",
    "gigli wind copy.jpg",
    "Giglianne copy.jpg",
    "HydrapakBiker copy 3.jpg",
    "HydrapakSkier copy 3.jpg",
    "HydrapakTravis copy 3.jpg",
    "Italian Girl ip5 copy.jpg",
    "J in car montage B print copy.jpg",
    "Jacki in pool 1 copy.jpg",
    "Jacki w palm copy.jpg",
    "Jacki w tree fern copy.jpg",
    "Jade Sitting ip 10 copy.jpg",
    "jaja kick 2 copy.jpg",
    "Jamie in pool 1 ip5 copy.jpg",
    "Jess walking on path print copy.jpg",
    "Jill 1 ip7 copy.jpg",
    "Julia ip 5 copy.jpg",
    "Katie Laughing copy.jpg",
    "Ken Watanabe copy 3.jpg",
    "L & B on chaise copy.jpg",
    "leaf Jamie copy.jpg",
    "Mareeya 8 gray ip22 copy.jpg",
    "Melody_blue copy.jpg",
    "Mistico ip3 copy.jpg",
    "Monje Maldito_SKY copy.jpg",
    "Nick copy 3.jpg",
    "Nike test blue-green-yellow copy.jpg",
    "Nike test-Morgan ip2 copy.jpg",
    "Nike white_ip11 DD copy.jpg",
    "Nina b&w copy 3.jpg",
    "Occo daylight color copy.jpg",
    "Occo daylight copy.jpg",
    "Olivier A copy.jpg",
    "Olivier dark copy.jpg",
    "olivier w cig copy.jpg",
    "Russian Girl Dream ip2 copy.jpg",
    "Sara w dog copy.jpg",
    "Soccer test chest copy.jpg",
    "soccer test goalie copy.jpg",
    "Soccer test kick 2 copy.jpg",
    "Super Porky_ip5 copy.jpg",
    "The Knick 1 copy.jpg",
    "The Knick 3a copy.jpg",
    "The Knick 6a copy.jpg",
    "The Knick 7 copy.jpg",
    "The Knick 11a copy.jpg",
    "The Knick Print copy.jpg",
    "Tony Shahloub polaroid copy.jpg",
    "Tony Shalhoub portrait B&W copy.jpg",
    "Tova black sand 1 copy.jpg",
    "Tova hat 8x10 copy.jpg",
    "Tova hood 1 copy.jpg",
    "Ty w hat copy.jpg",
    "Veronica 6 copy.jpg",
    "Vicki w monstera leaf ip2 copy.jpg",
    "Victoria ip6 copy.jpg"
  ];
  const images = imageFiles.map((file) => ({
    imgUrl: `/images/photos/people/${file}`,
    alt: file.replace(/\.(jpg|jpeg|png|gif)$/i, "").replace(/\s+copy\s*\d*/i, "").replace(/[-_]/g, " ")
  }));
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "People", "description": "A gallery of people photographs" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full max-w-screen-xl mx-auto px-4 mt-12"> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": images })} </div> ` })}`;
}, "G:/ml/src/pages/people.astro", void 0);

const $$file = "G:/ml/src/pages/people.astro";
const $$url = "/people";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$People,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
