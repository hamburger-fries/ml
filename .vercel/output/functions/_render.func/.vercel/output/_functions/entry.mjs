import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_3V7zW-tG.mjs';
import { manifest } from './manifest_Ntmtk8cm.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/animals.astro.mjs');
const _page2 = () => import('./pages/contact.astro.mjs');
const _page3 = () => import('./pages/cosmetics.astro.mjs');
const _page4 = () => import('./pages/demo.astro.mjs');
const _page5 = () => import('./pages/drinks.astro.mjs');
const _page6 = () => import('./pages/food.astro.mjs');
const _page7 = () => import('./pages/people.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/still-life.astro.mjs');
const _page10 = () => import('./pages/technology.astro.mjs');
const _page11 = () => import('./pages/test.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.5_rollup@4.24.0_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/animals.astro", _page1],
    ["src/pages/contact.astro", _page2],
    ["src/pages/cosmetics.astro", _page3],
    ["src/pages/demo.astro", _page4],
    ["src/pages/drinks.astro", _page5],
    ["src/pages/food.astro", _page6],
    ["src/pages/people.astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/still-life.astro", _page9],
    ["src/pages/technology.astro", _page10],
    ["src/pages/test.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "cfa549ce-1379-41d5-9e4a-bd094ac1cafc",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
