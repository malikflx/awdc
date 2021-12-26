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
  if (previousScrollPosition > currentScrollPosition) {
    document.getElementById("logo-navigation").style.display = "flex";
  } else {
    document.getElementById("logo-navigation").style.display = "none";
  }
  previousScrollPosition = currentScrollPosition;
}

export { fetchDay, toggleNavOpen }