/**
 * Scroll Reveal Module
 * Uses Intersection Observer API for efficient scroll-based animations
 * Total size: < 5KB
 */

/**
 * Initialize scroll reveal animations using Intersection Observer
 */
export function initScrollReveals() {
  // Check if Intersection Observer is supported
  if (!('IntersectionObserver' in window)) {
    // Fallback: reveal all elements immediately
    document.querySelectorAll('[data-reveal]').forEach(el => {
      el.classList.add('is-revealed');
    });
    return;
  }

  // Observer options
  const options = {
    root: null,           // Use viewport as root
    rootMargin: '0px 0px -100px 0px',  // Trigger when element is 100px from bottom
    threshold: 0.1        // Trigger when 10% of element is visible
  };

  // Create observer instance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add revealed class
        entry.target.classList.add('is-revealed');
        
        // Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  }, options);

  // Observe all elements with data-reveal attribute
  const revealElements = document.querySelectorAll('[data-reveal]');
  revealElements.forEach(el => {
    observer.observe(el);
  });

  // Log number of observed elements (debug)
  console.log(`Scroll reveals initialized: ${revealElements.length} elements`);
}

/**
 * Utility function to manually trigger reveal on specific element
 * @param {HTMLElement} element - Element to reveal
 */
export function revealElement(element) {
  if (element) {
    element.classList.add('is-revealed');
  }
}

/**
 * Utility function to hide element again
 * @param {HTMLElement} element - Element to hide
 */
export function hideElement(element) {
  if (element) {
    element.classList.remove('is-revealed');
  }
}
