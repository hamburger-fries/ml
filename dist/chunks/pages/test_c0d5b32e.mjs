import { f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, i as renderComponent } from '../astro_bc932ddb.mjs';
import 'clsx';
import { a as $$Header, S as SITE, $ as $$PageLayout } from './about_1e441eeb.mjs';
/* empty css                          */
const $$HomeImageGrid = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: "/images/photos/technology/Nike green shoe copy.jpg", alt: "Technology", href: "/technology" },
    { src: "/images/photos/still-life/page 16 copy.jpg", alt: "Still Life", href: "/still-life" },
    { src: "/images/photos/cosmetics/cosmetics 45 copy.jpg", alt: "Cosmetics", href: "/cosmetics" },
    { src: "/images/photos/drinks/Gatorade copy.jpg", alt: "Drinks", href: "/drinks" },
    { src: "/images/photos/animals/serpentine port page copy.jpg", alt: "Animals", href: "/animals" },
    { src: "/images/photos/food/page 16 copy.jpg", alt: "Food", href: "/food" },
    { src: "/images/photos/people/page 16 copy.jpg", alt: "People", href: "/people" },
    { src: "/images/photos/animals/animals left copy.jpg", alt: "More Animals", href: "/animals" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto px-4 py-8"> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"> ${images.map((image) => renderTemplate`<a${addAttribute(image.href, "href")} class="block aspect-square overflow-hidden rounded-lg relative group"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" width="260" height="260"> <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"> <span class="text-white text-2xl font-bold">${image.alt}</span> </div> </a>`)} </div> </div>`;
}, "G:/ml/src/components/HomeImageGrid.astro", void 0);

const $$CurvedAreaWithDots = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative w-full h-96 overflow-hidden" data-astro-cid-6qob5d2f> <div class="absolute top-0 left-0 w-full h-full bg-white" data-astro-cid-6qob5d2f> <div id="animatedDots" class="w-full h-full" data-astro-cid-6qob5d2f></div> </div> <div class="absolute bottom-0 left-0 w-full h-2/3 bg-gray-200" style="border-radius: 100% 100% 0 0 / 100% 100% 0 0;" data-astro-cid-6qob5d2f></div> </div>  `;
}, "G:/ml/src/components/CurvedAreaWithDots.astro", void 0);

const $$Test = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": SITE.TITLE, "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="w-full pt-16"> <!-- Added pt-16 to account for the fixed header --> <div class="relative"> ${renderComponent($$result2, "CurvedAreaWithDots", $$CurvedAreaWithDots, {})} <div class="absolute inset-0 flex items-center justify-center"> <h1 class="text-4xl font-bold text-gray-800 z-10">Welcome to ${SITE.TITLE}</h1> </div> </div> <div class="bg-gray-200 py-12"> <div class="container mx-auto px-4"> ${renderComponent($$result2, "HomeImageGrid", $$HomeImageGrid, {})} </div> </div> </main> ` })}`;
}, "G:/ml/src/pages/test.astro", void 0);

const $$file = "G:/ml/src/pages/test.astro";
const $$url = "/test";

export { $$Test as default, $$file as file, $$url as url };
