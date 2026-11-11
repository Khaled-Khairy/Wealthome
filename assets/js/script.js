'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navbarToggler = document.querySelector('[data-navbar-toggler]');

$navbarToggler.addEventListener('click', () => {
  $navbar.classList.toggle('active');
  $navbarToggler.classList.toggle('active');
});

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', (e) => {
  $header.classList.toggle('active', window.scrollY > 50);
});

// Active nav link on click
const $navLinks = document.querySelectorAll('.navbar_link');
$navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    $navLinks.forEach((l) => l.classList.remove('active'));
    link.classList.add('active');
    // close mobile menu after clicking
    $navbar.classList.remove('active');
    $navbarToggler.classList.remove('active');
  });
});

const properties = [
  {
    image: 'property-1.jpg',
    name: 'COVA Home Realty',
    price: '$710.68',
    address: '1901 Thornridge Cir. Shiloh, Hawaii 81063',
    beds: 3,
    baths: 2,
    sqft: 1430,
    isNew: true,
  },
  {
    image: 'property-2.jpg',
    name: 'Exit Realty',
    price: '$630.44',
    address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
    beds: 5,
    baths: 4,
    sqft: 1630,
  },
  {
    image: 'property-3.jpg',
    name: 'The Real Estate Group',
    price: '$475.22',
    address: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    beds: 8,
    baths: 5,
    sqft: 1240,
  },
  {
    image: 'property-4.jpg',
    name: '757 Realty',
    price: '$576.28',
    address: '4140 Parker Rd. Allentown, New Mexico 31134',
    beds: 6,
    baths: 6,
    sqft: 1260,
  },
  {
    image: 'property-5.jpg',
    name: 'Beach Pros Realty Inc.',
    price: '$473.85',
    address: '2715 Ash Dr. San Jose, South Dakota 83475',
    beds: 10,
    baths: 8,
    sqft: 2350,
  },
  {
    image: 'property-6.jpg',
    name: 'Keller Williams Elite Town Center',
    price: '$105.55',
    address: '3517 W. Gray St. Utica, Pennsylvania 57867',
    beds: 8,
    baths: 8,
    sqft: 1950,
  },
  {
    image: 'property-7.jpg',
    name: 'All Pros Real Estate',
    price: '$739.65',
    address: '8502 Preston Rd. Inglewood, Maine 98380',
    beds: 4,
    baths: 4,
    sqft: 1580,
  },
  {
    image: 'property-8.jpg',
    name: 'FIT Realty',
    price: '$948.55',
    address: '4517 Washington Ave. Manchester, Kentucky 39495',
    beds: 3,
    baths: 2,
    sqft: 1120,
  },
];

const propertyList = document.getElementById('property-list');
const template = document.getElementById('property-card-template');

properties.forEach((p) => {
  const card = template.content.cloneNode(true);

  const img = card.querySelector('[data-image]');
  img.src = `assets/images/${p.image}`;
  img.alt = p.name;

  card.querySelector('[data-price]').textContent = p.price;
  card.querySelector('[data-name]').textContent = p.name;
  card.querySelector('[data-address]').textContent = p.address;
  card.querySelector('[data-beds]').textContent = `${p.beds} Beds`;
  card.querySelector('[data-baths]').textContent = `${p.baths} Baths`;
  card.querySelector('[data-sqft]').textContent = `${p.sqft} sqft`;

  if (!p.isNew) card.querySelector('[data-badge]').remove();

  propertyList.appendChild(card);
});

propertyList.addEventListener('click', (e) => {
  const favBtn = e.target.closest('.fav-btn');
  if (!favBtn) return;

  favBtn.classList.toggle('active');
});

const stories = [
  { name: 'Chris Traeger', rating: 5.0 },
  { name: 'Duke Silver', rating: 5.0 },
  { name: 'Tsukasa Aoi', rating: 5.0 },
  { name: 'Freida Varnes', rating: 5.0 },
  { name: 'Carl Lorthner', rating: 5.0 },
  { name: 'Marci Senter', rating: 5.0 },
];

const list = document.getElementById('story-list');
const storyTemplate = document.getElementById('story-template');

const starHTML = '<span class="material-symbols-rounded" aria-hidden="true">star</span>';

stories.forEach((story, i) => {
  const n = i + 1;
  const card = storyTemplate.content.cloneNode(true);

  card.querySelector('.story-card').style.backgroundImage = `url(./assets/images/story-${n}.jpg)`;

  card.querySelector('.title-small').textContent = story.name;

  card.querySelector('.stars').outerHTML = starHTML.repeat(Math.round(story.rating));

  const data = card.querySelector('data');
  data.value = story.rating.toFixed(1);
  data.textContent = story.rating.toFixed(1);

  const img = card.querySelector('img');
  img.src = `./assets/images/story-avatar-${n}.jpg`;
  img.alt = story.name;

  list.appendChild(card);
});
