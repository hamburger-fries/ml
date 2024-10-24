export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/animals_43a0d420.mjs').then(n => n.a);

export { page };
