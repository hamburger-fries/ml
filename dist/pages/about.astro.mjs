export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/about_1e441eeb.mjs').then(n => n.b);

export { page };
