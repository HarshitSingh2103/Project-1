/**
 * Kyoto Tea House - Main JavaScript Entry Point
 * Initializes all modules for the application
 */

import { initScrollReveals } from './observer.js';
import { initNavigation } from './navigation.js';
import { initPreloader } from './preloader.js';

// Initialize application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize preloader first
  initPreloader();
  
  // Initialize navigation
  initNavigation();
  
  // Initialize scroll reveals
  initScrollReveals();
  
  // Log initialization
  console.log('Kyoto Tea House initialized');
});
