import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
import { $ as $$FrontPageHeroImages } from '../chunks/FrontPageHeroImages_CvidoTRO.mjs';
export { renderers } from '../renderers.mjs';

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "title": "Demo Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 relative"> <div class="h-10"></div> <!-- This creates a 40px space at the top --> ${renderComponent($$result2, "FrontPageHeroImages", $$FrontPageHeroImages, {})} <div class="mt-8"> <h1 class="text-3xl font-bold mb-6">Demo Page</h1> <p>This is a static demo page without any client-side components.</p> </div> </main> ` })} `;
}, "G:/ml/src/pages/demo.astro", void 0);

const $$file = "G:/ml/src/pages/demo.astro";
const $$url = "/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
