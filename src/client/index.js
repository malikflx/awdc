// JavaScript
import { fetchDay } from './js/date';

// Styles
import './styles/resets.scss';
import './styles/header.scss';
import './styles/base.scss';

// HTML
import './views/index.html';

document.addEventListener('DOMContentLoaded', () => {
  fetchDay();
});

export { fetchDay }