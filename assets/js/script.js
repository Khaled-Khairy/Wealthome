'use strict';

const $navbar = document.querySelector('[data-navbar]');
const $navbarToggler = document.querySelector('[data-navbar-toggler]');

$navbarToggler.addEventListener('click', () => $navbar.classList.toggle('active'));

const $header = document.querySelector('[data-header]');

window.addEventListener('scroll', (e) => {
  $header.classList.toggle('active', window.scrollY > 50);
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

properties.forEach((p) => {
  propertyList.insertAdjacentHTML(
    'beforeend',
    `
    <div class="card">
      <div class="card-banner">
        <figure class="img-holder" style="--width: 585; --height: 390">
          <img src="assets/images/${p.image}" width="585" height="390" alt="${p.name}" class="img-cover" />
        </figure>
        ${p.isNew ? '<span class="badge label-medium">New</span>' : ''}
        <button class="icon-btn fav-btn" aria-label="add to favorite">
          <span class="material-symbols-rounded" aria-hidden="true">favorite</span>
        </button>
      </div>
      <div class="card-content">
        <span class="title-large">${p.price}</span>
        <h3><a href="#" class="title-small card-title">${p.name}</a></h3>
        <address class="body-medium card-text">${p.address}</address>
        <div class="card-meta-list">
          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">bed</span>
            <span class="meta-text label-medium">${p.beds} Beds</span>
          </div>
          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">bathtub</span>
            <span class="meta-text label-medium">${p.baths} Baths</span>
          </div>
          <div class="meta-item">
            <span class="material-symbols-rounded meta-icon" aria-hidden="true">straighten</span>
            <span class="meta-text label-medium">${p.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
    `,
  );
});
