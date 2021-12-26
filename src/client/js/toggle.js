function toggleNavOpen() {
  document.body.classList.toggle('nav-open');
}

// const toggleNavBackground = () => {
//   let previousScrollPosition = window.pageYOffset;
//   let currentScrollPosition = window.pageYOffset;
//   if (previousScrollPosition > currentScrollPosition) {
//     document.getElementById("logo-navigation").style.display = "flex";
//   } else {
//     document.getElementById("logo-navigation").style.display = "none";
//   }
//   previousScrollPosition = currentScrollPosition;
// }

export { toggleNavOpen }