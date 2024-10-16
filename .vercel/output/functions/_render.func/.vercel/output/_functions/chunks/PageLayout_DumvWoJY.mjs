import { d as createAstro, c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead, h as renderSlot, b as renderComponent, i as renderHead } from './astro/server_DMTdlq21.mjs';
/* empty css                           */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://astro-sphere-demo.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS Feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Global Scripts --><script src="/js/theme.js"><\/script><script src="/js/scroll.js"><\/script><script src="/js/animate.js"><\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"));
}, "G:/ml/src/components/BaseHead.astro", void 0);

const SITE = {
  TITLE: "MarkLaita",
  DESCRIPTION: "Welcome to MarkLaita, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Laita"
};
const LINKS = [
  {
    TEXT: "Animals",
    HREF: "/animals"
  },
  {
    TEXT: "Cosmetics",
    HREF: "/cosmetics"
  },
  {
    TEXT: "Drinks",
    HREF: "/drinks"
  },
  {
    TEXT: "Food",
    HREF: "/food"
  },
  {
    TEXT: "People",
    HREF: "/people"
  },
  {
    TEXT: "Still-Life",
    HREF: "/still-life"
  },
  {
    TEXT: "Technology",
    HREF: "/technology"
  }
];
const SOCIALS = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "info@softwhiteunderbelly.com",
    HREF: "mailto:info@softwhiteunderbelly.com"
  },
  {
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "Mark Laita",
    HREF: "https://www.instagram.com/mark_laita/"
  },
  {
    NAME: "Twitter",
    ICON: "twitter-x",
    TEXT: "mark_laita",
    HREF: "https://x.com/mark_laita"
  }
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro$3 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Container;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "w-full h-full mx-auto px-5",
    size === "sm" && "max-w-screen-sm",
    size === "md" && "max-w-screen-md",
    size === "lg" && "max-w-screen-lg",
    size === "xl" && "max-w-screen-xl",
    size === "2xl" && "max-w-screen-2xl"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "G:/ml/src/components/Container.astro", void 0);

const $$Astro$2 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 w-full z-50 bg-white dark:bg-black"> ${renderComponent($$result, "Container", $$Container, { "size": "xl" }, { "default": ($$result2) => renderTemplate` <div class="relative py-2 sm:py-4"> <div class="flex items-center justify-between"> <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 ease-in-out"> <img src="/images/logo.png" alt="Mark Lata Logo" class="h-6 w-auto sm:h-8"> </a> <nav class="hidden lg:flex items-center justify-between gap-4 text-base"> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("px-3 py-2 rounded-md text-current", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"), "class")}> ${LINK.TEXT} </a>`)} </nav> <div class="flex items-center gap-2"> <button id="header-theme-button" aria-label="Toggle light and dark theme"${addAttribute(cn("flex", "w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 items-center justify-center", "bg-transparent hover:bg-black/5 dark:hover:bg-white/20", "stroke-current hover:stroke-black hover:dark:stroke-white", "border border-black/10 dark:border-white/25", "transition-colors duration-300 ease-in-out"), "class")}> <svg class="w-full h-full block dark:hidden"> <use href="/ui.svg#sun"></use> </svg> <svg class="w-full h-full hidden dark:block"> <use href="/ui.svg#moon"></use> </svg> </button> <button id="mobile-menu-toggle" class="lg:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-black/10 dark:border-white/25"> <nav class="flex flex-col py-2"> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("px-4 py-2 text-current", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"), "class")}> ${LINK.TEXT} </a>`)} </nav> </div> </div> ` })} </header> `;
}, "G:/ml/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="relative bg-white dark:bg-black"> <div class="animate"> <section class="py-3 sm:py-5"> ', ' </section> <section class="py-3 sm:py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25"> ', ' </section> <section class="py-3 sm:py-5 overflow-hidden whitespace-nowrap border-t border-black/10 dark:border-white/25"> ', ' </section> </div> </footer> <script>\n  function goBackToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function inintializeBackToTop() {\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", goBackToTop);\n  }\n\n  document.addEventListener("astro:after-swap", inintializeBackToTop);\n  inintializeBackToTop();\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-center sm:justify-end"> <button id="back-to-top" aria-label="Back to top of page" class="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Back to top
</div> </button> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="flex flex-col items-center sm:items-start"> <a href="/" class="flex gap-1 w-fit hover:opacity-80 transition-opacity duration-300 ease-in-out"> <img src="/images/logo.png" alt="Mark Lata Logo" class="h-6 sm:h-8 w-auto"> </a> </div> <div class="flex gap-2 justify-center sm:justify-end items-center"> <span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span> <span class="text-sm sm:text-base">All systems normal</span> </div> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="h-full grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="order-2 sm:order-1 flex flex-col items-center justify-center sm:items-start"> <div class="legal"> <a href="/legal/terms" class="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"></a> <a href="/legal/privacy" class="text-current hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"></a> </div> <div class="text-xs sm:text-sm mt-2">&copy; 2024 | All rights reserved</div> </div> <div class="order-1 sm:order-2 flex justify-center sm:justify-end"> <div class="flex flex-wrap gap-1 items-center justify-center"> ${SOCIALS.map((SOCIAL) => renderTemplate`<a${addAttribute(SOCIAL.HREF, "href")} target="_blank"${addAttribute(`${SITE.TITLE} on ${SOCIAL.NAME}`, "aria-label")} class="group size-8 sm:size-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20  blend"> <svg class="size-full fill-current group-hover:fill-black group-hover:dark:fill-white blend"> <use${addAttribute(`/social.svg#${SOCIAL.ICON}`, "href")}></use> </svg> </a>`)} </div> </div> </div> ` }));
}, "G:/ml/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("flex items-center justify-center px-3 py-1 rounded-full", "text-current hover:text-black dark:hover:text-white", "hover:bg-black/5 dark:hover:bg-white/20", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> <div class="flex gap-1 mt-5" data-astro-cid-hxtyo74s> <a href="/search"${addAttribute(`Search blog posts and projects on ${SITE.TITLE}`, "aria-label")}${addAttribute(cn("size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#search" data-astro-cid-hxtyo74s></use> </svg> </a> <a href="/rss.xml" target="_blank"${addAttribute(`Rss feed for ${SITE.TITLE}`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#rss" data-astro-cid-hxtyo74s></use> </svg> </a> <button id="drawer-theme-button"${addAttribute(`Toggle light and dark theme`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="block dark:hidden size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#sun" data-astro-cid-hxtyo74s></use> </svg> <svg class="hidden dark:block size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#moon" data-astro-cid-hxtyo74s></use> </svg> </button> </div> </div> `;
}, "G:/ml/src/components/Drawer.astro", void 0);

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Drawer", $$Drawer, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "G:/ml/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, SITE as S, $$Header as a };
