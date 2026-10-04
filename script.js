(() => {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  menuBtn?.addEventListener('click', () => {
    const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!isOpen));
    mobileNav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  }));

  const reveal = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveal.forEach(el => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        window.setTimeout(() => entry.target.classList.add('is-visible'), delay);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 });
    reveal.forEach(el => io.observe(el));
  }

  const lightbox = document.querySelector('#lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  document.querySelectorAll('[data-gallery]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!lightbox || !lightboxImg) return;
      lightboxImg.src = btn.dataset.gallery;
      lightboxImg.alt = btn.querySelector('img')?.alt || 'Powiększony podgląd';
      lightbox.showModal();
    });
  });
  lightbox?.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', e => { if (e.target === lightbox) lightbox.close(); });

  const privacy = document.querySelector('#privacyDialog');
  document.querySelector('.privacy-open')?.addEventListener('click', () => privacy?.showModal());
  privacy?.querySelector('.privacy-close')?.addEventListener('click', () => privacy.close());
  privacy?.addEventListener('click', e => { if (e.target === privacy) privacy.close(); });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();
