import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { S as SITE, $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$FrontPageHeroImages } from '../chunks/FrontPageHeroImages_CvidoTRO.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex flex-col justify-center"> <section class="w-full py-8 sm:py-12 md:py-16"> ${renderComponent($$result2, "FrontPageHeroImages", $$FrontPageHeroImages, {})} </section> </main> ` })}`;
}, "G:/ml/src/pages/index.astro", void 0);

const $$file = "G:/ml/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
