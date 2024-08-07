

// nav-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
const arrow = document.querySelector('#arrow');
const navMenu = document.querySelector('#nav-menu');

arrow.addEventListener('click', function() {
    arrow.classList.toggle('arrow-active');
    navMenu.classList.toggle('hidden');
});







// Dark Toogle
const html = document.querySelector('html');
const btn = document.querySelector('#btn');
const icon = document.querySelector('#btn_icon');

// Simpan status mode gelap ke localStorage
function store(value) {
  localStorage.setItem('dark', value);
}

// Muat status mode gelap dari localStorage
function load() {
  const dark = localStorage.getItem('dark');
  
  if (!dark) {
    store('false');
    icon.classList.add('fa-sun');
  } else if (dark === 'true') {
    html.classList.add('dark');
    icon.classList.add('fa-moon');
  } else if (dark === 'false') {
    icon.classList.add('fa-sun');
  }
}

load();

// Toggle mode gelap saat tombol diklik
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









