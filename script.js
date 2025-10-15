// Add event listener to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project');
projectCards.forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'scale(1)';
  });
});
