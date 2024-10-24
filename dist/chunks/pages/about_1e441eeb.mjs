import { e as createAstro, f as createComponent, r as renderTemplate, g as addAttribute, m as maybeRenderHead, h as renderSlot, i as renderComponent, j as renderHead } from '../astro_bc932ddb.mjs';
import { clsx } from 'clsx';
/* empty css                           */import { twMerge } from 'tailwind-merge';

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://astro-sphere-demo.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/open-graph.jpg" } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', '><!-- Preconnect to external domains --><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Preload fonts --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Sitemap --><link rel="sitemap" href="/sitemap-index.xml"><!-- RSS-Feed --><link rel="alternate" type="application/rss+xml"', "", '><!-- Web App Manifest --><link rel="manifest" href="/manifest.json"><!-- Structured Data --><script type="application/ld+json">\n  {\n    "@context": "http://schema.org",\n    "@type": "WebSite",\n    "name": "{title}",\n    "url": "{Astro.url}",\n    "description": "{description}"\n  }\n<\/script><!-- Global Scripts --><script>\n  // Inline critical JavaScript here\n  // Theme switcher\n  const theme = (() => {\n    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n      return localStorage.getItem("theme");\n    }\n    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n      return "dark";\n    }\n    return "light";\n  })();\n  if (theme === "light") {\n    document.documentElement.classList.remove("dark");\n  } else {\n    document.documentElement.classList.add("dark");\n  }\n  window.localStorage.setItem("theme", theme);\n<\/script>'])), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "title"), addAttribute(`${Astro2.site}rss.xml`, "href"));
}, "G:/ml/src/components/BaseHead.astro", void 0);

