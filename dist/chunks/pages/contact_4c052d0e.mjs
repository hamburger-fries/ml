import { f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex-0 flex items-center"> <div class="w-full max-w-2xl mx-auto px-4 my-[30px]"> <h1 class="text-3xl sm:text-4xl font-bold mb-8 text-black dark:text-white">
Contact
</h1> <div class="flex items-center gap-3 group"> <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 group-hover:bg-black/10 dark:group-hover:bg-white/20 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-black dark:text-white"> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path> <polyline points="22,6 12,13 2,6"></polyline> </svg> </div> <div class="flex-1"> <div class="text-sm text-black/60 dark:text-white/60">
Email Address
</div> <a href="mailto:studio@marklaita.com" class="text-base sm:text-lg text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors duration-300">
studio@marklaita.com
</a> </div> </div> </div> </main> ` })}`;
}, "G:/ml/src/pages/contact.astro", void 0);

const $$file = "G:/ml/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
