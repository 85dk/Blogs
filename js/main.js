const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

// Load saved theme from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark');
  icon.classList.replace('fa-moon', 'fa-sun');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const darkModeOn = document.body.classList.contains('dark');

  icon.classList.toggle('fa-moon', !darkModeOn);
  icon.classList.toggle('fa-sun', darkModeOn);

  // Save preference
  localStorage.setItem('darkMode', darkModeOn ? 'enabled' : 'disabled');
});
const searchInput = document.getElementById('searchInput');
const blogCards = document.querySelectorAll('.blog-card');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();

  blogCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(searchTerm) ? 'block' : 'none';
  });
});
