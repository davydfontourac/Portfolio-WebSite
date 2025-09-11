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
  document.querySelectorAll('.skill-card').forEach((card) => {
    card.addEventListener('click', () => {
      // Fecha todos os cards antes
      document.querySelectorAll('.skill-card').forEach((c) => c.classList.remove('open'));

      // Abre só o card clicado
      card.classList.add('open');
    });
  });

  // Accordion para cards de skills
  document.querySelectorAll('.skills-panel').forEach((panel) => {
    panel.querySelectorAll('.skill-card').forEach((card) => {
      const desc = card.getAttribute('data-desc');
      let details = card.querySelector('.skill-details');
      if (!details) {
        details = document.createElement('div');
        details.className = 'skill-details hidden w-full mt-2';
        details.innerHTML = `<p class=\"text-gray-700 dark:text-gray-300 mb-2\">${desc}</p>`;
        card.appendChild(details);
      }
      card.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' || e.target.closest('a')) return;
        const isOpen = card.classList.contains('scale-105');
        // Fecha todos os cards de TODOS os painéis
        document.querySelectorAll('.skill-card').forEach((c) => {
          c.classList.remove('scale-105');
          c.querySelector('.skill-details').classList.add('hidden');
        });
        // Alterna o atual
        if (!isOpen) {
          details.classList.remove('hidden');
          card.classList.add('scale-105');
          console.log('Expandindo:', card.getAttribute('data-title'));
        } else {
          console.log('Recolhendo:', card.getAttribute('data-title'));
        }
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          card.click();
        }
      });
    });
  });
});
