// scroll
window.onscroll = function() {
  const header = document.querySelector('header');
  if (header) {
      const fixedNav = header.offsetTop;
      if (window.pageYOffset > fixedNav) {
          header.classList.add('navbar-fixed');
      } else {
          header.classList.remove('navbar-fixed');
      }
  }
}

// arrow menu
const arrow = document.querySelector('#arrow');
const navMenu = document.querySelector('#nav-menu');

if (arrow && navMenu) {
  arrow.addEventListener('click', function() {
      arrow.classList.toggle('arrow-active');
      navMenu.classList.toggle('hidden');
  });
}

// dark mode
const html = document.querySelector('html');
const btn = document.querySelector('#btn');
const icon = document.querySelector('#btn_icon');

function store(value) {
localStorage.setItem('dark', value);
}


function load() {
const dark = localStorage.getItem('dark');

if (dark === 'true') {
  html.classList.add('dark');
  icon.classList.add('fa-moon');
} else {
  html.classList.remove('dark');
  icon.classList.add('fa-sun');
}
}

load();


if (btn && icon) {
  btn.addEventListener('click', () => {
      html.classList.toggle('dark');
      icon.classList.add('animate-spin');

      store(html.classList.contains('dark') ? 'true' : 'false');

      if (html.classList.contains('dark')) {
          icon.classList.remove('fa-sun');
          icon.classList.add('fa-moon');
      } else {
          icon.classList.remove('fa-moon');
          icon.classList.add('fa-sun');
      }

      setTimeout(() => {
          icon.classList.remove('animate-spin');
      }, 500);
  });
}

