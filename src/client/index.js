// JavaScript
import { fetchDay } from './js/date';
import { toggleNavOpen } from './js/toggle';
// import { toggleNavBackground } from './js/toggle';

// Styles
import './styles/resets.scss';
import './styles/header.scss';
import './styles/base.scss';

// HTML
import './views/index.html';

document.addEventListener('DOMContentLoaded', () => {
  fetchDay();
});

let hamburgerIcon = document.getElementById('nav-button');
hamburgerIcon.addEventListener('click', toggleNavOpen);

let previousScrollPosition = window.pageYOffset;

window.onscroll = function toggleNavBackground() {
  let currentScrollPosition = window.pageYOffset;
  let logoNavigation = document.getElementById("logo-navigation");
  if (previousScrollPosition > currentScrollPosition) {
    logoNavigation.classList.remove("fadeOut");
    logoNavigation.classList.add("fadeIn");
  } else {
    logoNavigation.classList.add("fadeOut");
  }
  previousScrollPosition = currentScrollPosition;
}

export { fetchDay, toggleNavOpen }