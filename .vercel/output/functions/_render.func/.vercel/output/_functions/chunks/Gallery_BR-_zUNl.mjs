import { d as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent } from './astro/server_DMTdlq21.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Picture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Picture;
  const { imgUrl, alt, sizes, class: className } = Astro2.props;
  function generateSrcSet(url) {
    const widths = [300, 600, 1200];
    const urlParts = url.split(".");
    const extension = urlParts.length > 1 ? urlParts.pop() : "";
    const baseUrl = urlParts.join(".");
    if (!extension) {
      console.warn(`No file extension found for image: ${url}`);
      return url;
    }
    return widths.map((w) => `${baseUrl}-${w}w.${extension} ${w}w`).join(", ");
  }
  const srcset = generateSrcSet(imgUrl);
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(imgUrl, "src")}${addAttribute(srcset, "srcset")}${addAttribute(sizes || "(max-width: 1200px) 100vw, 1200px", "sizes")}${addAttribute(alt, "alt")}${addAttribute(className, "class")} loading="lazy">`;
}, "G:/ml/src/components/Picture.astro", void 0);

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full px-4 mt-8 columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3"> ${images.map((image) => renderTemplate`<div class="mb-3 break-inside-avoid"> ${renderComponent($$result, "Picture", $$Picture, { "imgUrl": image.imgUrl, "alt": image.alt, "sizes": "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw", "class": "w-full aspect-auto rounded-lg cursor-pointer gallery-image" })} </div>`)} </div> <div id="imageModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 hidden opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer"> <img id="modalImage" src="" alt="" class="max-w-[90vw] max-h-[90vh] object-contain"> </div> `;
}, "G:/ml/src/components/Gallery.astro", void 0);

export { $$Gallery as $ };
