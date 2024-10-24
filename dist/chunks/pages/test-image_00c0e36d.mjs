import { f as createComponent, r as renderTemplate, l as defineScriptVars, g as addAttribute, j as renderHead } from '../astro_bc932ddb.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$TestImage = createComponent(($$result, $$props, $$slots) => {
  console.log("Server-side: Test Image page is being rendered");
  const imagePath = "/images/front-component/drinks.jpg";
  console.log(`Server-side: Image path: ${imagePath}`);
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Test Image</title>', "</head> <body> <h1>Test Image Page</h1> <p>Attempting to load image from: ", "</p> <img", ' alt="Drinks" width="400" height="400"> <script>(function(){', "\n        console.log('Client-side: Test Image page script executed');\n        console.log(`Client-side: Attempting to load image from: ${imagePath}`);\n        const img = document.querySelector('img');\n        if (img) {\n            img.addEventListener('load', () => console.log('Client-side: Image loaded successfully'));\n            img.addEventListener('error', (e) => {\n                console.error('Client-side: Error loading image:', e);\n                console.error('Client-side: Image src:', img.src);\n            });\n        } else {\n            console.error('Client-side: Image element not found');\n        }\n    })();<\/script> </body> </html>"], ['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Test Image</title>', "</head> <body> <h1>Test Image Page</h1> <p>Attempting to load image from: ", "</p> <img", ' alt="Drinks" width="400" height="400"> <script>(function(){', "\n        console.log('Client-side: Test Image page script executed');\n        console.log(\\`Client-side: Attempting to load image from: \\${imagePath}\\`);\n        const img = document.querySelector('img');\n        if (img) {\n            img.addEventListener('load', () => console.log('Client-side: Image loaded successfully'));\n            img.addEventListener('error', (e) => {\n                console.error('Client-side: Error loading image:', e);\n                console.error('Client-side: Image src:', img.src);\n            });\n        } else {\n            console.error('Client-side: Image element not found');\n        }\n    })();<\/script> </body> </html>"])), renderHead(), imagePath, addAttribute(imagePath, "src"), defineScriptVars({ imagePath }));
}, "G:/ml/src/pages/test-image.astro", void 0);

const $$file = "G:/ml/src/pages/test-image.astro";
const $$url = "/test-image";

export { $$TestImage as default, $$file as file, $$url as url };
