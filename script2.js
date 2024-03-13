const scrollToTopButton = document.getElementById('scroll-to-top');

// Show the button when the page is scrolled down
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 500) {
    scrollToTopButton.style.opacity = 1;
  } else {
    scrollToTopButton.style.opacity = 0;
  }
});

// Smoothly scroll the page back to the top when the button is clicked
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});