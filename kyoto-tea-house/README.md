# Kyoto Tea House

A high-fidelity, editorial-style landing page dedicated to digitally preserving and presenting the traditional Japanese Tea Ceremony (茶道，Sadō). The project bridges ancient aesthetic principles with modern web performance, embodying a "less is more" philosophy.

## 🍵 Project Overview

**Kyoto Tea House** demonstrates that traditional aesthetic principles and cutting-edge web performance are not mutually exclusive. By embracing the philosophy of **Ma (間)** - the profound sense of negative space - and utilizing vanilla technologies, we create a digital space that honors the tea ceremony's contemplative nature while delivering exceptional user experience across all devices.

## ✨ Features

- **Design Philosophy**: Based on the Japanese concept of Ma (negative space)
- **Zero Dependencies**: Built entirely with vanilla HTML5, CSS3, and ES6+ JavaScript
- **Performance Optimized**: Intersection Observer API for scroll reveals (<5KB)
- **Accessibility First**: Full semantic HTML5, ARIA labels, keyboard navigation
- **Motion Sensitivity**: Respects `prefers-reduced-motion` preferences
- **Responsive Design**: Gracefully collapses from desktop to mobile
- **Lightweight SVG Preloader**: With timeout fallback for slow connections

## 📁 Project Structure

```
kyoto-tea-house/
├── index.html              # Main HTML document
├── css/
│   ├── main.css            # Core styles & custom properties
│   ├── layout.css          # Grid systems & responsive layouts
│   ├── components.css      # Reusable UI components
│   └── utilities.css       # Helper classes
├── js/
│   ├── main.js             # Application entry point
│   ├── observer.js         # Scroll reveal logic (<5KB)
│   ├── navigation.js       # Fixed nav behavior
│   └── preloader.js        # SVG preloader management
├── assets/
│   ├── images/             # Optimized images
│   └── svg/                # Inline SVG icons & patterns
└── README.md               # This file
```

## 🎨 Design System

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Sumi (墨) | `#1a1a1a` | Primary text |
| Shiro (白) | `#faf9f6` | Background |
| Kouro (黄土) | `#c4b5a0` | Secondary elements |
| Matcha (抹茶) | `#7d8f69` | Highlights |
| Sakura (桜) | `#e8d5d5` | Subtle accents |
| Indigo (藍) | `#3d4c53` | Links/hover |
| Border | `#e5e3de` | Dividers |
| Muted | `#8b8885` | Secondary text |

### Typography

- **Primary**: Georgia, Times New Roman, serif
- **Display**: Palatino Linotype, Book Antiqua, serif
- **UI**: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif

### Fluid Typography Scale

Uses `clamp()` for responsive typography:
- `--text-xs`: 0.75rem - 0.875rem
- `--text-sm`: 0.875rem - 1rem
- `--text-base`: 1rem - 1.125rem
- `--text-lg`: 1.125rem - 1.25rem
- `--text-xl`: 1.25rem - 1.5rem
- `--text-2xl`: 1.5rem - 2rem
- `--text-3xl`: 2rem - 3rem

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in your browser
3. For module support, serve via a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Using PHP
php -S localhost:8000
```

4. Navigate to `http://localhost:8000`

### Browser Support

- **Modern Evergreen Browsers**: Chrome, Firefox, Safari, Edge (last 2 versions)
- **Mobile**: iOS Safari 14+, Chrome Android 85+
- **Graceful Degradation**: Functional experience on older browsers

## 📐 Technical Architecture

### Technology Stack

- **HTML5**: Semantic structure with ARIA landmarks
- **CSS3**: Custom properties, Grid, Flexbox, native animations
- **ES6+ JavaScript**: Modules, Intersection Observer, lightweight utilities
- **Zero External Dependencies**: No frameworks, no libraries

### Performance Budget

| Metric | Target |
|--------|--------|
| Total Page Weight | < 500KB |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Cumulative Layout Shift | < 0.1 |
| JavaScript Bundle | < 15KB (gzipped) |
| CSS Bundle | < 25KB (gzipped) |
| Lighthouse Score | > 95 |

### Current Bundle Sizes

- **Total Project**: ~88KB
- **CSS**: ~36KB (all stylesheets)
- **JavaScript**: ~24KB (all modules)
- **HTML**: ~12KB

## ♿ Accessibility Features

- **Skip Links**: Jump to main content
- **Semantic HTML5**: Proper landmark roles (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`)
- **ARIA Labels**: Descriptive labels for interactive elements
- **Focus Indicators**: Visible focus states for keyboard navigation
- **Color Contrast**: WCAG AA compliance (4.5:1 minimum)
- **Motion Sensitivity**: Respects `prefers-reduced-motion`
- **Keyboard Navigation**: Full keyboard accessibility

## 🎭 Responsive Breakpoints

- **Desktop**: 3-column feature grid, asymmetric content blocks
- **Tablet (≤1024px)**: 2-column feature grid
- **Mobile (≤768px)**: Single column, hamburger menu
- **Small Mobile (≤480px)**: Optimized spacing, hidden scroll indicator

## 🔧 Key Components

### Intersection Observer Scroll Reveals

```javascript
// Lightweight scroll reveal (<5KB)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
```

### CSS-Generated Washi Pattern

```css
.washi-pattern {
  background-color: var(--color-shiro);
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(196, 181, 160, 0.03) 2px, transparent 0),
    radial-gradient(circle at 75% 75%, rgba(196, 181, 160, 0.03) 1px, transparent 0);
  background-size: 40px 40px;
}
```

### SVG Preloader

Lightweight animated SVG circle with timeout fallback for slow connections.

## 📱 Mobile Navigation

The navigation transforms into a full-screen mobile menu with:
- Hamburger icon animation
- Smooth slide-in transition
- Escape key to close
- Body scroll prevention when open
- Automatic close on link click

## 🌊 Animation Philosophy

Animations are:
- **Purposeful**: Every motion serves a function
- **Subtle**: Gentle fades and translates
- **Respectful**: Honors `prefers-reduced-motion`
- **Performant**: Uses CSS transforms and opacity

## 📄 License

This project is created for educational and demonstration purposes. Feel free to use, modify, and distribute.

## 🙏 Acknowledgments

Inspired by:
- The Japanese tea ceremony (茶道)
- The concept of Ma (間) - negative space
- Wabi-sabi aesthetics
- Traditional Japanese design principles

---

**Kyoto Tea House** - Preserving tradition through digital craft.
