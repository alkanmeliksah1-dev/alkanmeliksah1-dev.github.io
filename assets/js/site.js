/* ==========================================================
   Ortak menü, mobil panel, alt bilgi ve tema düğmesi.
   İsim, menü ve sosyal medya linkleri yalnızca burada değişir.
   ========================================================== */

const SITE = {
  name: 'Melikşah Alkan',
  role: 'Composer · Flutist · Sound Designer',
  city: 'Istanbul',
  email: 'info@meliksahalkan.com',
  pages: [
    ['index.html', 'Home'],
    ['biography.html', 'Biography'],
    ['works.html', 'Works'],
    ['events.html', 'Events'],
    ['gallery.html', 'Gallery'],
    ['contact.html', 'Contact'],
  ],
  // Link eklemek için adresi doldurman yeterli; boş olanlar görünmez.
  social: {
    instagram: '',
    youtube: '',
    soundcloud: '',
  },
};

const ICONS = {
  instagram: '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z"/></svg>',
  soundcloud: '<svg viewBox="0 0 24 24"><path d="M24 14.2c0 1.8-1.6 3.1-3.4 3.1h-8.2a.7.7 0 0 1-.7-.7V7.9c0-.3.2-.6.5-.7 0 0 .7-.5 2.3-.5a5.4 5.4 0 0 1 5.3 4.3 3.2 3.2 0 0 1 4.2 3.2zM10.7 8.4c.3 3 .4 5.7 0 8.7a.3.3 0 0 1-.5 0c-.4-3-.2-5.7 0-8.7a.3.3 0 0 1 .5 0zM9.1 9.4c.3 2.7.4 5 0 7.7a.3.3 0 0 1-.6 0c-.3-2.6-.3-5 0-7.7a.3.3 0 0 1 .6 0zM7.4 9.2c.3 2.7.4 5.2 0 7.9a.3.3 0 0 1-.5 0c-.4-2.7-.3-5.2 0-7.9a.3.3 0 0 1 .5 0zM5.8 10c.3 2.4.3 4.7 0 7.1a.3.3 0 0 1-.6 0c-.3-2.4-.3-4.7 0-7.1a.3.3 0 0 1 .6 0zM4.1 11.7c.4 1.9.2 3.5 0 5.4a.3.3 0 0 1-.5 0c-.2-1.9-.4-3.5 0-5.4a.3.3 0 0 1 .5 0z"/></svg>',
};

(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').replace(/^$/, 'index.html');
  const current = here.endsWith('.html') ? here : here + '.html';
  const isActive = (href) => (href === current ? ' class="active"' : '');
  const links = SITE.pages.map(([href, label]) => `<a href="${href}"${isActive(href)}>${label}</a>`);

  const socialHTML = Object.entries(SITE.social)
    .filter(([, url]) => url)
    .map(([key, url]) => `<a class="icon-btn" href="${url}" target="_blank" rel="noopener" aria-label="${key}">${ICONS[key]}</a>`)
    .join('');

  document.body.insertAdjacentHTML('afterbegin', `
    <header class="site-nav">
      <a class="nav-logo" href="index.html">${SITE.name}</a>
      <ul class="nav-links">${links.map((l) => `<li>${l}</li>`).join('')}</ul>
      <div class="nav-tools">
        <button class="icon-btn" id="themeToggle" aria-label="Toggle dark mode">
          <svg class="icon-moon" viewBox="0 0 24 24"><path d="M21.75 15A9.7 9.7 0 0 1 18 15.75 9.75 9.75 0 0 1 9 2.25 9.75 9.75 0 1 0 21.75 15z"/></svg>
          <svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5"/><path d="M11 1h2v3h-2zM11 20h2v3h-2zM1 11h3v2H1zM20 11h3v2h-3zM4.2 2.8l2.1 2.1-1.4 1.4-2.1-2.1zM17.7 18.1l2.1 2.1-1.4 1.4-2.1-2.1zM2.8 19.8l2.1-2.1 1.4 1.4-2.1 2.1zM18.1 6.3l2.1-2.1 1.4 1.4-2.1 2.1z"/></svg>
        </button>
        <button class="icon-btn hamburger" id="menuBtn" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </header>
    <div class="overlay" id="overlay"></div>
    <aside class="side-panel" id="sidePanel">
      <nav>${links.join('')}</nav>
      <div class="sp-meta">
        <p>${SITE.role}</p>
        <p><a href="mailto:${SITE.email}">${SITE.email}</a></p>
        ${socialHTML ? `<div class="social" style="margin-top:18px">${socialHTML}</div>` : ''}
      </div>
    </aside>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <footer class="site-footer">
      <span>Composer · ${SITE.city}</span>
      <span>© ${new Date().getFullYear()} ${SITE.name}</span>
    </footer>
  `);

  document.querySelectorAll('[data-social]').forEach((el) => { el.innerHTML = socialHTML; });

  // Tema
  const root = document.documentElement;
  document.getElementById('themeToggle').addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') !== 'dark';
    dark ? root.setAttribute('data-theme', 'dark') : root.removeAttribute('data-theme');
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
  });

  // Mobil menü
  const btn = document.getElementById('menuBtn');
  const panel = document.getElementById('sidePanel');
  const overlay = document.getElementById('overlay');
  const toggle = (open) => {
    panel.classList.toggle('open', open);
    overlay.classList.toggle('active', open);
    btn.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => toggle(!panel.classList.contains('open')));
  overlay.addEventListener('click', () => toggle(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggle(false); });

  // Liste filtresi (Eserler sayfası)
  document.querySelectorAll('.filter').forEach((bar) => {
    const list = document.querySelector(bar.dataset.target);
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      bar.querySelectorAll('button').forEach((x) => x.classList.toggle('active', x === b));
      list.querySelectorAll('li').forEach((li) => {
        li.hidden = b.dataset.f !== 'all' && li.dataset.cat !== b.dataset.f;
      });
    });
  });
})();
