// Asdale Dynamics, LLC — AI for Small-Business Bookkeeping site scripts

(function () {
  var menuButton = document.querySelector('.menu-button');
  var siteHeader = document.querySelector('.site-header');

  if (menuButton && siteHeader) {
    menuButton.addEventListener('click', function () {
      var open = siteHeader.classList.toggle('menu-open');
      menuButton.setAttribute('aria-expanded', String(open));
    });

    // Close menu when a nav link is clicked
    siteHeader.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        siteHeader.classList.remove('menu-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Highlight the current page in the nav
  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && (current === href || href === 'index.html' && current === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Print buttons on worksheet pages
  document.querySelectorAll('.print-button').forEach(function (button) {
    button.addEventListener('click', function () {
      window.print();
    });
  });
})();
