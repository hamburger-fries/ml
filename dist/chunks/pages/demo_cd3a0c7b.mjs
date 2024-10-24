import { e as createAstro, f as createComponent, A as AstroError, k as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, i as renderComponent } from '../astro_bc932ddb.mjs';
import 'clsx';
import { $ as $$PageLayout } from './about_1e441eeb.mjs';
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_33dcc596.mjs';

const $$Astro$1 = createAstro("https://astro-sphere-demo.vercel.app");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "G:/ml/node_modules/.pnpm/astro@3.6.5_@types+node@17.0.45_typescript@5.6.3/node_modules/astro/components/Image.astro", void 0);

const $$Astro = createAstro("https://astro-sphere-demo.vercel.app");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "G:/ml/node_modules/.pnpm/astro@3.6.5_@types+node@17.0.45_typescript@5.6.3/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					const outDir = new URL("file:///G:/ml/dist/");
					new URL("_astro", outDir);
					const getImage = async (options) => await getImage$1(options, imageConfig);

const drinks = new Proxy({"src":"/_astro/drinks.c326e590.jpg","width":1860,"height":1352,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const cosmetics = new Proxy({"src":"/_astro/cosmetics.407a9e5c.jpg","width":1400,"height":1662,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const technology = new Proxy({"src":"/_astro/technology.93875d68.jpg","width":1400,"height":1829,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const people = new Proxy({"src":"/_astro/people.bf631fb4.jpg","width":1400,"height":1421,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const animals = new Proxy({"src":"/_astro/animals.2cd920eb.jpg","width":1860,"height":1795,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const stillLife = new Proxy({"src":"/_astro/still-life.e14f0cf1.jpg","width":1287,"height":1564,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const food = new Proxy({"src":"/_astro/food.5cc5b300.jpg","width":1400,"height":1693,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const animals2 = new Proxy({"src":"/_astro/animals2.ade155b3.jpg","width":1400,"height":1400,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							globalThis.astroAsset.referencedImages.add(target.fsPath);
							return target[name];
						}
					});

const $$FrontPageHeroImages = createComponent(($$result, $$props, $$slots) => {
  const images = [
    { src: drinks, alt: "Drinks", href: "/drinks" },
    { src: cosmetics, alt: "Cosmetics", href: "/cosmetics" },
    { src: technology, alt: "Technology", href: "/technology" },
    { src: people, alt: "People", href: "/people" },
    { src: animals, alt: "Animals", href: "/animals" },
    { src: stillLife, alt: "Still Life", href: "/still-life" },
    { src: food, alt: "Food", href: "/food" },
    { src: animals2, alt: "Animals", href: "/animals" }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="w-full px-4 py-8 mt-[18px] mb-[0px]"> <div class="max-w-[1600px] mx-auto"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[18px]"> ${images.map((image, index) => renderTemplate`<a${addAttribute(image.href, "href")} class="block overflow-hidden rounded-lg relative group aspect-square w-full h-full"> <div class="w-full h-full"> ${renderComponent($$result, "Image", $$Image, { "src": image.src, "alt": image.alt, "width": 400, "height": 400, "format": "webp", "quality": 80, "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110", "loading": index < 4 ? "eager" : "lazy" })} </div> <div class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"> <span class="text-white text-xl sm:text-2xl lg:text-3xl font-bold"> ${image.alt} </span> </div> </a>`)} </div> </div> </div>`;
}, "G:/ml/src/components/FrontPageHeroImages.astro", void 0);

const $$Demo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "title": "Demo Page" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 relative"> <div class="h-10"></div> <!-- This creates a 40px space at the top --> ${renderComponent($$result2, "FrontPageHeroImages", $$FrontPageHeroImages, {})} <div class="mt-8"> <h1 class="text-3xl font-bold mb-6">Demo Page</h1> <p>This is a static demo page without any client-side components.</p> </div> </main> ` })} `;
}, "G:/ml/src/pages/demo.astro", void 0);

const $$file = "G:/ml/src/pages/demo.astro";
const $$url = "/demo";

const demo = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$FrontPageHeroImages as $, demo as d };
