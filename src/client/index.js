// JavaScript
import { fetchDay } from './js/date';
import { toggleNavOpen } from './js/toggle';

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

export { fetchDay, toggleNavOpen }