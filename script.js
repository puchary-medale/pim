(() => {
  const header = document.querySelector('.site-header');
  const menuBtn = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const progress = document.querySelector('.scroll-progress span');
  const updateProgress = () => {
    if (!progress) return;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    progress.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress, { passive: true });

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


  const catalog = document.querySelector('#catalogDialog');
  const catalogFrame = catalog?.querySelector('[data-catalog-frame]');
  const openCatalog = () => {
    if (!catalog) return;
    if (catalogFrame && !catalogFrame.getAttribute('src')) catalogFrame.setAttribute('src', 'assets/katalog-tryumf-2026.pdf#view=FitH&toolbar=1&navpanes=0');
    catalog.showModal();
  };
  document.querySelectorAll('[data-catalog-open]').forEach(btn => btn.addEventListener('click', openCatalog));
  catalog?.querySelector('.catalog-dialog-close')?.addEventListener('click', () => catalog.close());
  catalog?.addEventListener('click', e => {
    const rect = catalog.getBoundingClientRect();
    const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
    if (!inside) catalog.close();
  });

  const privacy = document.querySelector('#privacyDialog');
  document.querySelector('.privacy-open')?.addEventListener('click', () => privacy?.showModal());
  privacy?.querySelector('.privacy-close')?.addEventListener('click', () => privacy.close());
  privacy?.addEventListener('click', e => { if (e.target === privacy) privacy.close(); });

  document.querySelector('#year').textContent = new Date().getFullYear();
})();

(() => {
  const brief = document.querySelector('#awardBrief');
  const summary = document.querySelector('#briefSummary');
  const send = document.querySelector('#briefSend');
  if (!brief || !summary || !send) return;

  const updateBrief = () => {
    const data = new FormData(brief);
    const product = data.get('product') || 'Puchary';
    const style = data.get('style') || 'Sportowy';
    const extras = data.getAll('extras');
    const shortText = [product, style, ...extras].join(' · ');
    summary.textContent = shortText;
    const message = `Dzień dobry, interesują mnie: ${product}. Charakter: ${style}.${extras.length ? ` Personalizacja: ${extras.join(', ')}.` : ''} Proszę o kontakt i pomoc w doborze.`;
    send.href = `mailto:biuro.stsmedia@gmail.com?subject=${encodeURIComponent("Zapytanie o nagrody")}&body=${encodeURIComponent(message)}`;
  };

  brief.addEventListener('change', updateBrief);
  updateBrief();
})();
