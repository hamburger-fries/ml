document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      const expanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
      mobileMenuToggle.setAttribute('aria-expanded', (!expanded).toString());
      
      // First remove hidden to allow transition
      if (!expanded) {
        mobileMenu.classList.remove('hidden');
        // Small delay to ensure hidden is removed before starting transition
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            mobileMenu.classList.remove('opacity-0');
          });
        });
      } else {
        mobileMenu.classList.add('opacity-0');
        // Wait for transition to complete before hiding
        mobileMenu.addEventListener('transitionend', () => {
          mobileMenu.classList.add('hidden');
        }, { once: true });
      }
    });
  }
});
