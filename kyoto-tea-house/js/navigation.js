/**
 * Navigation Module
 * Handles fixed navigation behavior and mobile menu toggle
 */

/**
 * Initialize navigation functionality
 */
export function initNavigation() {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  // Handle scroll effect on header
  handleHeaderScroll(header);
  
  // Handle mobile menu toggle
  if (navToggle) {
    handleMobileMenu(navToggle, navList);
  }
  
  // Handle smooth scroll for anchor links
  handleSmoothScroll();
  
  console.log('Navigation initialized');
}

/**
 * Add scroll effect to header
 * @param {HTMLElement} header - Header element
 */
function handleHeaderScroll(header) {
  if (!header) return;
  
  let lastScrollY = window.scrollY;
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        // Add scrolled class when page is scrolled
        if (lastScrollY > 50) {
          header.classList.add('is-scrolled');
        } else {
          header.classList.remove('is-scrolled');
        }
        
        ticking = false;
      });
      
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Handle mobile menu toggle
 * @param {HTMLElement} toggle - Toggle button
 * @param {HTMLElement} navList - Navigation list
 */
function handleMobileMenu(toggle, navList) {
  // Create mobile menu container if it doesn't exist
  createMobileMenu(navList);
  
  toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    
    // Toggle aria-expanded
    toggle.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle mobile menu visibility
    const mobileMenu = document.querySelector('.nav-menu-mobile');
    if (mobileMenu) {
      mobileMenu.classList.toggle('is-open');
    }
    
    // Prevent body scroll when menu is open
    if (!isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });
  
  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.nav-menu-mobile .nav-link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      const mobileMenu = document.querySelector('.nav-menu-mobile');
      if (mobileMenu) {
        mobileMenu.classList.remove('is-open');
      }
      document.body.style.overflow = '';
    });
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        toggle.setAttribute('aria-expanded', 'false');
        const mobileMenu = document.querySelector('.nav-menu-mobile');
        if (mobileMenu) {
          mobileMenu.classList.remove('is-open');
        }
        document.body.style.overflow = '';
      }
    }
  });
}

/**
 * Create mobile menu container
 * @param {HTMLElement} navList - Original navigation list
 */
function createMobileMenu(navList) {
  // Check if mobile menu already exists
  if (document.querySelector('.nav-menu-mobile')) {
    return;
  }
  
  // Create mobile menu container
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'nav-menu-mobile';
  
  // Clone navigation links
  if (navList) {
    const clonedNavList = navList.cloneNode(true);
    clonedNavList.className = 'nav-list-mobile';
    clonedNavList.style.cssText = 'display: flex; flex-direction: column; gap: 2rem; list-style: none; margin: 0; padding: 0;';
    
    mobileMenu.appendChild(clonedNavList);
    document.body.appendChild(mobileMenu);
  }
}

/**
 * Handle smooth scrolling for anchor links
 */
function handleSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        // Smooth scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without jumping
        history.pushState(null, null, href);
      }
    });
  });
}