const SITE = {
  TITLE: "MarkLaita",
  DESCRIPTION: "Welcome to MarkLaita, a portfolio and blog for designers and developers.",
  AUTHOR: "Mark Laita"
};
const LINKS = [
  {
    TEXT: "Drinks",
    HREF: "/drinks"
  },
  {
    TEXT: "Cosmetics",
    HREF: "/cosmetics"
  },
  {
    TEXT: "Technology",
    HREF: "/technology"
  },
  {
    TEXT: "People",
    HREF: "/people"
  },
  {
    TEXT: "Animals",
    HREF: "/animals"
  },
  {
    TEXT: "Still-Life",
    HREF: "/still-life"
  },
  {
    TEXT: "Food",
    HREF: "/food"
  },
  {
    TEXT: "About",
    HREF: "/about"
  },
  {
    TEXT: "Contact",
    HREF: "/contact"
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
  const filteredLinks = LINKS.filter(
    (LINK) => LINK.TEXT !== "About" && LINK.TEXT !== "Contact"
  );
  const allLinks = [
    ...filteredLinks,
    { HREF: "/about", TEXT: "About" },
    { HREF: "/contact", TEXT: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<header id="header" class="fixed top-0 w-full z-[100] bg-white dark:bg-black"> ${renderComponent($$result, "Container", $$Container, { "size": "xl" }, { "default": ($$result2) => renderTemplate` <div class="relative py-2 sm:py-4"> <div class="flex items-center justify-between"> <a href="/" class="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 ease-in-out"> <img src="/images/logo.png" alt="Mark Lata Logo" class="h-6 w-auto sm:h-8 block dark:hidden"> <img src="/images/logo-dark.png" alt="Mark Lata Logo" class="h-6 w-auto sm:h-8 hidden dark:block"> </a> <nav class="hidden md:flex items-center justify-between gap-4 text-base"> ${allLinks.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn(
    "px-3 py-2 rounded-md transition-colors duration-300 ease-in-out",
    pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
  ), "class")}> ${LINK.TEXT} </a>`)} </nav> <div class="flex items-center gap-4"> <button id="header-theme-button" aria-label="Toggle light and dark theme" class="flex w-8 h-8 sm:w-10 sm:h-10 rounded-full p-2 items-center justify-center hover:bg-black/5 dark:hover:bg-white/20 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 block dark:hidden"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path> </svg> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hidden dark:block"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"></path> </svg> </button> <button id="mobile-menu-toggle" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 hover:bg-black/5 dark:hover:bg-white/20 rounded-md transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg> </button> </div> </div> <!-- Mobile Menu --> <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-black/10 dark:border-white/25 transform transition-[opacity,transform] duration-300 ease-in-out opacity-0" aria-labelledby="mobile-menu-toggle" role="navigation"> <nav class="flex flex-col py-2"> ${allLinks.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn(
    "px-4 py-2 transition-colors duration-300 ease-in-out",
    pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "bg-black dark:bg-white text-white dark:text-black" : "hover:bg-black/5 dark:hover:bg-white/20 hover:text-black dark:hover:text-white"
  ), "class")}> ${LINK.TEXT} </a>`)} </nav> </div> </div> ` })} </header> `;
}, "G:/ml/src/components/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<footer class="relative bg-white dark:bg-black"> <div> <section class="py-3 sm:py-5"> ', ' </section> <section class="py-3 sm:py-5 border-t border-black/10 dark:border-white/25"> ', ' </section> <section class="py-3 sm:py-5 border-t border-black/10 dark:border-white/25"> ', ' </section> </div> </footer> <script>\n  function goBackToTop(event) {\n    event.preventDefault();\n    window.scrollTo({\n      top: 0,\n      behavior: "smooth",\n    });\n  }\n\n  function initializeBackToTop() {\n    const backToTop = document.getElementById("back-to-top");\n    backToTop?.addEventListener("click", goBackToTop);\n  }\n\n  document.addEventListener("astro:after-swap", initializeBackToTop);\n  initializeBackToTop();\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="flex items-center justify-center sm:justify-end"> <button id="back-to-top" aria-label="Back to top of page" class="group flex w-fit p-1.5 gap-1.5 text-sm items-center border rounded hover:bg-black/5 hover:dark:bg-white/10 border-black/15 dark:border-white/20 transition-colors duration-300 ease-in-out"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="stroke-current group-hover:stroke-black group-hover:dark:stroke-white rotate-90"> <line x1="19" y1="12" x2="5" y2="12" class="scale-x-0 group-hover:scale-x-100 translate-x-3 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></line> <polyline points="12 19 5 12 12 5" class="translate-x-1 group-hover:translate-x-0 transition-all duration-300 ease-in-out"></polyline> </svg> <div class="w-full group-hover:text-black group-hover:dark:text-white transition-colors duration-300 ease-in-out">
Back to top
</div> </button> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="flex flex-col items-center sm:items-start"> <a href="/" class="flex gap-1 w-fit hover:opacity-80 transition-opacity duration-300 ease-in-out"> <img src="/images/logo.png" alt="Mark Lata Logo" class="h-6 sm:h-8 w-auto block dark:hidden"> <img src="/images/logo-dark.png" alt="Mark Lata Logo" class="h-6 sm:h-8 w-auto hidden dark:block"> </a> </div> <div class="flex gap-2 justify-center sm:justify-end items-center"> <span class="relative flex h-3 w-3"> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300"></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span> </span> <span class="text-sm sm:text-base">All systems normal</span> </div> </div> ` }), renderComponent($$result, "Container", $$Container, { "size": "md" }, { "default": ($$result2) => renderTemplate` <div class="h-full grid grid-cols-1 sm:grid-cols-2 gap-3"> <div class="order-2 sm:order-1 flex flex-col items-center sm:items-start"> <div class="text-xs sm:text-sm">&copy; 2024 | All rights reserved</div> </div> <div class="order-1 sm:order-2 flex justify-center sm:justify-end"> <!-- Social icons can be added here if needed --> </div> </div> ` }));
}, "G:/ml/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Drawer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Drawer;
  const { pathname } = Astro2.url;
  const subpath = pathname.match(/[^/]+/g);
  return renderTemplate`${maybeRenderHead()}<div id="drawer" class="fixed inset-0 h-0 z-40 overflow-hidden flex flex-col items-center justify-center md:hidden bg-neutral-100 dark:bg-neutral-900 transition-[height] duration-300 ease-in-out" data-astro-cid-hxtyo74s> <nav class="flex flex-col items-center space-y-2" data-astro-cid-hxtyo74s> ${LINKS.map((LINK) => renderTemplate`<a${addAttribute(LINK.HREF, "href")}${addAttribute(cn("flex items-center justify-center px-3 py-1 rounded-full", "text-current hover:text-black dark:hover:text-white", "hover:bg-black/5 dark:hover:bg-white/20", "transition-colors duration-300 ease-in-out", pathname === LINK.HREF || "/" + subpath?.[0] === LINK.HREF ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> ${LINK.TEXT} </a>`)} </nav> <div class="flex gap-1 mt-5" data-astro-cid-hxtyo74s> <a href="/search"${addAttribute(`Search blog posts and projects on ${SITE.TITLE}`, "aria-label")}${addAttribute(cn("size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out", pathname === "/search" || "/" + subpath?.[0] === "search" ? "pointer-events-none bg-black dark:bg-white text-white dark:text-black" : ""), "class")} data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#search" data-astro-cid-hxtyo74s></use> </svg> </a> <a href="/rss.xml" target="_blank"${addAttribute(`Rss feed for ${SITE.TITLE}`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#rss" data-astro-cid-hxtyo74s></use> </svg> </a> <button id="drawer-theme-button"${addAttribute(`Toggle light and dark theme`, "aria-label")} class="size-9 rounded-full p-2 items-center justify-center bg-transparent hover:bg-black/5 dark:hover:bg-white/20 stroke-current hover:stroke-black hover:dark:stroke-white border border-black/10 dark:border-white/25 transition-colors duration-300 ease-in-out" data-astro-cid-hxtyo74s> <svg class="block dark:hidden size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#sun" data-astro-cid-hxtyo74s></use> </svg> <svg class="hidden dark:block size-full" data-astro-cid-hxtyo74s> <use href="/ui.svg#moon" data-astro-cid-hxtyo74s></use> </svg> </button> </div> </div> `;
}, "G:/ml/src/components/Drawer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', "", '</head> <body class="flex flex-col min-h-screen"> ', " ", " ", " ", '  <script src="/js/theme.js"><\/script> </body> </html>'])), renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${title} | ${SITE.TITLE}`, "description": description }), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Drawer", $$Drawer, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "G:/ml/src/layouts/PageLayout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const title = "About Mark Lata";
  const description = "Learn more about Mark Lata and his photography work.";
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, { "size": "md" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl font-bold mb-6">About Mark Lata</h1> <div class="prose prose-lg dark:prose-invert"> <p> <strong>Mark Laita</strong> has produced award-winning commercial work for
        clients such as Adidas, Apple and Mercedes-Benz. Laita&#8217;s first book
        of non-commercial work, <em>Created Equal, </em>is the result of an
        eight-year-long, cross-country project featuring 8&#215;10 black and
        white portraits of Americans from a wide array of cultures, occupations
        and backgrounds. His work has been exhibited in galleries in the United
        States and Europe.
</p> </div> ` })} ` })}`;
}, "G:/ml/src/pages/about.astro", void 0);

const $$file = "G:/ml/src/pages/about.astro";
const $$url = "/about";

const about = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageLayout as $, SITE as S, $$Header as a, about as b };
