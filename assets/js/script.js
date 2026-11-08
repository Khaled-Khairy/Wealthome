'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navbarToggler = document.querySelector('[data-navbar-toggler]');

$navbarToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', (e) => {
  $header.classList.toggle('active', window.scrollY > 50);
});
