import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './astro/server_DMTdlq21.mjs';
import 'clsx';

const $$FrontPageHeroImages = createComponent(($$result, $$props, $$slots) => {
  const imageLinks = [
    { href: "/animals", src: "/front-component/animals.jpg", alt: "Animals" },
    { href: "/cosmetics", src: "/front-component/cosmetics.jpg", alt: "Cosmetics" },
    { href: "/drinks", src: "/front-component/drinks.jpg", alt: "Drinks" },
    { href: "/food", src: "/front-component/food.jpg", alt: "Food" },
    { href: "/people", src: "/front-component/people.jpg", alt: "People" },
    { href: "/still-life", src: "/front-component/still-life.jpg", alt: "Still Life" },
    { href: "/technology", src: "/front-component/technology.jpg", alt: "Technology" },
    { href: "/animals", src: "/front-component/animals2.jpg", alt: "Animals 2" }
  ];
  const topImages = imageLinks.slice(0, 4);
  const bottomImages = imageLinks.slice(4);
  return renderTemplate`${maybeRenderHead()}<div class="max-w-[1090px] mx-auto px-4"> <div class="flex flex-col gap-[10px]"> <!-- Top row: 4 images --> <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px]"> ${topImages.map((image) => renderTemplate`<div class="aspect-square overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 relative group"> <a${addAttribute(image.href, "href")} class="block w-full h-full"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" width="265" height="265" loading="lazy"> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity flex items-center justify-center"> <span class="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"> ${image.alt} </span> </div> </a> </div>`)} </div> <!-- Bottom row: 4 images --> <div class="grid grid-cols-2 md:grid-cols-4 gap-[10px]"> ${bottomImages.map((image) => renderTemplate`<div class="aspect-square overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105 relative group"> <a${addAttribute(image.href, "href")} class="block w-full h-full"> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover" width="265" height="265" loading="lazy"> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity flex items-center justify-center"> <span class="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity"> ${image.alt} </span> </div> </a> </div>`)} </div> </div> </div>`;
}, "G:/ml/src/components/FrontPageHeroImages.astro", void 0);

export { $$FrontPageHeroImages as $ };
