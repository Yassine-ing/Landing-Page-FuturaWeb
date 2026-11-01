import { initNavigation } from './js/navigation.js';
import { initModal } from './js/modal.js';
import { initCarousel } from './js/carousel.js';
import { initForm } from './js/form.js';
import { initAnimations } from './js/animations.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initModal();
  initCarousel();
  initForm();
  initAnimations();
});