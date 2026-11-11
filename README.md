# WealtHome 🏠

A responsive real estate landing page — my **first ever HTML, CSS & JavaScript project**.

Built completely from scratch without any frameworks or libraries, just plain web fundamentals.

---

## ✨ Features

- **Sticky header** with scroll animation that slides in and changes background
- **Animated mobile navbar** that scales in/out smoothly on toggle
- **Hero section** with gradient background, search bar (Want to / Property type / Location)
- **Property listings** rendered dynamically from a `<template>` via JavaScript
- **Feature sections** highlighting renovation services
- **Video section** with a play button overlay
- **Customer stories** section with star ratings, rendered from a template
- **Footer** with quick links, support links, and social icons
- **Fully responsive** design with CSS media queries

---

## 🛠️ Built With

| Technology                | Purpose                                          |
| ------------------------- | ------------------------------------------------ |
| HTML5                     | Semantic page structure                          |
| CSS3                      | Styling, animations, layout (Grid & Flexbox)     |
| Vanilla JavaScript        | DOM manipulation, navbar toggle, dynamic content |
| Google Fonts — Montserrat | Typography                                       |
| Material Symbols Rounded  | Icons                                            |

---

## 📁 Project Structure

```
WealtHome/
├── index.html              # Main HTML file
├── favicon.svg             # Site favicon
├── style-guide.md          # Design tokens reference
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── script.js       # JavaScript logic
│   └── images/             # All images and icons
```

---

## 🚀 Getting Started

No build tools or dependencies needed. Just open it in a browser:

```bash
# Clone the repo
git clone https://github.com/Khaled-Khairy/Wealthome

# Open in browser
cd wealthome
start index.html     # Windows
open index.html      # macOS
```

Or simply drag `index.html` into your browser.

---

## 🎨 Design System

The project follows a consistent design token system defined in `style-guide.md` and in CSS custom properties:

- **Primary color:** `#2179FF` (blue scale from `#071833` → `#2179FF`)
- **Font:** Montserrat — weights 400, 600, 700
- **Border radius:** 8px → 12px → 16px → 32px → full pill
- **Shadows:** 4-level shadow scale
- **Transitions:** `200ms` quick · `500ms` smooth — both using `cubic-bezier(0, 0.7, 0.3, 1)`

---

## 📚 What I Learned

This was my first project, so I learned a lot building it:

- How CSS custom properties (variables) work and how to build a design system with them
- CSS Grid and Flexbox for layout
- CSS transitions and animations (`@keyframes`, `transform-origin`, `scale`)
- How `visibility` + `opacity` work together for smooth show/hide animations
- Using `<template>` elements to dynamically render cards with JavaScript
- Making a site responsive with media queries
- Semantic HTML and accessibility attributes (`aria-label`, `aria-hidden`, `role`)

---

> Made with ❤️ by **Khaled Mohamed** — 2026
