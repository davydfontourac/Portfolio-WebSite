// filepath: c:\Users\Usuario\Desktop\Meu-portifolio\assets\js\scripts.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach((section) => {
  section.classList.add('opacity-0', 'translate-y-8', 'transition', 'duration-700');
  observer.observe(section);
});

const container = document.getElementById('formacao-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

// Função para rolar para a esquerda
scrollLeftButton.addEventListener('click', () => {
  container.scrollBy({
    left: -300, // Ajuste o valor para controlar a distância da rolagem
    behavior: 'smooth',
  });
});

// Função para rolar para a direita
scrollRightButton.addEventListener('click', () => {
  container.scrollBy({
    left: 300, // Ajuste o valor para controlar a distância da rolagem
    behavior: 'smooth',
  });
});