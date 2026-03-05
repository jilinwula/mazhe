// Theme toggle
(function () {
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    var html = document.documentElement;
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();

// Mobile nav
(function () {
  var btn = document.getElementById('mobile-menu-btn');
  var nav = document.getElementById('mobile-nav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open.toString());
    nav.setAttribute('aria-hidden', (!open).toString());
  });
})();

// Mobile reader sidebar
(function () {
  var toggle = document.getElementById('sidebar-toggle');
  var sidebar = document.getElementById('series-sidebar');
  var overlay = document.getElementById('sidebar-overlay');
  var closeBtn = document.getElementById('sidebar-close');
  if (!toggle || !sidebar || !overlay) return;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', openSidebar);
  overlay.addEventListener('click', closeSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeSidebar();
  });
})();

// Code block: inject language label + copy button
(function () {
  var highlights = document.querySelectorAll('.highlight');
  highlights.forEach(function (block) {
    var code = block.querySelector('code[data-lang]');
    var lang = code ? code.getAttribute('data-lang') : '';

    var header = document.createElement('div');
    header.className = 'code-header';

    var langEl = document.createElement('span');
    langEl.className = 'code-lang';
    langEl.textContent = lang || 'code';

    var copyBtn = document.createElement('button');
    copyBtn.className = 'code-copy';
    copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> 复制';

    copyBtn.addEventListener('click', function () {
      var pre = block.querySelector('pre');
      if (!pre) return;
      var text = pre.innerText
        .split('\n')
        .map(function (line) {
          return line.replace(/^\s*\d+\s+/, '');
        })
        .join('\n')
        .trim();

      navigator.clipboard.writeText(text).then(function () {
        copyBtn.classList.add('copied');
        copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> 已复制';
        setTimeout(function () {
          copyBtn.classList.remove('copied');
          copyBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> 复制';
        }, 2000);
      });
    });

    header.appendChild(langEl);
    header.appendChild(copyBtn);
    block.insertBefore(header, block.firstChild);
  });
})();
