export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/demo_cd3a0c7b.mjs').then(n => n.d);

export { page };
