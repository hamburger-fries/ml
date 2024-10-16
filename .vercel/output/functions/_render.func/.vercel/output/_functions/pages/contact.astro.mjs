import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DMTdlq21.mjs';
import { $ as $$PageLayout } from '../chunks/PageLayout_DumvWoJY.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Contact", "description": "Contact page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Contact</h1> <p>This is the Contact page.</p> ` })}`;
}, "G:/ml/src/pages/contact.astro", void 0);

const $$file = "G:/ml/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
