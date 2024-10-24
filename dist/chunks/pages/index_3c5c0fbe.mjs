import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { S as SITE, $ as $$PageLayout } from './about_1e441eeb.mjs';
import { $ as $$FrontPageHeroImages } from './demo_cd3a0c7b.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Home", "description": SITE.DESCRIPTION }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1064px] mx-auto mt-[30px]"> ${renderComponent($$result2, "FrontPageHeroImages", $$FrontPageHeroImages, {})} </main> ` })}`;
}, "G:/ml/src/pages/index.astro", void 0);

const $$file = "G:/ml/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
