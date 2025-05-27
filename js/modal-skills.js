// Modal de skills
const modal = document.getElementById('skill-modal');
const modalTitle = document.getElementById('skill-modal-title');
const modalDesc = document.getElementById('skill-modal-desc');
const closeModal = document.getElementById('close-skill-modal');

document.querySelectorAll('.skill-card').forEach((card) => {
  card.addEventListener('click', () => {
    modalTitle.textContent = card.getAttribute('data-title');
    modalDesc.textContent = card.getAttribute('data-desc');
    modal.classList.remove('hidden');
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Fecha modal ao clicar fora
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});
