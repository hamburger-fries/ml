import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from '../chunks/astro/server_DMTdlq21.mjs';
import { a as $$Header, S as SITE, $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$HomeImageGrid = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: "/images/photos/technology/Nike green shoe copy.jpg", alt: "Nike green shoe", href: "/technology" },
    { src: "/images/photos/still-life/page 16 copy.jpg", alt: "Still life", href: "/still-life" },
    { src: "/images/photos/cosmetics/cosmetics 45 copy.jpg", alt: "Cosmetics", href: "/cosmetics" },
    { src: "/images/photos/drinks/Gatorade copy.jpg", alt: "Gatorade", href: "/drinks" },
    { src: "/images/photos/animals/serpentine port page copy.jpg", alt: "Serpentine", href: "/animals" },
    { src: "/images/photos/cosmetics/Clinique ChubbySticks copy.jpg", alt: "Clinique ChubbySticks", href: "/cosmetics" },
    { src: "/images/photos/drinks/Coors_Open with C_ip2 copy 3.jpg", alt: "Coors Open", href: "/drinks" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative" data-astro-cid-4buychqa> <div class="container mx-auto px-4 py-8 bg-white" data-astro-cid-4buychqa> <div class="grid grid-cols-3 gap-4 mb-4" data-astro-cid-4buychqa> ${images.slice(0, 3).map((image) => renderTemplate`<a${addAttribute(image.href, "href")} class="block aspect-square overflow-hidden rounded-lg" data-astro-cid-4buychqa> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" data-astro-cid-4buychqa> </a>`)} </div> </div> <div class="curve" data-astro-cid-4buychqa> <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" data-astro-cid-4buychqa> <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" data-astro-cid-4buychqa></path> </svg> </div> <div class="bg-gray-100 pt-16" data-astro-cid-4buychqa> <div class="container mx-auto px-4 py-8" data-astro-cid-4buychqa> <div class="grid grid-cols-4 gap-4" data-astro-cid-4buychqa> ${images.slice(3).map((image) => renderTemplate`<a${addAttribute(image.href, "href")} class="block aspect-square overflow-hidden rounded-lg" data-astro-cid-4buychqa> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" data-astro-cid-4buychqa> </a>`)} </div> </div> </div> </div>`;
}, "G:/ml/src/components/HomeImageGrid.astro", void 0);

const $$CurvedAreaWithDots = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full h-96 overflow-hidden" data-astro-cid-6qob5d2f> <div class="absolute top-0 left-0 w-full h-full bg-white" data-astro-cid-6qob5d2f> <div id="animatedDots" class="w-full h-full" data-astro-cid-6qob5d2f></div> </div> <div class="absolute bottom-0 left-0 w-full h-2/3 bg-gray-200" style="border-radius: 100% 100% 0 0 / 100% 100% 0 0;" data-astro-cid-6qob5d2f></div> </div>  `;
}, "G:/ml/src/components/CurvedAreaWithDots.astro", void 0);

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": SITE.TITLE, "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="w-full pt-16"> <!-- Added pt-16 to account for the fixed header --> <div class="relative"> ${renderComponent($$result2, "CurvedAreaWithDots", $$CurvedAreaWithDots, {})} <div class="absolute inset-0 flex items-center justify-center"> <h1 class="text-4xl font-bold text-gray-800 z-10">Welcome to ${SITE.TITLE}</h1> </div> </div> <div class="bg-gray-200 py-12"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "HomeImageGrid", $$HomeImageGrid, {})} </div> </div> </main> ` })}`;
}, "G:/ml/src/pages/test.astro", void 0);

const $$file = "G:/ml/src/pages/test.astro";
const $$url = "/test";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Test,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
