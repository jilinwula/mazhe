// TOC scrollspy: highlight current heading as user scrolls
(function () {
  var tocLinks = document.querySelectorAll('.toc-content a');
  if (!tocLinks.length) return;

  var headings = [];
  tocLinks.forEach(function (link) {
    var id = link.getAttribute('href');
    if (!id || id[0] !== '#') return;
    var el = document.getElementById(id.slice(1));
    if (el) headings.push({ el: el, link: link });
  });

  if (!headings.length) return;

  var activeLink = null;

  function onScroll() {
    var scrollY = window.scrollY;
    var offset = 80;
    var current = null;

    for (var i = headings.length - 1; i >= 0; i--) {
      if (headings[i].el.getBoundingClientRect().top + scrollY - offset <= scrollY) {
        current = headings[i];
        break;
      }
    }

    if (!current && headings.length) current = headings[0];

    if (current && current.link !== activeLink) {
      if (activeLink) activeLink.classList.remove('active');
      current.link.classList.add('active');
      activeLink = current.link;
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        onScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Smooth scroll on click
  tocLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href');
      if (!id || id[0] !== '#') return;
      var el = document.getElementById(id.slice(1));
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', id);
    });
  });

  onScroll();
})();
