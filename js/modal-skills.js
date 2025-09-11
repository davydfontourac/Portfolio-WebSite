// Modal de skills
// Tabs modernas para skills
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.skills-tab');
  const panels = document.querySelectorAll('.skills-panel');
  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      // Remove active de todos os tabs
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      // Esconde todos os painéis
      panels.forEach((panel) => panel.classList.add('hidden'));
      // Mostra o painel correspondente
      const panel = document.querySelector('.skills-panel[data-panel="' + tab.dataset.tab + '"]');
      if (panel) panel.classList.remove('hidden');
    });
  });
  // Ativa o primeiro tab por padrão
  if (tabs.length && panels.length) {
    tabs[0].classList.add('active');
    panels.forEach((panel, i) => {
      if (i === 0) panel.classList.remove('hidden');
      else panel.classList.add('hidden');
    });
  }
});
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
