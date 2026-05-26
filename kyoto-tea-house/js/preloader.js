/**
 * Preloader Module
 * Lightweight SVG preloader with timeout fallback
 */

/**
 * Initialize preloader functionality
 */
export function initPreloader() {
  const preloader = document.getElementById('preloader');
  
  if (!preloader) {
    console.warn('Preloader element not found');
    return;
  }
  
  // Hide preloader when page is fully loaded
  window.addEventListener('load', () => {
    hidePreloader(preloader);
  });
  
  // Fallback for slow connections (3 second max)
  const fallbackTimeout = setTimeout(() => {
    if (preloader.parentNode) {
      hidePreloader(preloader);
    }
  }, 3000);
  
  // Clear fallback timeout if load fires first
  window.addEventListener('load', () => {
    clearTimeout(fallbackTimeout);
  });
  
  console.log('Preloader initialized');
}

/**
 * Hide the preloader with animation
 * @param {HTMLElement} preloader - Preloader element
 */
function hidePreloader(preloader) {
  // Add completion class for fade-out animation
  preloader.classList.add('is-complete');
  
  // Remove from DOM after animation completes
  const transitionDuration = getTransitionDuration(preloader);
  
  setTimeout(() => {
    if (preloader.parentNode) {
      preloader.remove();
    }
  }, transitionDuration);
}

/**
 * Get transition duration from CSS
 * @param {HTMLElement} element - Element to check
 * @returns {number} Duration in milliseconds
 */
function getTransitionDuration(element) {
  const style = window.getComputedStyle(element);
  const duration = style.transitionDuration;
  
  // Convert to milliseconds
  if (duration.includes('ms')) {
    return parseFloat(duration);
  } else if (duration.includes('s')) {
    return parseFloat(duration) * 1000;
  }
  
  // Default fallback
  return 600;
}

/**
 * Manually trigger preloader hide (utility function)
 */
export function hidePreloaderManual() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    hidePreloader(preloader);
  }
}
